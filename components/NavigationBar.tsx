import React from "react";
import Link from "next/link";

interface NavBarNode {
  slug: string;
  title: string;
  children?: NavBarNode[];
}

const navBarLinks: NavBarNode[] = [
  {
    slug: "about",
    title: "About",
  },
  {
    slug: "apps",
    title: "Apps",
  },
  {
    slug: "projects",
    title: "Projects",
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

function NavigationBar() {
  return (
    <nav>
      <Link href="/">
        <a>William Wu</a>
      </Link>
      <menu>
        {navBarLinks.map((node) => (
          <li key={node.slug}>
            <Link href={`/${node.slug}`}>
              <a>{node.title.toUpperCase()}</a>
            </Link>
          </li>
        ))}
      </menu>
    </nav>
  );
}

export default NavigationBar;
