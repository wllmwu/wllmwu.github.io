import React, { useCallback, useEffect, useState } from "react";
import { combineClasses } from "../utils";
import { navbarID, NavBarNode } from "./NavigationBar";
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
  const [originalRect, setOriginalRect] = useState<DOMRect>();
  const [positionClass, setPositionClass] = useState<SubmenuPosition>(position);
  const submenuID = `navbar-submenu:${linkPrefix}`;

  const handleResize = useCallback(() => {
    if (typeof document === "undefined") {
      return;
    }
    const navbarElement = document.getElementById(navbarID);
    const submenuElement = document.getElementById(submenuID);
    if (navbarElement === null || submenuElement === null) {
      return;
    }
    const navbarRect = navbarElement.getBoundingClientRect();
    const submenuRect = submenuElement.getBoundingClientRect();
    if (!originalRect) {
      setOriginalRect(submenuRect);
    } else if (originalRect.x + originalRect.width > navbarRect.width) {
      setPositionClass(position === "below" ? "below-left" : "beside-left");
    } else {
      setPositionClass(position);
    }
  }, [originalRect, position, submenuID]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

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
