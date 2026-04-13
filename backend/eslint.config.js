import stylistic from "@stylistic/eslint-plugin"
export default [
    {
        plugins: {
            "@stylistic": stylistic,
        },
        rules: {
            "@stylistic/quotes": ["warn", "double"],
            "@typescript-eslint/no-empty-object-type": "warn",
        },
        ignores: [
            // "node_modules/**",
            // ".next/**",
            // "out/**",
            // "build/**",
            // "next-env.d.ts",
        ],
    },
]
