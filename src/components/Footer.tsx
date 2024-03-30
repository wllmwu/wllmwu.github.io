import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>{"\u00a9"} 2024 William Wu</p>
        <p>
          Site designed and implemented by me. Built with Vite and React, hosted
          with GitHub Pages. <a href="/privacy">Privacy policies</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
