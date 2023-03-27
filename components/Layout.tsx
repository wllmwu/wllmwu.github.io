import React from "react";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import styles from "../styles/Layout.module.css";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div>
      <a href="#main-content" className={styles.skipLink}>
        Skip to main content
      </a>
      <NavigationBar />
      <main id="main-content">
        <div className={styles.background}>
          <div className={styles.pageContainer}>{children}</div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
