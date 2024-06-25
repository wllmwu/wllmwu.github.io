import type { ShowcaseItem } from "./Showcase";

export const siteShowcases: Record<string, ShowcaseItem> = {
  about: {
    title: "About me",
    description: "Some more information about myself, plus my resume",
    link: "/about",
  },
};

export const appShowcases: Record<string, ShowcaseItem> = {
  copyBetter: {
    title: "Copy Better",
    description:
      "A convenient clipboard extension app for storing and organizing clips to paste anywhere, with 17,000+ downloads on the App Store! Built with Swift and Xcode.",
    link: "/apps/copy-better",
    thumbnail: {
      source: "/images/copy-better/thumbnail.png",
      width: 1067,
      height: 600,
    },
  },
  harvestHaul: {
    title: "HarvestHaul",
    description:
      "A platform to make local farmers' markets more accessible via online orders and loyalty programs. Built with React Native and AWS.",
    link: "/apps/harvesthaul",
    thumbnail: {
      source: "/images/harvesthaul/thumbnail.png",
      width: 1067,
      height: 600,
    },
  },
  mathKeeper: {
    title: "Math Keeper",
    description:
      "A customizable math formula reference app for students and anyone else. Built with Xcode and Objective-C.",
    link: "/apps/math-keeper",
    thumbnail: {
      source: "/images/math-keeper/thumbnail.png",
      width: 1067,
      height: 600,
    },
  },
  snakeCubed: {
    title: "Snake, Cubed",
    description:
      "A three-dimensional, augmented-reality version of the classic snake game. Built with Unity and C#.",
    link: "/apps/snake-cubed",
    thumbnail: {
      source: "/images/snake-cubed/thumbnail.png",
      width: 1067,
      height: 600,
    },
  },
};

export const projectShowcases: Record<string, ShowcaseItem> = {
  courseGrapher: {
    title: "UCSD Course Grapher",
    description:
      "A course planning tool for UCSD students that visualizes course prerequisites as graphs. Built with React and Python.",
    link: "/projects/course-grapher",
    thumbnail: {
      source: "/images/course-grapher/thumbnail.png",
      width: 1067,
      height: 600,
    },
  },
  tse: {
    title: "Triton Software Eng",
    description:
      "Projects for nonprofits that I've worked on as part of a student org at UCSD.",
    link: "/projects/tse",
    thumbnail: {
      source: "/images/tse/thumbnail.png",
      width: 1067,
      height: 600,
    },
  },
  raytracer: {
    title: "Raytracer",
    description:
      "A raytracing program that I built for an advanced computer graphics course.",
    link: "/projects/raytracer",
    thumbnail: {
      source: "/images/raytracer/thumbnail.png",
      width: 480,
      height: 270,
    },
  },
  wrongCave: {
    title: "Wrong Cave!",
    description:
      "A 3D multiplayer game that I created for a software systems course in my final undergraduate quarter.",
    link: "/projects/wrong-cave",
    // thumbnail: {
    //   source: "/images/default-thumbnail.png",
    //   width: 1067,
    //   height: 600,
    // },
  },
};
