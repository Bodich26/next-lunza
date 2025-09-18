/**
 * Accessible to the public
 * These routes do not require authentication
 * @type {string[]}
 */
export const DEFAULT_AUTH = "/login";

/**
 * Used for authentication
 * These routes will redirect logged in users to /dashboard
 * @type {string[]}
 */
export const AUTH_ROUTES = ["/login", "/register"];

/**
 * The default redirect path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/home";
