import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import {
  DEFAULT_AUTH,
  DEFAULT_LOGIN_REDIRECT,
  AUTH_ROUTES,
  PUBLIC_URL_PROFILE,
  PUBLIC_URL_USER,
} from "routes";

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
          cookiesToSet.forEach(({ name, value, options }) =>
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

  if (
    !user &&
    !AUTH_ROUTES.some((path) => request.nextUrl.pathname.startsWith(path!))
  ) {
    const url = request.nextUrl.clone();
    url.pathname = DEFAULT_AUTH!;
    return NextResponse.redirect(url);
  }

  if (
    user &&
    AUTH_ROUTES.some((path) => request.nextUrl.pathname.startsWith(path!))
  ) {
    const url = request.nextUrl.clone();
    url.pathname = DEFAULT_LOGIN_REDIRECT!;
    return NextResponse.redirect(url);
  }

  const slug =
    request.nextUrl.pathname.startsWith(`${PUBLIC_URL_USER}/`) &&
    request.nextUrl.pathname.split(`${PUBLIC_URL_USER}/`)[1];

  if (slug && user) {
    const { data: userProfile } = await supabase
      .from("profiles")
      .select("id, username")
      .ilike("username", slug)
      .single();

    if (userProfile && userProfile.id === user.id) {
      const url = request.nextUrl.clone();
      url.pathname = PUBLIC_URL_PROFILE;
      return NextResponse.redirect(url);
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
