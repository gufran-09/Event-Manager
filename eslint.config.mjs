import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import standard from "eslint-config-standard";
import prettier from "eslint-config-prettier";

// Register ESLint plugins for Tailwind + Imports
import importPlugin from "eslint-plugin-import";
import tailwindPlugin from "eslint-plugin-tailwindcss";

export default defineConfig([
  ...nextVitals,
  ...nextTs,

  // Standard JS rules
  standard,

  // Plugin rules
  {
    plugins: {
      import: importPlugin,
      tailwindcss: tailwindPlugin,
    },

    rules: {
      // Tailwind-specific rules
      "tailwindcss/classnames-order": "warn",
      "tailwindcss/no-custom-classname": "off",
      "tailwindcss/enforces-shorthand": "off",

      // Import rules (recommended)
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
            "index",
          ],
          "newlines-between": "always",
        },
      ],
    },
  },

  // Prettier must be LAST — disables conflicting style rules
  prettier,

  // Ignore files Next.js generates automatically
  globalIgnores([".next/**", "build/**", "out/**"]),
]);
