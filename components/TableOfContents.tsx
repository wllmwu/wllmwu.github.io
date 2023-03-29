import React from "react";
import type { IndexItem } from "../utils/IndexContext";

export interface TableOfContentsProps {
  items: IndexItem[];
}

function IndexList({ items }: TableOfContentsProps) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.slug}>
          <a href={`#${item.slug}`}>{item.title}</a>
          {item.children.length > 0 && <IndexList items={item.children} />}
        </li>
      ))}
    </ul>
  );
}

function TableOfContents({ items }: TableOfContentsProps) {
  return (
    <div>
      <p>Contents</p>
      <IndexList items={items} />
    </div>
  );
}

export default TableOfContents;
