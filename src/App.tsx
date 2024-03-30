import { Outlet } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import styles from "./App.module.css";

function App() {
  return (
    <HelmetProvider>
      <div>
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
    </HelmetProvider>
  );
}

export default App;
