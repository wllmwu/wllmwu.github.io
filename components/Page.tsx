import React from "react";
import styles from "../styles/Page.module.css";

interface PageProps {
  metadata: Record<string, string>;
  children: React.ReactNode;
}

function Page({ metadata, children }: PageProps) {
  return <div className={styles.content}>{children}</div>;
}

export default Page;
