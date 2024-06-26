import { Link, RouteObject } from "react-router-dom";
import AppRoot from "./AppRoot.tsx";
import HomePage from "./pages/index.mdx";
import AboutPage from "./pages/about.mdx";
import AppsPage from "./pages/apps/index.mdx";
import MathKeeperPage from "./pages/apps/math-keeper.mdx";
import CopyBetterPage from "./pages/apps/copy-better.mdx";
import SnakeCubedPage from "./pages/apps/snake-cubed.mdx";
import HarvestHaulPage from "./pages/apps/harvesthaul.mdx";
import ProjectsPage from "./pages/projects/index.mdx";
import CourseGrapherPage from "./pages/projects/course-grapher.mdx";
import TSEPage from "./pages/projects/tse.mdx";
import RaytracerPage from "./pages/projects/raytracer.mdx";
import WrongCavePage from "./pages/projects/wrong-cave.mdx";
import ContactPage from "./pages/contact.mdx";
import PrivacyPage from "./pages/privacy/index.mdx";
import MKPrivacyPage from "./pages/privacy/math-keeper.mdx";
import CBPrivacyPage from "./pages/privacy/copy-better.mdx";
import SCPrivacyPage from "./pages/privacy/snake-cubed.mdx";
import NotFoundPage from "./pages/404.mdx";

const makeBreadcrumb = (path: string, title: string) =>
  function Breadcrumb() {
    return (
      <Link to={path} className="fancy">
        {title}
      </Link>
    );
  };

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <AppRoot />,
    errorElement: <NotFoundPage />,
    handle: {
      crumb: makeBreadcrumb("/", "Home"),
    },
    children: [
      {
        index: true,
        element: <HomePage />,
        handle: {
          documentTitle: "Home",
        },
      },
      {
        path: "/about",
        element: <AboutPage />,
        handle: {
          crumb: makeBreadcrumb("/about", "About"),
          documentTitle: "About",
        },
      },
      {
        path: "/apps",
        handle: {
          crumb: makeBreadcrumb("/apps", "Apps"),
        },
        children: [
          {
            index: true,
            element: <AppsPage />,
            handle: {
              documentTitle: "Apps",
            },
          },
          {
            path: "/apps/math-keeper",
            element: <MathKeeperPage />,
            handle: {
              crumb: makeBreadcrumb("/apps/math-keeper", "Math Keeper"),
              documentTitle: "Apps \u2013 Math Keeper",
            },
          },
          {
            path: "/apps/copy-better",
            element: <CopyBetterPage />,
            handle: {
              crumb: makeBreadcrumb("/apps/copy-better", "Copy Better"),
              documentTitle: "Apps \u2013 Copy Better",
            },
          },
          {
            path: "/apps/snake-cubed",
            element: <SnakeCubedPage />,
            handle: {
              crumb: makeBreadcrumb("/apps/snake-cubed", "Snake, Cubed"),
              documentTitle: "Apps \u2013 Snake, Cubed",
            },
          },
          {
            path: "/apps/harvesthaul",
            element: <HarvestHaulPage />,
            handle: {
              crumb: makeBreadcrumb("/apps/harvesthaul", "HarvestHaul"),
              documentTitle: "Apps \u2013 HarvestHaul",
            },
          },
        ],
      },
      {
        path: "/projects",
        handle: {
          crumb: makeBreadcrumb("/projects", "Projects"),
        },
        children: [
          {
            index: true,
            element: <ProjectsPage />,
            handle: {
              documentTitle: "Projects",
            },
          },
          {
            path: "/projects/course-grapher",
            element: <CourseGrapherPage />,
            handle: {
              crumb: makeBreadcrumb(
                "/projects/course-grapher",
                "Course Grapher"
              ),
              documentTitle: "Projects \u2013 UCSD Course Grapher",
            },
          },
          {
            path: "/projects/tse",
            element: <TSEPage />,
            handle: {
              crumb: makeBreadcrumb(
                "/projects/tse",
                "Triton Software Engineering"
              ),
              documentTitle: "Projects \u2013 Triton Software Engineering",
            },
          },
          {
            path: "/projects/raytracer",
            element: <RaytracerPage />,
            handle: {
              crumb: makeBreadcrumb("/projects/raytracer", "Raytracer"),
              documentTitle: "Projects \u2013 Computer Graphics Raytracer",
            },
          },
          {
            path: "/projects/wrong-cave",
            element: <WrongCavePage />,
            handle: {
              crumb: makeBreadcrumb("/projects/wrong-cave", "Wrong Cave!"),
              documentTitle: "Projects \u2013 Wrong Cave!",
            },
          },
        ],
      },
      {
        path: "/contact",
        element: <ContactPage />,
        handle: {
          crumb: makeBreadcrumb("/contact", "Contact"),
          documentTitle: "Contact",
        },
      },
      {
        path: "/privacy",
        children: [
          {
            index: true,
            element: <PrivacyPage />,
            handle: {
              documentTitle: "Privacy policy",
            },
          },
          {
            path: "/privacy/math-keeper",
            element: <MKPrivacyPage />,
            handle: {
              documentTitle: "Privacy policy",
            },
          },
          {
            path: "/privacy/copy-better",
            element: <CBPrivacyPage />,
            handle: {
              documentTitle: "Privacy policy",
            },
          },
          {
            path: "/privacy/snake-cubed",
            element: <SCPrivacyPage />,
            handle: {
              documentTitle: "Privacy policy",
            },
          },
        ],
      },
    ],
  },
];
