import mdxConfig from "@next/mdx";
import remarkFrontmatter from "remark-frontmatter";
import frontmatterCompiler from "./utils/frontmatterCompiler.js";

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
    remarkPlugins: [remarkFrontmatter, frontmatterCompiler],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
