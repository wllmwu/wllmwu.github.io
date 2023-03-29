import React from "react";
import { slugify, stringifyReactNode } from "../utils";

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement>;
type HeadingElementType = React.JSXElementConstructor<HeadingProps>;

const H1Alias: HeadingElementType = (props) => <h1 {...props}>{props.children}</h1>;
const H2Alias: HeadingElementType = (props) => <h2 {...props}>{props.children}</h2>;
const H3Alias: HeadingElementType = (props) => <h3 {...props}>{props.children}</h3>;
const H4Alias: HeadingElementType = (props) => <h4 {...props}>{props.children}</h4>;

function withAnchor(HeadingElement: HeadingElementType) {
  return function HeadingWithAnchor({ children }: HeadingProps) {
    const slug = slugify(stringifyReactNode(children));
    return (
      <HeadingElement id={slug}>
        {children} <a href={`#${slug}`}>#</a>
      </HeadingElement>
    );
  };
}

export const H1: HeadingElementType = withAnchor(H1Alias);
export const H2: HeadingElementType = withAnchor(H2Alias);
export const H3: HeadingElementType = withAnchor(H3Alias);
export const H4: HeadingElementType = withAnchor(H4Alias);
