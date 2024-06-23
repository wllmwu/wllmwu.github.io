import { Link, RouteObject } from "react-router-dom";
import AppRoot from "./AppRoot.tsx";
import Page from "./components/Page.tsx";
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
    errorElement: (
      <Page title="404" hideBanner>
        <NotFoundPage />
      </Page>
    ),
    handle: {
      crumb: () => <Link to="/">Home</Link>,
    },
    children: [
      {
        index: true,
        element: (
          <Page title="Home" hideBreadcrumb>
            <HomePage />
          </Page>
        ),
      },
      {
        path: "/about",
        element: (
          <Page title="About">
            <AboutPage />
          </Page>
        ),
        handle: {
          crumb: () => <Link to="/about">About</Link>,
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
            element: (
              <Page title="Apps">
                <AppsPage />
              </Page>
            ),
          },
          {
            path: "/apps/math-keeper",
            element: (
              <Page title="Math Keeper" seoTitle={"Apps \u2013 Math Keeper"}>
                <MathKeeperPage />
              </Page>
            ),
            handle: {
              crumb: () => <Link to="/apps/math-keeper">Math Keeper</Link>,
            },
          },
          {
            path: "/apps/copy-better",
            element: (
              <Page title="Copy Better" seoTitle={"Apps \u2013 Copy Better"}>
                <CopyBetterPage />
              </Page>
            ),
            handle: {
              crumb: () => <Link to="/apps/copy-better">Copy Better</Link>,
            },
          },
          {
            path: "/apps/snake-cubed",
            element: (
              <Page title="Snake, Cubed" seoTitle={"Apps \u2013 Snake, Cubed"}>
                <SnakeCubedPage />
              </Page>
            ),
            handle: {
              crumb: () => <Link to="/apps/snake-cubed">Snake, Cubed</Link>,
            },
          },
          {
            path: "/apps/harvesthaul",
            element: (
              <Page title="HarvestHaul" seoTitle={"Apps \u2013 HarvestHaul"}>
                <HarvestHaulPage />
              </Page>
            ),
            handle: {
              crumb: () => <Link to="/apps/harvesthaul">HarvestHaul</Link>,
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
            element: (
              <Page title="Projects">
                <ProjectsPage />
              </Page>
            ),
          },
          {
            path: "/projects/course-grapher",
            element: (
              <Page
                title="Course Grapher"
                seoTitle={"Projects \u2013 UCSD Course Grapher"}
              >
                <CourseGrapherPage />
              </Page>
            ),
            handle: {
              crumb: () => (
                <Link to="/projects/course-grapher">Course Grapher</Link>
              ),
            },
          },
          {
            path: "/projects/tse",
            element: (
              <Page
                title="Triton Software Engineering"
                seoTitle={"Projects \u2013 Triton Software Engineering"}
                showTOC
              >
                <TSEPage />
              </Page>
            ),
            handle: {
              crumb: () => (
                <Link to="/projects/tse">Triton Software Engineering</Link>
              ),
            },
          },
          {
            path: "/projects/raytracer",
            element: (
              <Page
                title="Raytracer"
                seoTitle={"Projects \u2013 Computer Graphics Raytracer"}
              >
                <RaytracerPage />
              </Page>
            ),
            handle: {
              crumb: () => <Link to="/projects/raytracer">Raytracer</Link>,
            },
          },
          {
            path: "/projects/wrong-cave",
            element: (
              <Page
                title="Wrong Cave!"
                seoTitle={"Projects \u2013 Wrong Cave!"}
              >
                <WrongCavePage />
              </Page>
            ),
            handle: {
              crumb: () => <Link to="/projects/wrong-cave">Wrong Cave!</Link>,
            },
          },
        ],
      },
      {
        path: "/contact",
        element: (
          <Page title="Contact">
            <ContactPage />
          </Page>
        ),
        handle: {
          crumb: () => <Link to="/contact">Contact</Link>,
        },
      },
      {
        path: "/privacy",
        children: [
          {
            index: true,
            element: (
              <Page title="Privacy policy" hideBanner hideBreadcrumb>
                <PrivacyPage />
              </Page>
            ),
          },
          {
            path: "/privacy/math-keeper",
            element: (
              <Page
                title="Math Keeper privacy policy"
                hideBanner
                hideBreadcrumb
              >
                <MKPrivacyPage />
              </Page>
            ),
          },
          {
            path: "/privacy/copy-better",
            element: (
              <Page
                title="Copy Better privacy policy"
                hideBanner
                hideBreadcrumb
              >
                <CBPrivacyPage />
              </Page>
            ),
          },
          {
            path: "/privacy/snake-cubed",
            element: (
              <Page
                title="Snake, Cubed privacy policy"
                hideBanner
                hideBreadcrumb
              >
                <SCPrivacyPage />
              </Page>
            ),
          },
        ],
      },
    ],
  },
];
