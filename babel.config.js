// See https://babeljs.io/docs/en/config-files#root-babelconfigjs-files
module.exports = function (api) {
  const isTest = api.env("test");

  // Config for when running Jest tests
  if (isTest) {
    return {
      presets: [
        [
          "@babel/env",
          {
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
      plugins: [
        "babel-plugin-styled-components",
        ["@babel/plugin-proposal-decorators", { legacy: true }],
        ["@babel/plugin-proposal-class-properties", { loose: true }],
        "@babel/plugin-syntax-dynamic-import"
      ]
    };
  }

  // We set this in the `build:modules` package.json script
  const esmodules = process.env.BABEL_MODULES === "1";

  const presets = [
    [
      "@babel/env",
      {
        modules: esmodules ? false : "auto",
        // https://babeljs.io/docs/en/babel-preset-env#targets
        targets: {
          node: "8",
          browsers: [
            "last 2 versions",
            "ie 11"
          ],
          // "browsers" target is ignored when "esmodules" is true
          esmodules
        },
        // https://babeljs.io/docs/en/babel-preset-env#usebuiltins-usage-experimental
        useBuiltIns: "usage"
      }
    ],
    "@babel/preset-react"
  ];

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

