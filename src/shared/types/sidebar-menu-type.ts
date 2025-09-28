import { LucideIcon } from "lucide-react";

export interface MenuItem {
  title: string;
  path: string;
  icon: LucideIcon;
  value?: number;
}

export interface MenuGroup {
  title: string;
  list: MenuItem[];
}
