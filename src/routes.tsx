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

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <AppRoot />,
    errorElement: <NotFoundPage />,
    handle: {
      crumb: () => <Link to="/">Home</Link>,
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
          crumb: () => <Link to="/about">About</Link>,
          documentTitle: "About",
        },
      },
      {
        path: "/apps",
        handle: {
          crumb: () => <Link to="/apps">Apps</Link>,
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
              crumb: () => <Link to="/apps/math-keeper">Math Keeper</Link>,
              documentTitle: "Apps \u2013 Math Keeper",
            },
          },
          {
            path: "/apps/copy-better",
            element: <CopyBetterPage />,
            handle: {
              crumb: () => <Link to="/apps/copy-better">Copy Better</Link>,
              documentTitle: "Apps \u2013 Copy Better",
            },
          },
          {
            path: "/apps/snake-cubed",
            element: <SnakeCubedPage />,
            handle: {
              crumb: () => <Link to="/apps/snake-cubed">Snake, Cubed</Link>,
              documentTitle: "Apps \u2013 Snake, Cubed",
            },
          },
          {
            path: "/apps/harvesthaul",
            element: <HarvestHaulPage />,
            handle: {
              crumb: () => <Link to="/apps/harvesthaul">HarvestHaul</Link>,
              documentTitle: "Apps \u2013 HarvestHaul",
            },
          },
        ],
      },
      {
        path: "/projects",
        handle: {
          crumb: () => <Link to="/projects">Projects</Link>,
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
              crumb: () => (
                <Link to="/projects/course-grapher">Course Grapher</Link>
              ),
              documentTitle: "Projects \u2013 UCSD Course Grapher",
            },
          },
          {
            path: "/projects/tse",
            element: <TSEPage />,
            handle: {
              crumb: () => (
                <Link to="/projects/tse">Triton Software Engineering</Link>
              ),
              documentTitle: "Projects \u2013 Triton Software Engineering",
            },
          },
          {
            path: "/projects/raytracer",
            element: <RaytracerPage />,
            handle: {
              crumb: () => <Link to="/projects/raytracer">Raytracer</Link>,
              documentTitle: "Projects \u2013 Computer Graphics Raytracer",
            },
          },
          {
            path: "/projects/wrong-cave",
            element: <WrongCavePage />,
            handle: {
              crumb: () => <Link to="/projects/wrong-cave">Wrong Cave!</Link>,
              documentTitle: "Projects \u2013 Wrong Cave!",
            },
          },
        ],
      },
      {
        path: "/contact",
        element: <ContactPage />,
        handle: {
          crumb: () => <Link to="/contact">Contact</Link>,
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
