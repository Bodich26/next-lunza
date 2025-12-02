import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import { AUTH_META, AUTH_ROUTES, PUBLIC_ROUTES } from "routes";

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // Do not run code between createServerClient and
  // supabase.auth.getUser(). A simple mistake could make it very hard to debug
  // issues with users being randomly logged out.

  // IMPORTANT: DO NOT REMOVE auth.getUser()

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { pathname } = request.nextUrl;

  /**
   * ================
   * 🔒 Защита приватных роутов
   * ================
   * Если пользователь не авторизован и пытается попасть на приватную страницу
   */
  const authPaths = Object.values(AUTH_ROUTES);

  if (!user && !authPaths.some((path) => pathname.startsWith(path))) {
    const url = request.nextUrl.clone();
    url.pathname = AUTH_ROUTES.LOGIN; // редирект на страницу входа
    return NextResponse.redirect(url);
  }

  /**
   * ================
   * 🚫 Запрещаем доступ авторизованным к auth страницам
   * ================
   * Например: если пользователь уже вошёл, нет смысла открывать /login, /register и т.п.
   */
  if (user && authPaths.some((path) => pathname.startsWith(path))) {
    const url = request.nextUrl.clone();
    url.pathname = AUTH_META.AFTER_LOGIN_REDIRECT;
    return NextResponse.redirect(url);
  }

  /**
   * ================
   * 👤 Проверка slug профиля
   * ================
   * Если пользователь заходит на /user/:username, и этот username принадлежит ему —
   * перенаправляем на /profile
   */
  const isUserProfilePath = pathname.startsWith(`${PUBLIC_ROUTES.USER}/`);
  if (isUserProfilePath && user) {
    const slug = pathname.split(`${PUBLIC_ROUTES.USER}/`)[1];

    if (slug) {
      const { data: userProfile } = await supabase
        .from("profiles")
        .select("id, username")
        .ilike("username", slug)
        .single();

      if (userProfile && userProfile.id === user.id) {
        const url = request.nextUrl.clone();
        url.pathname = PUBLIC_ROUTES.PROFILE;
        return NextResponse.redirect(url);
      }
    }
  }

  // IMPORTANT: You *must* return the supabaseResponse object as it is.
  // If you're creating a new response object with NextResponse.next() make sure to:
  // 1. Pass the request in it, like so:
  //    const myNewResponse = NextResponse.next({ request })
  // 2. Copy over the cookies, like so:
  //    myNewResponse.cookies.setAll(supabaseResponse.cookies.getAll())
  // 3. Change the myNewResponse object to fit your needs, but avoid changing
  //    the cookies!
  // 4. Finally:
  //    return myNewResponse
  // If this is not done, you may be causing the browser and server to go out
  // of sync and terminate the user's session prematurely!

  return supabaseResponse;
}
