module.exports = {
  env: {
    node: true,
    es6: true,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["react", "react-native", "@typescript-eslint"],
  settings: {
    react: {
      version: "detect",
    },
  },
  parserOptions: {
    project: ["./tsconfig.json"],
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  extends: [
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  overrides: [
    {
      files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
    },
  ],
  ignorePatterns: ["*.test.ts", "*.story.tsx", "*.spec.ts"],
  rules: {
    quotes: "off",
    "import/extensions": "off",
    "unbound-method": "off",
    "object-property-newline": 1,
    "object-curly-newline": 1,
    "consistent-return": "off",
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": "off",
    "no-unsafe-optional-chaining": "off",
    "default-param-last": "off",
    "class-methods-use-this": "off",
    "no-use-before-define": "off",
    "no-console": "off",
    "restrict-template-expression": 0,
    "react/jsx-props-no-spreading": "off",
    "react/jsx-max-props-per-line": 1,
    "react/jsx-closing-tag-location": 1,
    "react/jsx-newline": 2,
    "react/jsx-filename-extension": "off",
    "react/jsx-no-bind": "off",
    "react/jsx-space-before-closing": "off",
    "react/require-default-props": "off",
    "react/function-component-definition": "off",
    "react/jsx-no-useless-fragment": "off",
    "react/destructuring-assignment": ["off"],
    "react-native/no-unused-styles": 2,
    "react/no-array-index-key": 0,
    "react/prop-types": ["off"],
    "react/no-unstable-nested-components": "off",
    "@typescript-eslint/quotes": [
      "error",
      "double",
      {
        allowTemplateLiterals: true,
      },
    ],
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/restrict-template-expressions": 0,
    "@typescript-eslint/unbound-method": 0,
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/no-misused-promises": 0,
    "max-len": [
      "error",
      {
        tabWidth: 2,
        code: 80,
        comments: 125,
        ignoreComments: false,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
  },
};
