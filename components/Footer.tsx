import React from "react";
import Link from "next/link";
import { siteMap } from "../utils/navigation";
import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContent}>
        <p>{"\u00a9"} 2023 William Wu</p>
        <p>
          Site designed and implemented by me. Built with Next.js, hosted with GitHub Pages.{" "}
          <Link href="/privacy">Privacy policies</Link>
        </p>
        <p>Site map:</p>
        <ul className={styles.siteMap}>
          {siteMap.map((node) => (
            <li key={node.slug} className={styles.siteMapItem}>
              <p>
                <Link href={`/${node.slug}`}>{node.title}</Link>
              </p>
              {node.children && node.children.length > 0 && (
                <ul className={styles.siteMapInnerList}>
                  {node.children.map((page) => (
                    <li key={page.slug}>
                      <p>
                        <Link href={`/${node.slug}/${page.slug}`}>{page.title}</Link>
                      </p>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Footer;
