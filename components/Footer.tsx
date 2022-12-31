import React from "react";
import Link from "next/link";
import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContent}>
        <div>
          <p>{"\u00a9"} 2023 William Wu.</p>
          <p>Site designed and implemented by me. Built with Next.js, hosted with GitHub Pages.</p>
        </div>
        <div className={styles.rightAlign}>
          <p>
            <Link href="/contact">Contact me</Link>
          </p>
          <p>
            <Link href="/privacy">Privacy policies</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
