import { defineConfig } from "vite";

import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig(({ command }) => {
    const IS_DEV = command === "serve";

    return {
        base: IS_DEV ? "" : "/build/",
        publicDir: "non_existent_folder",
        build: {
            outDir: "public/build",
            manifest: true,
            rollupOptions: {
                input: ["resources/js/main.ts", "resources/css/app.css"],
            },
        },
        plugins: [svelte()],
    };
});
