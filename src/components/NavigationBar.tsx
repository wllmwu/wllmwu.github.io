import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import styles from "../styles/NavigationBar.module.css";

interface NavBarLink {
  title: string;
  to: string;
}

const navBarLinks: NavBarLink[] = [
  { title: "Home", to: "/" },
  { title: "About", to: "/about" },
  { title: "Apps", to: "/apps" },
  { title: "Projects", to: "/projects" },
  { title: "Contact", to: "/contact" },
];

function NavigationBar() {
  const location = useLocation();
  const currentPath = location.pathname.split("/");
  const currentBase = currentPath.length > 0 ? `/${currentPath[1]}` : "";

  return (
    <nav className={styles.navigationBar}>
      <Link to="/" className={styles.homeLink}>
        William Wu
      </Link>
      <menu className={styles.topLinkList}>
        {navBarLinks.map((link) => (
          <li key={link.to} className={styles.topLinkItem}>
            <Link
              to={link.to}
              className={classNames(
                styles.topLink,
                currentBase === link.to ? styles.topLinkCurrent : null
              )}
            >
              {link.title.toUpperCase()}
            </Link>
          </li>
        ))}
      </menu>
    </nav>
  );
}

export default NavigationBar;
