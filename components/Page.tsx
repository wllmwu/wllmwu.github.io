import React from "react";
import Banner from "./Banner";
import styles from "../styles/Page.module.css";

interface PageProps {
  metadata: Record<string, string>;
  children: React.ReactNode;
}

function Page({ metadata, children }: PageProps) {
  return (
    <div className={styles.page}>
      <Banner title={metadata.title} />
      <div className={styles.content}>{children}</div>
    </div>
  );
}

export default Page;
