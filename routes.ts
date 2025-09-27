/**
 * Accessible to the public
 * These routes do not require authentication
 * @type {string[]}
 */
export const DEFAULT_AUTH = process.env.NEXT_PUBLIC_URL_LOGIN!;

/**
 * Used for authentication
 * These routes will redirect logged in users to /dashboard
 * @type {string[]}
 */
export const AUTH_ROUTES = [
  process.env.NEXT_PUBLIC_URL_LOGIN!,
  process.env.NEXT_PUBLIC_URL_REGISTER!,
  process.env.NEXT_PUBLIC_URL_FORGOT_PASSWORD!,
  process.env.NEXT_PUBLIC_URL_UPDATE_PASSWORD!,
];

/**
 * The default redirect path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = process.env.NEXT_PUBLIC_URL_MAIN!;
export const PUBLIC_URL_MAIN = process.env.NEXT_PUBLIC_URL_MAIN!;
export const PUBLIC_URL_PROFILE = process.env.NEXT_PUBLIC_URL_PROFILE!;
