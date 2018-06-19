const path = require("path");
const fs = require("fs");
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
  title: "Reaction Design System",
  editorConfig: { theme: "oceanic-next" },
  theme: {
    sidebarWidth: 320,
    maxWidth: 1000,
    color: {
      // base:
      // light: '#767676',
      // lightest: '#ccc',
      link: '#062a4e',
      linkHover: '#fd8283',
      // border: '#e8e8e8',
      // name: '#7f9a44',
      // type: '#b77daa',
      // error: '#c00',
      // baseBackground: '#fff',
      codeBackground: '#233444',
      // ribbonBackground: '#f9970d',
      // ribbonText: '#fff',
    },
    fontFamily: {
      base: [
        "-apple-system",
        "sans-serif"
      ],
      monospace: ["Overpass Mono", "Menlo", "monospace"]
    },
    fontSize: {
      base: 16,
      text: 16,
      small: 14,
      h1: 39,
      h2: 31,
      h3: 25,
      h4: 20,
      h5: 18,
      h6: 16,
    }
  },
  styles: {
    StyleGuide: {
      content: {
        maxWidth: "initial",
        padding: "0 80px",
      },
      sidebar: {
        backgroundColor: "#f7fdff",
        border: [["#a7edff", "solid"]],
        borderWidth: [[0, 2, 0, 0]]
      },
      logo: {
        borderBottom: [[0]],
        backgroundImage: "url(reaction-design-system-logo.svg)",
        backgroundRepeat: "no-repeat",
        height: 110,
        backgroundPosition: "50%",
      }
    },
    ComponentsList: {
      list: {
        paddingLeft: "40px"
      }
    },
    EditorLoader: {
      '@global': {
        '.CodeMirror.CodeMirror': {
          borderRadius: 5,
          marginTop: 20
        }
      }
    },
    ReactComponent: {
      header: {
        backgroundColor: "#fffbcc",
        margin: "0 -80px 40px -80px",
        padding: "20px 80px 40px 80px"
      },
    },
    SectionHeading: {
      sectionName: {
        color: "#052a4e",
        cursor: "text",
        pointerEvents: "none",
        fontFamily: ["Overpass Mono", "Menlo", "monospace"],
        fontSize: "50px",
        "&:hover, &:active": {
          cursor: "text",
          pointerEvents: "none",
          textDecoration: "none"
        }
      }
    },
    Link: {
      link: {
        '&, &:link, &:visited': {
          color: "#fd8283",
          textDecoration: "underline",
        },
        '&:hover, &:active': {
          color: "#fd8283",
          textDecoration: "none"
        },
      }
    },
    Logo: {
      logo: {
        display: "none",
      }
    },
    TableOfContents: {
      search: {
        position: "relative",
        "&::before": {
          border: "3px solid #052a4e",
          borderRadius: "50%",
          content: "' '",
          display: "block",
          height: 12,
          left: 28,
          width: 12,
          position: "absolute",
          top: "47%",
          zIndex: 1,
          transform: "translateY(-58%)",
        },
        "&::after": {
          background: "#052a4e",
          content: "' '",
          display: "block",
          height: 7,
          left: 38,
          position: "absolute",
          transform: "rotate(-45deg)",
          top: "52%",
          width: 3,
          zIndex: 1,
        }
      },
      input: {
        backgroundColor: "#f6f6f6",
        border: "1px solid #f6f6f6",
        borderRadius: 23,
        paddingLeft: 35,
        "&:focus": {
          borderColor: "#ebebeb",
        }
      }
    }
  },
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
  showCode: true,
  showUsage: true,
  serverPort: Number(process.env.PORT),
  assetsDir: "styleguide/src/assets/",
  template: "styleguide/src/index.html"
  // handlers(componentPath) {
  //   return defaultHandlers.concat(
  //     // require("react-docgen-displayname-handler").createDisplayNameHandler(componentPath),
  //     customDisplayName(componentPath));
  // }
};
