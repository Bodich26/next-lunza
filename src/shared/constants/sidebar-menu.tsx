import { House, MessageSquareText } from "lucide-react";
import { MenuGroup } from "../types";
import { PUBLIC_URL_MAIN, PUBLIC_URL_MESSAGE } from "routes";

export const SidebarMenu: MenuGroup[] = [
  {
    title: "Pages",
    list: [
      {
        title: "Главная",
        path: PUBLIC_URL_MAIN,
        icon: House,
      },
      {
        title: "Сообщения",
        path: PUBLIC_URL_MESSAGE,
        icon: MessageSquareText,
      },
    ],
  },
];
