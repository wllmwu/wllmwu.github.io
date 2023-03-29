import mdxConfig from "@next/mdx";
import remarkFrontmatter from "remark-frontmatter";
import pageCompiler from "./utils/pageCompiler.js";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "custom",
  },
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

const withMDX = mdxConfig({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkFrontmatter, pageCompiler],
    rehypePlugins: [],
    providerImportSource: "@mdx-js/react",
  },
});

export default withMDX(nextConfig);
