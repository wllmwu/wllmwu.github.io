import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import styles from "./AppRoot.module.css";

function AppRoot() {
  return (
    <div>
      <ScrollRestoration />
      <a href="#main-content" className={styles.skipLink}>
        Skip to main content
      </a>
      <NavigationBar />
      <main id="main-content">
        <div className={styles.background}>
          <div className={styles.pageContainer}>
            <Outlet />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default AppRoot;
