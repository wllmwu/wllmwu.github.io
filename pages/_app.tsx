import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MDXProvider } from "@mdx-js/react";
import { Headings, Layout } from "#components";

function MyApp({ Component, pageProps }: AppProps) {
  /*return (
    <MDXProvider
      components={{
        h1: Headings.H1,
        h2: Headings.H2,
        h3: Headings.H3,
        h4: Headings.H4,
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MDXProvider>
  );*/
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
