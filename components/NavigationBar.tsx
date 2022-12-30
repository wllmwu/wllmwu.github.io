import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { trimSlashes } from "../utils";
import NavigationBarTopLink from "./NavigationBarTopLink";
import styles from "../styles/NavigationBar.module.css";

export interface NavBarNode {
  slug: string;
  title: string;
  children?: NavBarNode[];
}

const navBarNodes: NavBarNode[] = [
  {
    slug: "",
    title: "Home",
  },
  {
    slug: "about",
    title: "About",
  },
  {
    slug: "apps",
    title: "Apps",
    children: [
      { slug: "math-keeper", title: "Math Keeper" },
      { slug: "copy-better", title: "Copy Better" },
      { slug: "snake-cubed", title: "Snake, Cubed" },
      { slug: "harvesthaul", title: "HarvestHaul" },
    ],
  },
  {
    slug: "projects",
    title: "Projects",
    children: [
      {
        slug: "tse",
        title: "Triton Software Engineering",
      },
    ],
  },
  {
    slug: "resources",
    title: "Resources",
  },
  {
    slug: "contact",
    title: "Contact",
  },
];

export const navbarID = "navbar";

function NavigationBar() {
  const router = useRouter();
  const currentPath = trimSlashes(router.pathname);
  const pathComponents = currentPath.split("/");

  return (
    <nav id={navbarID} className={styles.navigationBar}>
      <Link href="/" className={styles.homeLink}>
        William Wu
      </Link>
      <menu className={styles.topLinkList}>
        {navBarNodes.map((node) => (
          <NavigationBarTopLink key={node.slug} node={node} currentPath={pathComponents} />
        ))}
      </menu>
    </nav>
  );
}

export default NavigationBar;
