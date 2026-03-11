import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { vitePrerenderPlugin } from "vite-prerender-plugin";

const prerenderRoutes = [
  "/",
  "/about-us",
  "/services",
  "/contact-us",
  "/industries",
  "/careers",
  "/blog",
  "/booking",
  "/apply",
  "/privacy-policy",
  "/terms-and-condition",
  "/careers/real-estate-sales-manager",
  "/careers/head-of-creative-strategy",
  "/careers/visualizer-senior-graphic-designer",
  "/careers/django-devops-engineer",
  "/careers/general-application",
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    vitePrerenderPlugin({
      renderTarget: "#root",
      prerenderScript: path.resolve(__dirname, "./src/prerender.tsx"),
      additionalPrerenderRoutes: prerenderRoutes,
    }),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "/",
}));
