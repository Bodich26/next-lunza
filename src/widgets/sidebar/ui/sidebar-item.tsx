import { List, Link } from "@chakra-ui/react";
import { MenuItem } from "@/shared";

type Props = {
  link: MenuItem;
  isActive: boolean;
  children?: React.ReactNode;
};

export const SidebarItem = ({ link, isActive, children }: Props) => {
  const activeMenu = isActive ? "accentColor" : "textPrimary";

  return (
    <List.Item
      as="li"
      display={"inline-flex"}
      justifyContent={"center"}
      alignItems={"center"}
      className={isActive ? "sidebar-item-line" : ""}
      outline={"none"}
      position={"relative"}
    >
      <Link
        href={link.path}
        color={activeMenu}
        display={"inline-flex"}
        alignItems={"center"}
        outlineWidth={0}
      >
        {children}
      </Link>
    </List.Item>
  );
};
