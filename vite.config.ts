import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isGitHubPages = mode === "production" && process.env.GITHUB_PAGES === "true";
  const base = isGitHubPages ? "/Be-my-valentine/" : "/";

  return {
    base,
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
    plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    },
  };
});
