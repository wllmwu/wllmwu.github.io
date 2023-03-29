import React, { useContext, useEffect } from "react";
import { slugify, stringifyReactNode } from "../utils";
import IndexContext from "../utils/IndexContext";

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement>;
type HeadingElementType = React.JSXElementConstructor<HeadingProps>;

const H1Alias: HeadingElementType = (props) => <h1 {...props}>{props.children}</h1>;
const H2Alias: HeadingElementType = (props) => <h2 {...props}>{props.children}</h2>;
const H3Alias: HeadingElementType = (props) => <h3 {...props}>{props.children}</h3>;
const H4Alias: HeadingElementType = (props) => <h4 {...props}>{props.children}</h4>;

function withAnchor(HeadingElement: HeadingElementType, depth: number) {
  return function HeadingWithAnchor({ children }: HeadingProps) {
    const appendToIndex = useContext(IndexContext);
    const title = stringifyReactNode(children);
    const slug = slugify(title);

    useEffect(() => {
      if (appendToIndex) {
        appendToIndex(title, slug, depth);
      }
    }, [appendToIndex, title, slug]);

    return (
      <HeadingElement id={slug}>
        {children} <a href={`#${slug}`}>#</a>
      </HeadingElement>
    );
  };
}

export const H1: HeadingElementType = withAnchor(H1Alias, 1);
export const H2: HeadingElementType = withAnchor(H2Alias, 2);
export const H3: HeadingElementType = withAnchor(H3Alias, 3);
export const H4: HeadingElementType = withAnchor(H4Alias, 4);
