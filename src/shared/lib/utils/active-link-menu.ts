export const activeLinkMenu = (pathName: string, linkPath: string) => {
  const isPrefixActive = pathName.startsWith(linkPath + "/");
  return pathName === linkPath || isPrefixActive;
};
