import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Breadcrumb from "./Breadcrumbs";
import styles from "../styles/Page.module.css";

interface PageProps {
  title: string;
  seoTitle?: string;
  hideBanner?: boolean;
  hideBreadcrumb?: boolean;
  showTOC?: boolean; // currently unused
  children: React.ReactNode;
}

const formatPageTitle = (pageTitle: string) => `${pageTitle} | William Wu`;

function Page({
  title,
  seoTitle,
  hideBanner,
  hideBreadcrumb,
  children,
}: PageProps) {
  return (
    <div className={styles.page}>
      <Helmet>
        <title>{formatPageTitle(seoTitle ?? title)}</title>
      </Helmet>
      {!hideBanner && <Banner title={title} />}
      {!hideBreadcrumb && <Breadcrumb />}
      <div className={styles.content}>{children}</div>
      <div className={styles.backToTopBox}>
        <a href="#">Back to top</a>
      </div>
    </div>
  );
}

export default Page;
