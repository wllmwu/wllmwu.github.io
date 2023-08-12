export interface IndexItem {
  title: string;
  slug: string;
  depth: number;
  children: IndexItem[];
}

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
