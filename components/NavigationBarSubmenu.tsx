import React, { useEffect, useState } from "react";
import { combineClasses } from "../utils";
import { NavBarNode } from "./NavigationBar";
import NavigationBarSublink from "./NavigationBarSublink";
import styles from "../styles/NavigationBar.module.css";

type SubmenuPosition = "below" | "below-left" | "beside" | "beside-left";

interface NavigationBarSubmenuProps {
  nodes: NavBarNode[];
  linkPrefix: string;
  currentPath: string[];
  visible: boolean;
  position: "below" | "beside";
}

const positionClassNames: Record<SubmenuPosition, string> = {
  below: styles.below,
  "below-left": `${styles.below} ${styles.left}`,
  beside: styles.beside,
  "beside-left": `${styles.beside} ${styles.left}`,
};

function NavigationBarSubmenu({
  nodes,
  linkPrefix,
  currentPath,
  visible,
  position,
}: NavigationBarSubmenuProps) {
  const [positionClass, setPositionClass] = useState<SubmenuPosition>(position);
  const submenuID = `navbar-submenu:${linkPrefix}`;

  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") {
      return;
    }
    const viewportWidth = window.innerWidth;
    const element = document.getElementById(submenuID);
    if (element === null) {
      return;
    }
    const rect = element.getBoundingClientRect();
    if (rect.x + rect.width > viewportWidth) {
      setPositionClass(position === "below" ? "below-left" : "beside-left");
    }
  }, [position, submenuID]);

  return (
    <menu
      id={submenuID}
      className={combineClasses(
        styles.navigationBarSubmenu,
        !visible ? styles.hidden : "",
        positionClassNames[positionClass]
      )}
    >
      {nodes.map((node) => (
        <NavigationBarSublink
          key={node.slug}
          node={node}
          linkPrefix={linkPrefix}
          currentPath={currentPath}
        />
      ))}
    </menu>
  );
}

export default NavigationBarSubmenu;
