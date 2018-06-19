const path = require("path");
const fs = require("fs");
const theme  = require("./styleguide/src/styles/themes")
// const snapguidist = require("snapguidist");

const componentsDir = path.join(__dirname, "package/src/components");
const componentTree = {};
// const { defaultHandlers } = require("react-docgen");

// function customDisplayName(componentPath) {
//   return (documentation, definition) => {
//     documentation.set("displayName", "v1");
//     documentation.set("path", "Button/v1/Button");

//     console.log(documentation, definition.value.id.name);
//     // Calculate a display name for components based upon the declared class name.
//     // if (
//     //   definition.value.type === "ClassDeclaration" &&
//     //   definition.value.id.type === "Identifier"
//     // ) {
//     //   documentation.set("displayName", "v1");

//     //   // Calculate the key required to find the component in the module exports
//     //   if ( //     //     definition.parentPath.value.type === "ExportNamedDeclaration"
//     //   ) {
//     //     console.log("name", definition.value.id.name);
//     //     documentation.set("path", `v1.${definition.value.id.name}`);
//     //   }
//     // }

//     // // The component is the default export
//     // if (
//     //   definition.parentPath.value.type === "ExportDefaultDeclaration"
//     // ) {
//     //   console.log("isDefault");
//     //   documentation.set("path", "default");
//     // }
//   };
// }

// Build componentTree from project files
if (fs.statSync(componentsDir).isDirectory()) {
  const componentItems = fs.readdirSync(componentsDir);
  componentItems.forEach((componentName) => {
    const fullItemPath = path.join(componentsDir, componentName);
    if (fs.statSync(fullItemPath).isDirectory()) {
      const versionItems = fs.readdirSync(fullItemPath);
      versionItems.forEach((versionName) => {
        componentTree[componentName] = componentTree[componentName] || {};
        componentTree[componentName][versionName] = path.join("./package/src/components", componentName, versionName, `${componentName}.js`);
      });
    }
  });
}

// function generateSection({ componentNames, name, content }) {
//   const sections = componentNames.map((componentName) => {
//     const components = Object.keys(componentTree[componentName]).map((version) => componentTree[componentName][version]);
//     return { name: componentName, components: () => components };
//   });

//   return { content, name, sections };
// }

// This one renders only version 1 for now
function generateSection({ componentNames, name, content }) {
  const components = componentNames.map((componentName) =>
    Object.keys(componentTree[componentName]).map((version) => componentTree[componentName][version])[0]);

  return { content, name, components };
}

module.exports = {
  title: "Reaction UI Components Style Guide",
  themes,
  sections: [
    {
      name: "Introduction",
      content: "styleguide/src/sections/Introduction.md",
      sections: [
        {
          name: "Installing and Importing the Components",
          content: "styleguide/src/sections/InstallingandImporting.md"
          // description: ""
        }
      ]
    },
    {
      name: "Components",
      sections: [
        generateSection({
          componentNames: ["Button"],
          content: "styleguide/src/sections/Actions.md",
          name: "Actions"
        }),
        generateSection({
          componentNames: ["Price", "StockWarning"],
          content: "styleguide/src/sections/Product.md",
          name: "Product"
        }),
        generateSection({
          componentNames: ["ErrorsBlock", "Field", "Select", "TextInput"],
          content: "styleguide/src/sections/Forms.md",
          name: "Forms"
        })
      ]
    }
  ],
  require: [path.join(__dirname, "styleguide/src/styles.css")],
  webpackConfig: {
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          include: [
            path.resolve(__dirname, "package/src"),
            path.resolve(__dirname, "styleguide/src")
          ],
          loader: "babel-loader"
        },
        {
          test: /\.css$/,
          loader: "style-loader!css-loader"
        }
      ]
    }
  },
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, ".js");
    const dir = path.dirname(componentPath);
    const version = dir.slice(dir.lastIndexOf("/") + 1);
    return `import ${name} from "@reactioncommerce/components/${name}/${version}"`;
  },
  pagePerSection: true,
  serverPort: Number(process.env.PORT),
  assetsDir: "styleguide/src/assets/",
  template: "styleguide/src/index.html"
  // handlers(componentPath) {
  //   return defaultHandlers.concat(
  //     // require("react-docgen-displayname-handler").createDisplayNameHandler(componentPath),
  //     customDisplayName(componentPath));
  // }
};
