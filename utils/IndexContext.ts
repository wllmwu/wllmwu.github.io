import { createContext } from "react";

export interface IndexItem {
  title: string;
  slug: string;
  depth: number;
  children: IndexItem[];
}

export type IndexingFunction = (title: string, slug: string, depth: number) => void;

const IndexContext = createContext<IndexingFunction | undefined>(undefined);

export default IndexContext;
