import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // ⚡ Кэш живёт 10 минут
      staleTime: 10 * 60 * 1000,
      // ⚡ Через 10 минут неиспользуемые данные удаляются из памяти
      gcTime: 10 * 60 * 1000,
      // ⚡ Не делать повторный запрос при открытии вкладки
      refetchOnWindowFocus: false,
      // ⚡ Не обновлять данные при возврате на страницу
      refetchOnReconnect: false,
    },
  },
});
