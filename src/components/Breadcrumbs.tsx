import React from "react";
import { UIMatch, useMatches } from "react-router-dom";
import styles from "../styles/Breadcrumb.module.css";
import { RouteHandle } from "../types";

/**
 * Based on the example at https://reactrouter.com/en/main/hooks/use-matches.
 * Assumes there are no gaps in the breadcrumbs at any point from the root to
 * the current route.
 */
function Breadcrumbs() {
  const matches = useMatches() as UIMatch<unknown, RouteHandle>[];
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
