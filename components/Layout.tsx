import React from "react";
import NavigationBar from "./NavigationBar";
import styles from "../styles/Layout.module.css";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.page}>
      <NavigationBar />
      <main>
        <div className={styles.background}>
          <div className={styles.container}>
            <div className={styles.content}>{children}</div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Layout;
