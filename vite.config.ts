import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: true,
    sourcemap: true,
    ssrManifest: true,
    rollupOptions: {
      cache: true,
      input: {
        index: path.join(__dirname, "src", "utils", "hydrate.tsx"),
      },
    },
    outDir: path.join(__dirname, "dist"),
  },
});
