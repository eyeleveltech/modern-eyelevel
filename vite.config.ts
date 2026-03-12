import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { vitePrerenderPlugin } from "vite-prerender-plugin";

const prerenderRoutes = [
  "/",
  // "/about-us",
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // Prerender plugin disabled due to SSR issues with third-party libraries
    // The app will still work perfectly as a client-side React application
    // Uncomment and fix when ready to implement proper SSR
    // vitePrerenderPlugin({
    //   renderTarget: "#root",
    //   prerenderScript: path.resolve(__dirname," ./src/prerender.tsx"),
    //   additionalPrerenderRoutes: prerenderRoutes,
    // }),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "/",
}));
