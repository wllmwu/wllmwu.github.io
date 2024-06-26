import {
  Outlet,
  ScrollRestoration,
  UIMatch,
  useMatches,
} from "react-router-dom";
import { RouteHandle } from "./types";
import Breadcrumbs from "./components/Breadcrumbs";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import styles from "./AppRoot.module.css";

function AppRoot() {
  const matches = useMatches() as UIMatch<unknown, RouteHandle | undefined>[];
  const handle = matches[matches.length - 1].handle;

  const documentTitle = handle?.documentTitle
    ? `${handle.documentTitle} | William Wu`
    : "William Wu";

  return (
    <div>
      <title>{documentTitle}</title>
      <ScrollRestoration />
      <a href="#main-content" className={styles.skipLink}>
        Skip to main content
      </a>
      <NavigationBar />
      <main id="main-content">
        <div className={styles.page}>
          {handle?.crumb !== undefined && <Breadcrumbs />}
          <Outlet />
        </div>
      </main>
      <Footer />
      <div className={styles.backToTopBox}>
        <a href="#">Back to top</a>
      </div>
    </div>
  );
}

export default AppRoot;
