import React, { Children, isValidElement } from "react";
import type { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { renderToString } from "react-dom/server";
import { HelmetProvider } from "react-helmet-async";
import type { HelmetServerState } from "react-helmet-async";
import { StaticRouter } from "react-router";
import { TooltipProvider } from "@/components/ui/tooltip";
import AppContent from "./AppContent";

type HeadElement = {
  type: string;
  props: Record<string, unknown>;
  children?: string;
};

const toArray = (value: ReactNode) => Children.toArray(value);

const toHeadElements = (value: ReactNode) =>
  toArray(value)
    .filter(isValidElement)
    .map((element) => ({
      type:
        typeof element.type === "string" ? element.type : String(element.type),
      props: Object.fromEntries(
        Object.entries((element as React.ReactElement).props)
          .filter(
            ([key, val]) =>
              key !== "children" &&
              key !== "dangerouslySetInnerHTML" &&
              key !== "data-rh" &&
              val != null &&
              (typeof val === "string" ||
                typeof val === "number" ||
                typeof val === "boolean"),
          )
          .map(([key, val]) => [key, String(val)]),
      ),
      children:
        typeof (element as React.ReactElement).props.children === "string"
          ? (element as React.ReactElement).props.children
          : typeof (element as React.ReactElement).props.dangerouslySetInnerHTML
                ?.__html === "string"
            ? (element as React.ReactElement).props.dangerouslySetInnerHTML
                .__html
            : undefined,
    })) as HeadElement[];

const getTitle = (value: ReactNode) => {
  const [element] = toArray(value).filter(isValidElement);
  if (!element) return undefined;

  const children = (element as React.ReactElement).props.children;
  if (Array.isArray(children)) {
    return children.join("");
  }

  return typeof children === "string" ? children : undefined;
};

export async function prerender({ url }: { url: string }) {
  const helmetContext: { helmet?: HelmetServerState } = {};
  const queryClient = new QueryClient();
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <StaticRouter location={url}>
            <AppContent />
          </StaticRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>,
  );

  const helmet = helmetContext.helmet;
  const title = helmet
    ? getTitle(helmet.title.toComponent() as unknown as ReactNode)
    : undefined;
  const elements = new Set<HeadElement>([
    ...toHeadElements(helmet?.meta.toComponent() as unknown as ReactNode),
    ...toHeadElements(helmet?.link.toComponent() as unknown as ReactNode),
    ...toHeadElements(helmet?.script.toComponent() as unknown as ReactNode),
  ]);

  const { parseLinks } = await import("vite-prerender-plugin/parse");
  const links = new Set(parseLinks(html));

  return {
    html,
    links,
    head: {
      title,
      elements,
    },
  };
}
