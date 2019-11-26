// See https://babeljs.io/docs/en/config-files#root-babelconfigjs-files
module.exports = function (api) {
  const isTest = api.env("test");

  // We set this in the `build:modules` package.json script
  const esmodules = process.env.BABEL_MODULES === "1";

  const plugins = [
    "babel-plugin-styled-components",
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    "@babel/plugin-syntax-dynamic-import",
    [
      "@babel/plugin-transform-runtime",
      {
        useESModules: esmodules
      }
    ]
  ];

  // Config for when running Jest tests
  if (isTest) {
    return {
      presets: [
        [
          "@babel/env",
          {
            corejs: 3,
            useBuiltIns: "entry",
            // https://babeljs.io/docs/en/babel-preset-env#targets
            targets: {
              node: "current",
              browsers: [
                "last 2 versions",
                "ie 11"
              ]
            }
          }
        ],
        "@babel/preset-react"
      ],
      plugins
    };
  }

  const presets = [
    [
      "@babel/env",
      {
        corejs: 3,
        modules: esmodules ? false : "auto",
        // https://babeljs.io/docs/en/babel-preset-env#targets
        targets: {
          node: "8",
          browsers: [
            "last 2 versions",
            "ie 11"
          ]
          // Note: If we eventually drop IE11 supports, it should be safe
          // to go back to passing `esmodules: true` here. But for now,
          // we want the mjs files to be transformed to be IE11 compatible
          // EXCEPT for `import`. This allows Webpack 4 to tree shake this
          // package but yet still remain compatible with IE11 without
          // further transformation by the app using this package.
          // esmodules
        },
        // https://babeljs.io/docs/en/babel-preset-env#usebuiltins-usage-experimental
        useBuiltIns: "entry"
      }
    ],
    "@babel/preset-react"
  ];

  let ignore;
  if (process.env.NODE_ENV === "production") {
    ignore = [
      "**/*.test.js",
      "__snapshots__",
      "**/setupTests.js",
      "**/tests",
      "**/scripts"
    ];
  }

  return {
    ignore,
    presets,
    plugins,
    sourceMaps: true
  };
};

