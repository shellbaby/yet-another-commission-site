import { FlatCompat } from "@eslint/eslintrc"
import stylistic from "@stylistic/eslint-plugin"
import { dirname } from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
    baseDirectory: __dirname,
})

const eslintConfig = [
    ...compat.extends("next/core-web-vitals", "next/typescript"),
    {
        plugins: {
            "@stylistic": stylistic,
        },
        rules: {
            "@stylistic/quotes": ["warn", "double"],
            "react/react-in-jsx-scope": "off",
            "@stylistic/jsx-self-closing-comp": [
                "error",
                { component: true, html: true },
            ],
            "react/display-name": "off",
            // "@typescript-eslint/no-empty-object-type": "off"
        },
        ignores: [
            "node_modules/**",
            ".next/**",
            "out/**",
            "build/**",
            "next-env.d.ts",
        ],
    },
]

export default eslintConfig
