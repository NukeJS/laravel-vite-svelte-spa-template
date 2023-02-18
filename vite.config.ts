import { defineConfig } from "vite";

import laravel from 'laravel-vite-plugin'
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
    plugins: [
        // @ts-expect-error
        laravel.default([
            'resources/css/app.css',
            'resources/js/main.ts'
        ]),
        svelte()
    ],
});
