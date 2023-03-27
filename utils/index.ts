export const trimSlashes: (path: string) => string = (path) => {
  const matches = path.match(/[^/].*[^/]/g);
  if (matches) {
    return matches[0];
  }
  return "";
};

export const combineClasses: (...classNames: Array<string | null | undefined>) => string = (
  ...classNames
) => {
  return classNames.filter((value) => value).join(" ");
};
