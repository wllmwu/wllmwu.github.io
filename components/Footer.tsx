import React from "react";
import Link from "next/link";
import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContent}>
        <div>
          {"\u00a9"} 2022 William Wu.
          <br />
          Site designed and implemented by me. Built with Next.js, hosted with GitHub Pages.
        </div>
        <div className={styles.rightAlign}>
          <Link href="/contact">
            <a>Contact me</a>
          </Link>
          <br />
          <Link href="/privacy">
            <a>Privacy policies</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
