import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Breadcrumb from "./Breadcrumbs";
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
      <Helmet>
        <title>{formatPageTitle(metadata.seoTitle ?? metadata.title)}</title>
      </Helmet>
      {!metadata.hideBanner && <Banner title={metadata.title} />}
      {!metadata.hideBreadcrumb && <Breadcrumb />}
      <div className={styles.content}>{children}</div>
      <div className={styles.backToTopBox}>
        <a href="#">Back to top</a>
      </div>
    </div>
  );
}

export default Page;
