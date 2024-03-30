import { defineConfig } from "vite";
import mdx from "@mdx-js/rollup";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// https://mdxjs.com/docs/getting-started/#vite
export default defineConfig({
  plugins: [{ enforce: "pre", ...mdx() }, react()],
});
