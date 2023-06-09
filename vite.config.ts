/*
 * @Description:
 * @Author: zby
 * @Date: 2023-03-22 13:53:57
 * @LastEditors: zby
 * @Reference:
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { devPlugin, getReplacer } from "./plugins/devPlugin";
import optimizer from "vite-plugin-optimizer";
import { buildPlugin } from "./plugins/buildPlugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [optimizer(getReplacer()), devPlugin(), vue()],
  publicDir: "public",
  build: {
    rollupOptions: {
      plugins: [buildPlugin()],
    },
  },
});
