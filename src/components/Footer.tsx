import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>{"\u00a9"} 2024 William Wu</p>
      <p>
        Site designed and implemented by me. Built with Vite and React, hosted
        with GitHub Pages. <a href="/privacy">Privacy policies</a>
      </p>
    </footer>
  );
}

export default Footer;
