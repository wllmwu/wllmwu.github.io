import { ReactNode } from "react";

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

export const stringifyReactNode: (node: ReactNode) => string = (node) => {
  if (typeof node === "string") {
    return node;
  } else if (typeof node === "number") {
    return node.toString();
  } else if (typeof node === "object" && node) {
    if (Symbol.iterator in node) {
      // fragment
      let s = "";
      const iterator = node[Symbol.iterator]();
      let result = iterator.next();
      while (!result.done) {
        s += stringifyReactNode(result.value);
        result = iterator.next();
      }
      return s;
    } else if ("props" in node && "children" in node.props) {
      // element
      return stringifyReactNode(node.props.children as ReactNode);
    }
  }
  return "";
};

export const slugify: (s: string) => string = (s) => {
  return s
    .trim()
    .normalize("NFD")
    .toLowerCase()
    .replaceAll(/[\s\-\u2013\u2014]+/g, "-")
    .replaceAll(/[^a-z0-9_\-.]/g, "");
};
