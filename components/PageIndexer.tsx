import React, { useCallback, useState } from "react";
import type { IndexingFunction, IndexItem } from "../utils/IndexContext";
import IndexContext from "../utils/IndexContext";
import TableOfContents from "./TableOfContents";

export interface PageIndexerProps {
  enabled: boolean;
  children: React.ReactNode;
}

function PageIndexer({ enabled, children }: PageIndexerProps) {
  const [pageIndex, setPageIndex] = useState<IndexItem[]>([]);
  const [indexedSet] = useState<Set<string>>(new Set());

  const appendToIndex = useCallback<IndexingFunction>(
    (title: string, slug: string, depth: number) => {
      if (indexedSet.has(slug)) {
        return;
      }
      let items = pageIndex;
      while (items.length > 0 && items[items.length - 1].depth < depth) {
        items = items[items.length - 1].children;
      }
      items.push({ title, slug, depth, children: [] });
      indexedSet.add(slug);
      setPageIndex(pageIndex.slice());
    },
    [pageIndex, indexedSet]
  );

  if (!enabled) {
    return <>{children}</>;
  }
  return (
    <IndexContext.Provider value={appendToIndex}>
      <TableOfContents items={pageIndex} />
      {children}
    </IndexContext.Provider>
  );
}

export default PageIndexer;
