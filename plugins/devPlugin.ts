/*
 * @Description:
 * @Author: zby
 * @Date: 2023-03-22 14:07:09
 * @LastEditors: zby
 * @Reference:
 */
import { ViteDevServer } from "vite";
import { AddressInfo } from "net";
export let devPlugin = () => {
  return {
    name: "dev-plugin",
    configureServer(server: ViteDevServer) {
      require("esbuild").buildSync({
        entryPoints: ["./src/main/mainEntry.ts"],
        bundle: true,
        platform: "node",
        outfile: "./dist/mainEntry.js",
        external: ["electron"],
      });
      server.httpServer.once("listening", () => {
        let { spawn } = require("child_process");
        let addressInfo = server.httpServer.address() as AddressInfo;
        let httpAddress = `http://${addressInfo.address}:${addressInfo.port}`;
        let electronProcess = spawn(
          require("electron").toString(),
          ["./dist/mainEntry.js", httpAddress],
          {
            cwd: process.cwd(),
            stdio: "inherit",
          }
        );
        electronProcess.on("close", () => {
          server.close();
          process.exit();
        });
      });
    },
  };
};
