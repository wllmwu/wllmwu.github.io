export const trimSlashes: (path: string) => string = (path) => {
  const matches = path.match(/[^/].*[^/]/g);
  if (matches) {
    return matches[0];
  }
  return "";
};

export const combineClasses: (...classNames: string[]) => string = (...classNames) => {
  classNames = classNames.filter((value) => value);
  return classNames.join(" ");
};
