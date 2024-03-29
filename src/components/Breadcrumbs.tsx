import React from "react";
import { UIMatch, useMatches } from "react-router-dom";
import styles from "../styles/Breadcrumb.module.css";

export interface BreadcrumbHandle {
  crumb?: () => React.ReactNode;
}

function Breadcrumbs() {
  const matches = useMatches() as UIMatch<unknown, BreadcrumbHandle>[];
  const crumbs = matches
    .filter((match) => match.handle?.crumb)
    .map((match) => (match.handle.crumb ? match.handle.crumb() : null));

  return (
    <span className={styles.breadcrumbs}>
      {crumbs.map((crumb, index) => (
        <React.Fragment key={index}>
          {crumb}
          {index < crumbs.length - 1 && " / "}
        </React.Fragment>
      ))}
    </span>
  );
}

export default Breadcrumbs;
