// See https://babeljs.io/docs/en/config-files#root-babelconfigjs-files
module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      "@babel/env",
      {
        targets: {
          node: "current",
          browsers: [
            "last 2 versions",
            "ie 11"
          ]
        },
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
    "@babel/plugin-proposal-optional-chaining"
  ];

  return {
    presets,
    plugins,
    sourceMaps: true
  };
};

