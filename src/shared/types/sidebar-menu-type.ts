import { LucideIcon } from "lucide-react";

export interface MenuItem {
  title: string;
  path: string;
  icon: LucideIcon;
}

export interface MenuGroup {
  title: string;
  list: MenuItem[];
}
