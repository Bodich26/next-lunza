/**
 * ============================
 * 🌍 API ENDPOINTS
 * ============================
 * Серверные маршруты (используются для запросов)
 */
export const API_ROUTES = {
  BASE: process.env.NEXT_PUBLIC_API!,
  MY_PROFILE: process.env.NEXT_PUBLIC_API_MY_PROFILE!,
  MY_POSTS: process.env.NEXT_PUBLIC_API_MY_POSTS!,
} as const;

/**
 * ============================
 * 🔐 AUTH ROUTES
 * ============================
 * Маршруты, связанные с аутентификацией
 */
export const AUTH_ROUTES = {
  LOGIN: process.env.NEXT_PUBLIC_URL_LOGIN!,
  REGISTER: process.env.NEXT_PUBLIC_URL_REGISTER!,
  FORGOT_PASSWORD: process.env.NEXT_PUBLIC_URL_FORGOT_PASSWORD!,
  UPDATE_PASSWORD: process.env.NEXT_PUBLIC_URL_UPDATE_PASSWORD!,
} as const;

export const AUTH_META = {
  PUBLIC_ACCESS: process.env.NEXT_PUBLIC_URL_LOGIN!,
  AFTER_LOGIN_REDIRECT: process.env.NEXT_PUBLIC_URL_MAIN!,
} as const;

/**
 * ============================
 * 🌐 PUBLIC ROUTES
 * ============================
 * Основные публичные страницы (фронтенд)
 */
export const PUBLIC_ROUTES = {
  MAIN: process.env.NEXT_PUBLIC_URL_MAIN!,
  PROFILE: process.env.NEXT_PUBLIC_URL_PROFILE!,
  MESSAGE: process.env.NEXT_PUBLIC_URL_MESSAGE!,
  USER: process.env.NEXT_PUBLIC_URL_USER!,
} as const;
