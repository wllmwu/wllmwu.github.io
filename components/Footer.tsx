import React from "react";
import { siteMap } from "../utils/navigation";
import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>{"\u00a9"} 2023 William Wu</p>
        <p>
          Site designed and implemented by me. Built with Next.js, hosted with GitHub Pages.{" "}
          <a href="/privacy">Privacy policies</a>
        </p>
        <p>Site map:</p>
        <ul className={styles.siteMap}>
          {siteMap.map((node) => (
            <li key={node.slug} className={styles.siteMapItem}>
              <a href={`/${node.slug}`}>{node.title}</a>
              {node.children && node.children.length > 0 && (
                <ul className={styles.siteMapInnerList}>
                  {node.children.map((page) => (
                    <li key={page.slug}>
                      <a href={`/${node.slug}/${page.slug}`}>{page.title}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
