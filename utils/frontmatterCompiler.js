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
            value: "../components",
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
 * @type {import("unified").Plugin<any[], import("mdast").Root, import("mdast").Root>}
 */
const frontmatterCompiler = () => (root) => {
  if (root.children.length === 0) {
    return;
  }
  const node = root.children[0];
  if (node.type !== "yaml") {
    return;
  }
  const data = load(node.value);
  if (typeof data !== "object" || data === null) {
    throw new Error(`Expected frontmatter to describe an object, but got ${node.value}`);
  }
  root.children.push(pageComponentImportNode, pageDefaultExportNode(data));
};

export default frontmatterCompiler;
