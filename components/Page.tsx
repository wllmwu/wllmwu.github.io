import React from "react";
import Head from "next/head";
import Banner from "./Banner";
import styles from "../styles/Page.module.css";

interface PageMetadata {
  title: string;
  seoTitle?: string;
  showBanner?: boolean;
}

interface PageProps {
  metadata: PageMetadata;
  children: React.ReactNode;
}

const formatPageTitle = (pageTitle: string) => `${pageTitle} | William Wu`;

function Page({ metadata, children }: PageProps) {
  return (
    <div className={styles.page}>
      <Head>
        <title>{formatPageTitle(metadata.seoTitle ?? metadata.title)}</title>
      </Head>
      {(metadata.showBanner ?? true) && <Banner title={metadata.title} />}
      <div className={styles.content}>{children}</div>
    </div>
  );
}

export default Page;
