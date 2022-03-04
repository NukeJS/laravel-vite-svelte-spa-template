import { defineConfig } from "vite";
import path from "path";
import { fileURLToPath, URL } from "url";

import Vue from "@vitejs/plugin-vue";

export default defineConfig(({ command }) => {
    const DEV = command === "serve";

    return {
        base: DEV ? "" : "/build/",
        publicDir: "non_existent_folder",
        build: {
            outDir: "public/build",
            rollupOptions: {
                input: ["resources/js/main.ts"],
            },
        },
        resolve: {
            alias: {
                "@": fileURLToPath(new URL("./resources/js", import.meta.url)),
            },
        },
        plugins: [Vue()],
    };
});
