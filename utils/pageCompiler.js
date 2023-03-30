import { load } from "js-yaml";

/**
 * @type {import("mdast-util-mdxjs-esm").MdxjsEsm}
 */
const pageComponentImportNode = {
  type: "mdxjsEsm",
  data: {
    estree: {
      type: "Program",
      sourceType: "module",
      body: [
        {
          type: "ImportDeclaration",
          specifiers: [
            {
              type: "ImportSpecifier",
              imported: {
                type: "Identifier",
                name: "Page",
              },
              local: {
                type: "Identifier",
                name: "Page",
              },
            },
          ],
          source: {
            type: "Literal",
            value: "#components",
          },
        },
      ],
    },
  },
};

/**
 * @type {(entry: [string, any]) => import("estree").Property}
 */
const objectEntryToPropertyNode = (entry) => {
  const [key, value] = entry;
  return {
    type: "Property",
    key: {
      type: "Identifier",
      name: key,
    },
    value: {
      type: "Literal",
      value: value,
    },
    kind: "init",
    method: false,
    shorthand: false,
    computed: false,
  };
};

/**
 * @type {(data: any) => import("estree-jsx").JSXElement}
 */
const jsxBody = (data) => ({
  type: "JSXElement",
  openingElement: {
    type: "JSXOpeningElement",
    name: {
      type: "JSXIdentifier",
      name: "Page",
    },
    attributes: [
      {
        type: "JSXAttribute",
        name: {
          type: "JSXIdentifier",
          name: "metadata",
        },
        value: {
          type: "JSXExpressionContainer",
          expression: {
            type: "ObjectExpression",
            properties: Object.entries(data).map(objectEntryToPropertyNode),
          },
        },
      },
    ],
    selfClosing: false,
  },
  children: [
    {
      type: "JSXExpressionContainer",
      expression: {
        type: "Identifier",
        name: "children",
      },
    },
  ],
  closingElement: {
    type: "JSXClosingElement",
    name: {
      type: "JSXIdentifier",
      name: "Page",
    },
  },
});

/**
 * @type {(data: any) => import("mdast-util-mdxjs-esm").MdxjsEsm}
 */
const pageDefaultExportNode = (data) => ({
  type: "mdxjsEsm",
  data: {
    estree: {
      type: "Program",
      sourceType: "module",
      body: [
        {
          type: "ExportDefaultDeclaration",
          declaration: {
            type: "ArrowFunctionExpression",
            expression: true,
            params: [
              {
                type: "ObjectPattern",
                properties: [
                  {
                    type: "Property",
                    key: {
                      type: "Identifier",
                      name: "children",
                    },
                    value: {
                      type: "Identifier",
                      name: "children",
                    },
                    kind: "init",
                    method: false,
                    shorthand: true,
                    computed: false,
                  },
                ],
              },
            ],
            body: jsxBody(data),
          },
        },
      ],
    },
  },
});

/**
 * @type {(node: import("mdast").Content) => string}
 */
const stringifyContentNode = (node) => {
  if ("children" in node) {
    return node.children.reduce(
      (accumulator, current) => accumulator + stringifyContentNode(current),
      ""
    );
  } else if ("value" in node) {
    return node.value;
  }
  return "";
};

/**
 * @type {(str: string) => string}
 */
const slugify = (str) =>
  str
    .trim()
    .normalize("NFD")
    .toLowerCase()
    .replaceAll(/[\s\-\u2013\u2014]+/g, "-")
    .replaceAll(/[^a-z0-9_\-.]/g, "");

/**
 * @type {(node: import("mdast").Heading) => import("mdast-util-mdx-jsx").MdxJsxFlowElement}
 */
const headingWithAnchor = (node) => {
  const { depth, children } = node;
  const title = stringifyContentNode(node);
  const slug = slugify(title);
  return {
    type: "mdxJsxFlowElement",
    name: `h${depth}`,
    attributes: [{ type: "mdxJsxAttribute", name: "id", value: slug }],
    children: [
      ...children,
      {
        type: "mdxJsxTextElement",
        name: "a",
        attributes: [{ type: "mdxJsxAttribute", name: "href", value: `#${slug}` }],
        children: [{ type: "text", value: "#" }],
      },
    ],
  };
};

/**
 * @type {(root: import("mdast").Root) => void}
 */
export const transformHeadings = (root) => {
  for (let i = 0; i < root.children.length; i++) {
    const child = root.children[i];
    if (child.type === "heading") {
      root.children[i] = headingWithAnchor(child);
    }
  }
};

/**
 * @type {import("unified").Plugin<any[], import("mdast").Root, import("mdast").Root>}
 */
const pageCompiler = () => (root) => {
  // console.log(JSON.stringify(root));
  if (root.children.length === 0) {
    return;
  }
  const node = root.children[0];
  if (node.type !== "yaml") {
    root.children.push(pageComponentImportNode, pageDefaultExportNode({}));
    return;
  }
  const data = load(node.value);
  if (typeof data !== "object" || data === null) {
    throw new Error(`Expected frontmatter to describe an object, but got ${node.value}`);
  }
  transformHeadings(root);
  root.children.push(pageComponentImportNode, pageDefaultExportNode(data));
};

export default pageCompiler;
