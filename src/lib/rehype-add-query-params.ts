import { visit } from "unist-util-visit";
import type { Node } from "unist";
import type { Element } from "hast";
import { addQueryParams } from "@/utils/url";

export function rehypeAddQueryParams(params: Record<string, string>) {
  return (tree: Node) => {
    // Only visit HTML elements
    visit(tree, "element", (node: Element) => {
      if (node.tagName !== "a") return;

      const href = node.properties?.href as string | undefined;
      if (
        !href ||
        href.startsWith("/") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("#")
      ) {
        return;
      }

      node.properties = {
        ...node.properties,
        href: addQueryParams(href, params),
      };
    });
  };
}
