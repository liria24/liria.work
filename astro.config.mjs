// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
    output: "static",

    site: "http://liria.work",

    integrations: [tailwind({ applyBaseStyles: false }), icon(), compressor()],
});