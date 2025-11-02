import { House, MessageSquareText } from "lucide-react";
import { MenuGroup } from "../types";
import { PUBLIC_ROUTES } from "routes";

export const sidebarMenu: MenuGroup[] = [
  {
    title: "Pages",
    list: [
      {
        title: "Главная",
        path: PUBLIC_ROUTES.MAIN,
        icon: House,
      },
      {
        title: "Сообщения",
        path: PUBLIC_ROUTES.MESSAGE,
        icon: MessageSquareText,
        value: 12,
      },
    ],
  },
];
