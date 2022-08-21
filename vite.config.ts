import { defineConfig } from "vite";

import laravel from 'laravel-vite-plugin'
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
    plugins: [
        laravel([
            'resources/css/app.css',
            'resources/js/main.ts'
        ]),
        svelte()
    ],
});
