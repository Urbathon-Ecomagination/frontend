module.exports = {
    root: true,
    env: {
        node: true,
        es6: true,
        jest: true,
    },
    ignorePatterns: ['.eslintrc.js'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
    ],
    settings: {
        react: {
            version: 'detect',
        },
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: [
        '@typescript-eslint/eslint-plugin',
        'prettier',
        'jsx-a11y',
        'unused-imports',
        'effector',
    ],
    rules: {
        'prettier/prettier': 'error',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        'react/jsx-props-no-spreading': 'off',
        'linebreak-style': 'off',
        'import/prefer-default-export': 'off',
        'import/prefer-named-export': 'off',
        'import/no-default-export': 'off',
        'react/jsx-boolean-value': 'error',
        'react/display-name': 'off',
        'react/no-array-index-key': 'off',
        'react/no-danger': 'off',
        'react/prop-types': 'off',
        '@typescript-eslint/naming-convention': [
            'warn',
            {
                selector: 'variable',
                format: ['camelCase', 'PascalCase', 'snake_case', 'UPPER_CASE'],
                leadingUnderscore: 'allow',
                trailingUnderscore: 'allow',
            },
            {
                selector: 'property',
                filter: '^__html$',
                format: null,
            },
        ],
        '@typescript-eslint/lines-between-class-members': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
            'warn',
            {
                vars: 'all',
                varsIgnorePattern: '^_',
                args: 'after-used',
                argsIgnorePattern: '^_',
            },
        ],
    },
};
