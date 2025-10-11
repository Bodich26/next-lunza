"use client";
import { useEffect } from "react";

type UseClickOutsideOptions = {
  /** Срабатывает, если клик вне контейнера */
  onOutsideClick: () => void;
  /** Флаг: активен ли обработчик (чтобы не слушать всегда) */
  enabled?: boolean;
};

/**
 * Хук для обработки кликов вне элемента
 * @param ref - ссылка на контейнер
 * @param options - колбэк и настройки
 */
export const useClickOutside = (
  ref: React.RefObject<HTMLElement | null>,
  { onOutsideClick, enabled = true }: UseClickOutsideOptions
) => {
  useEffect(() => {
    if (!enabled) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onOutsideClick();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onOutsideClick, enabled]);
};
