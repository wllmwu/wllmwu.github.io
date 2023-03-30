import React from "react";
import Head from "next/head";
import type { IndexItem } from "../utils";
import Banner from "./Banner";
import Breadcrumb from "./Breadcrumb";
import TableOfContents from "./TableOfContents";
import styles from "../styles/Page.module.css";

interface PageMetadata {
  title: string;
  seoTitle?: string;
  hideBanner?: boolean;
  hideBreadcrumb?: boolean;
  showTOC?: boolean;
  contentIndex?: IndexItem[];
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
      {!metadata.hideBanner && <Banner title={metadata.title} />}
      {!metadata.hideBreadcrumb && <Breadcrumb />}
      {metadata.showTOC && metadata.contentIndex && (
        <TableOfContents items={metadata.contentIndex} />
      )}
      <div className={styles.content}>{children}</div>
      <div className={styles.backToTopBox}>
        <a href="#">Back to top</a>
      </div>
    </div>
  );
}

export default Page;
