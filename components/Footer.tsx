import React from "react";
import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContent}>
        <div>
          {"\u00a9"} 2022 William Wu
          <br />
          Site designed and implemented by me. Built with Next.js, hosted with GitHub Pages.
        </div>
        <div className={styles.rightAlign}>
          <a href="/contact">Contact me</a>
          <br />
          <a href="/privacy">Privacy policies</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
