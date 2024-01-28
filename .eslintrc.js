/** @type {import('eslint').ESLint.ConfigData}  */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  rules: {
    // no-unused-imports で import 除去を設定するため無効化
    "@typescript-eslint/no-unused-vars": "off",
    // TypeScript 推奨につき PropTypes ではなく型推論で対応するため
    "react/prop-types": "off",
    // v17 以上は React の import が不要なため
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",

    // GitHub Actions では console.log を許可しない
    "no-console": process.env.GITHUB_ACTIONS === "true" ? "error" : "off",
    // 型変換は想定外の結果を生むため禁止する
    eqeqeq: "error",
  },
};
