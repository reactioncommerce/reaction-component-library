// https://babeljs.io/docs/en/config-files#jest
module.exports = require("babel-jest").createTransformer({
  rootMode: "upward"
});
