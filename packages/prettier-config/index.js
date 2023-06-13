// @ts-check

const plugins = [
  "@prettier/plugin-xml",
  ...[
    "astro",
    "properties",
    "rust",
    "sql",
    "sh",
    "svelte",
    "toml",
    "jsdoc",
    "curly",
  ].map((p) => `prettier-plugin-${p}`),
];

module.exports = {
  quoteProps: "preserve",
  trailingComma: "all",
  htmlWhitespaceSensitivity: "ignore",
  overrides: [
    {
      files: "*.html",
      options: {
        parser: "angular",
      },
    },
  ],
  plugins: plugins.map((p) => require.resolve(p)),

  // Plugin Options
  // JSDoc
  jsdocPreferCodeFences: true,
  tsdoc: true,
};
