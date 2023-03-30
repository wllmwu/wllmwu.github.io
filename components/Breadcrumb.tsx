import React from "react";
import { useRouter } from "next/router";
import { trimSlashes } from "../utils";
import type { SiteNode } from "../utils/navigation";
import { siteMap } from "../utils/navigation";
import styles from "../styles/Breadcrumb.module.css";

function Breadcrumb() {
  const router = useRouter();
  const currentPath = trimSlashes(router.pathname).split("/");
  const pathNodes: SiteNode[] = [{ slug: "", title: "Home", children: siteMap }];
  for (const slug of currentPath) {
    const previousNode = pathNodes[pathNodes.length - 1];
    if (!previousNode.children) {
      break;
    }
    const nextNode = previousNode.children.find((node) => node.slug === slug);
    if (!nextNode) {
      break;
    }
    pathNodes.push(nextNode);
  }

  return (
    <span className={styles.breadcrumbs}>
      {pathNodes.map((node, index) => (
        <React.Fragment key={node.slug}>
          <a
            href={
              index === 0
                ? "/"
                : `${pathNodes
                    .slice(0, index + 1)
                    .map((n) => n.slug)
                    .join("/")}`
            }
          >
            {node.title}
          </a>
          {index < pathNodes.length - 1 && " / "}
        </React.Fragment>
      ))}
    </span>
  );
}

export default Breadcrumb;
