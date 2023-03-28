import React from "react";
import Link from "next/link";
import styles from "../styles/Headings.module.css";

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement>;

function H1({ children }: HeadingProps) {
  return <h1>{children}</h1>;
}

function H2({ children }: HeadingProps) {
  return <h2>{children}</h2>;
}

function H3({ children }: HeadingProps) {
  return <h3>{children}</h3>;
}

const Headings = { H1, H2, H3 };

export default Headings;
