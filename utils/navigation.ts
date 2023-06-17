export interface SiteNode {
  slug: string;
  title: string;
  children?: SiteNode[];
}

export const siteMap: SiteNode[] = [
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
      { slug: "copy-better", title: "Copy Better" },
      { slug: "snake-cubed", title: "Snake, Cubed" },
      { slug: "harvesthaul", title: "HarvestHaul" },
      { slug: "math-keeper", title: "Math Keeper" },
    ],
  },
  {
    slug: "projects",
    title: "Projects",
    children: [
      {
        slug: "course-grapher",
        title: "Course Grapher",
      },
      {
        slug: "tse",
        title: "Triton Software Engineering",
      },
      {
        slug: "raytracer",
        title: "Computer Graphics Raytracer",
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
