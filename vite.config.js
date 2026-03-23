import { defineConfig } from "vite";

export default defineConfig({
  // Relative base makes the built site work on GitHub Pages under /<repo>/.
  base: "./",
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        download: "download.html",
      },
    },
  },
});
