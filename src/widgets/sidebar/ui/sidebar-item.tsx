import { List, Link } from "@chakra-ui/react";
import { MenuItem } from "@/shared/types";

type Props = {
  link: MenuItem;
  isActive: boolean;
};

export const SidebarItem = ({ link, isActive }: Props) => {
  const activeMenu = isActive ? "accentColor" : "textWhite";

  return (
    <List.Item as="li" className={isActive ? "sidebar-item-line" : ""}>
      <Link href={link.path} color={activeMenu}>
        <link.icon width={26} height={26} className={activeMenu} />
      </Link>
    </List.Item>
  );
};
