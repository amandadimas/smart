import tailwindcss from "tailwindcss";
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/smart/",
  plugins: [],
  resolve: {

  },
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "./index.html"),
        home: resolve(__dirname, "./home.html"),
        checkout: resolve(__dirname, "./checkout.html"),
        pedidos: resolve(__dirname, "./pedidos.html"),
        confirmacaoOrcamento: resolve(__dirname, "./confirmacaoOrcamento.html"),
      },
    },
  },
});
