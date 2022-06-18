import React from "react";
import NavigationBar from "./NavigationBar";
import styles from "../styles/Layout.module.css";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.layoutWrapper}>
      <NavigationBar />
      <main>
        <div className={styles.background}>
          <div className={styles.container}>{children}</div>
        </div>
      </main>
    </div>
  );
}

export default Layout;
