import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier/flat";
import react from "eslint-plugin-react";

const eslintConfig = defineConfig([
    ...nextVitals,
    ...nextTs,
    {
        plugins: { react },
        rules: {
            "react/jsx-pascal-case": "warn",
            "react/self-closing-comp": "warn",
        },
    },
    prettier,
    // Override default ignores of eslint-config-next.
    globalIgnores([
        // Default ignores of eslint-config-next:
        ".next/**",
        "out/**",
        "build/**",
        "next-env.d.ts",
    ]),
]);

export default eslintConfig;
