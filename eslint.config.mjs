import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import standard from "eslint-config-standard";
import prettier from "eslint-config-prettier";

// Plugins
import importPlugin from "eslint-plugin-import";
import tailwindPlugin from "eslint-plugin-tailwindcss";
import unusedImportsPlugin from "eslint-plugin-unused-imports";

export default defineConfig([
  ...nextVitals,
  ...nextTs,

  // Standard rules
  standard,

  // Plugin registration + rules
  {
    plugins: {
      import: importPlugin,
      tailwindcss: tailwindPlugin,
      "unused-imports": unusedImportsPlugin,
    },

    rules: {
      // Tailwind plugin rules (tune as needed)
      "tailwindcss/classnames-order": "warn",
      "tailwindcss/no-custom-classname": "off",
      "tailwindcss/enforces-shorthand": "off",

      // Import plugin rules
      "import/no-unresolved": "error",
      "import/no-duplicates": "warn",
      "import/order": [
        "warn",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            ["parent", "sibling"],
            "index"
          ],
          "newlines-between": "always",
          pathGroups: [
            {
              pattern: "@/**",
              group: "internal",
              position: "after"
            }
          ]
        }
      ],

      // Unused imports (auto-fixable)
      "unused-imports/no-unused-imports": "warn",
      "unused-imports/no-unused-vars": [
        "warn",
        { vars: "all", varsIgnorePattern: "^_", args: "after-used", argsIgnorePattern: "^_" }
      ]
    }
  },

  // Prettier last to disable conflicting rules
  prettier,

  // Ignore build artifacts
  globalIgnores([".next/**", "build/**", "out/**", "node_modules/**", "dist/**"])
]);

