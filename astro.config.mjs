import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import AutoImport from "unplugin-auto-import/astro";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  vite: {
    optimizeDeps: {
      exclude: ["oslo"],
    },
  },
  integrations: [
    react(),
    tailwind(),
    AutoImport({
      // targets to transform
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.astro$/,
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],

      // global imports to register
      imports: [
        // presets
        "vue",
        "vue-router",
        // custom
        {
          "@vueuse/core": [
            // named imports
            "useMouse", // import { useMouse } from '@vueuse/core',
            // alias
            ["useFetch", "useMyFetch"], // import { useFetch as useMyFetch } from '@vueuse/core',
          ],
          axios: [
            // default imports
            ["default", "axios"], // import { default as axios } from 'axios',
          ],
          "[package-name]": [
            "[import-names]",
            // alias
            ["[from]", "[alias]"],
          ],
        },
        // example type import
        {
          from: "vue-router",
          imports: ["RouteLocationRaw"],
          type: true,
        },
      ],

      // Array of strings of regexes that contains imports meant to be filtered out.
      ignore: ["useMouse", "useFetch"],

      // Enable auto import by filename for default module exports under directories
      defaultExportByFilename: false,

      // Auto import for module exports under directories
      // by default it only scan one level of modules under the directory
      dirs: [
        // './hooks',
        // './composables' // only root modules
        // './composables/**', // all nested modules
        // ...
      ],

      // Filepath to generate corresponding .d.ts file.
      // Defaults to './auto-imports.d.ts' when `typescript` is installed locally.
      // Set `false` to disable.
      dts: "./auto-imports.d.ts",

      // Array of strings of regexes that contains imports meant to be ignored during
      // the declaration file generation. You may find this useful when you need to provide
      // a custom signature for a function.
      ignoreDts: ["ignoredFunction", /^ignore_/],

      // Auto import inside Vue template
      // see https://github.com/unjs/unimport/pull/15 and https://github.com/unjs/unimport/pull/72
      vueTemplate: false,

      // Custom resolvers, compatible with `unplugin-vue-components`
      // see https://github.com/antfu/unplugin-auto-import/pull/23/
      resolvers: [
        /* ... */
      ],

      // Inject the imports at the end of other imports
      injectAtEnd: true,

      // Generate corresponding .eslintrc-auto-import.json file.
      // eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
      eslintrc: {
        enabled: false, // Default `false`
        filepath: "./.eslintrc-auto-import.json", // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
    }),
  ],
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
});
