/*
This component is currently unused
*/

import styles from "./TableOfContents.module.css";

export interface IndexItem {
  title: string;
  slug: string;
  depth: number;
  children: IndexItem[];
}

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
    <div id="table-of-contents" className={styles.tableOfContents}>
      <p className={styles.tocTitle}>Contents</p>
      <IndexList items={items} />
    </div>
  );
}

export default TableOfContents;
