This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Adding pages

The following file types are supported: `.js`, `.jsx`, `.ts`, `.tsx`, `.md`, and `.mdx`. Markdown files are automatically processed and wrapped into `Page` components (see `components/Page.tsx`), but other types of files should incorporate `Page` into themselves.

Support for YAML-style frontmatter in Markdown files is also implemented. The following metadata are expected (see `components/Page.tsx`):

- `title` (string): The title of the page.
- `seoTitle` (optional string): The string to use for the page's actual `<title>` tag in its `<head>`. Will be automatically appended with the site name. If not provided, then defaults to the value of `title`.
- `showBanner` (optional boolean): Whether to include a banner at the top of the page. Defaults to `true`.
