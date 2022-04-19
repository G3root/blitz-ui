import {
  ComputedFields,
  defineDocumentType,
  makeSource,
} from "contentlayer/source-files";

import theme from "./theme.json";

import remarkGfm from "remark-gfm";
import remarkSlug from "remark-slug";
import rehypePrettyCode from "rehype-pretty-code";
import { siteConfig } from "./src/configs";
import { getTableOfContents, rehypeMdxCodeMeta } from "./src/utils";

const rehypePrettyCodeOptions = {
  theme,
  // onVisitLine(node: any) {
  //   // Style a line node.
  //   Object.assign(node.style, {
  //   })
  // },
  onVisitHighlightedLine(node: any) {
    // Style a highlighted line node.
    if (!node.properties.className) {
      node.properties.className = [];
    }
    node.properties.className.push("highlighted");
  },
  onVisitHighlightedWord(node: any) {
    // Style a highlighted word node.
    if (!node.properties.className) {
      node.properties.className = [];
    }
    node.properties.className.push("highlighted");
  },
};

const computedFields: ComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  editUrl: {
    type: "string",
    resolve: (doc) => `${siteConfig.repo.editUrl}/${doc._id}`,
  },
};

const Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: "docs/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
  },
  computedFields: {
    ...computedFields,
    frontMatter: {
      type: "json",
      resolve: (doc) => ({
        title: doc.title,
        description: doc.description,
        category: doc._raw.sourceFileDir.replace("docs/components/", ""),
        slug: `/${doc._raw.flattenedPath}`,
        headings: getTableOfContents(doc.body.raw),
        editUrl: `${siteConfig.repo.editUrl}/${doc._id}`,
      }),
    },
  },
}));

const contentLayerConfig = makeSource({
  contentDirPath: "src/pages",
  documentTypes: [Doc],
  mdx: {
    rehypePlugins: [
      rehypeMdxCodeMeta,
      [rehypePrettyCode, rehypePrettyCodeOptions],
    ],
    remarkPlugins: [remarkSlug, remarkGfm],
  },
});

export default contentLayerConfig;
