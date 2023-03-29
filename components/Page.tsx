import React from "react";
import Head from "next/head";
import Banner from "./Banner";
import Breadcrumb from "./Breadcrumb";
import PageIndexer from "./PageIndexer";
import styles from "../styles/Page.module.css";

interface PageMetadata {
  title: string;
  seoTitle?: string;
  hideBanner?: boolean;
  hideBreadcrumb?: boolean;
  showTOC?: boolean;
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
      <PageIndexer enabled={metadata.showTOC ?? false}>
        <div className={styles.content}>{children}</div>
      </PageIndexer>
    </div>
  );
}

export default Page;
