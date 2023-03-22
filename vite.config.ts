/*
 * @Description:
 * @Author: zby
 * @Date: 2023-03-22 13:53:57
 * @LastEditors: zby
 * @Reference:
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { devPlugin } from "./plugins/devPlugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [devPlugin(), vue()],
});
