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

/**
 * @name generateSection
 * @summary generates an object that builds a section in the styleguide
 * @param {Object} options - Function parameters
 * @param {[String]} componentNames - Array of strings of component names
 * @param {String} name - Name of section
 * @param {String} content - path to markdown content file
 * @returns {Object} with content, name, components keys
 */
function generateSection({ componentNames, name, content }) {
  const components = componentNames.map((componentName) =>
    Object.keys(componentTree[componentName]).map((version) => componentTree[componentName][version])[0]);

  return { content, name, components };
}

module.exports = {
  title: "Storefront Component Library | Reaction Commerce",
  theme: {
    sidebarWidth: 320,
    maxWidth: 1000,
    color: {
      link: "#062a4e",
      linkHover: "#fd8283"
    },
    fontFamily: {
      base: [
        "'PostGrotesk-Regular'",
        "-apple-system",
        "sans-serif"
      ],
      monospace: ["Overpass Mono", "Menlo", "monospace"]
    },
    fontSize: {
      base: 16,
      text: 16,
      small: 14,
      h1: 40,
      h2: 40,
      h3: 40,
      h4: 25,
      h5: 20,
      h6: 18
    }
  },
  styles: {
    Text: {
      strong: {
        fontFamily: ["'PostGrotesk-Bold'", "-apple-system", "sans-serif"]
      }
    },
    Para: {
      para: {
        "width": "60%",
        "@media screen and (max-width: 800px)": {
          width: "100%"
        }
      }
    },
    List: {
      list: {
        "width": "60%",
        "@media screen and (max-width: 800px)": {
          width: "100%"
        }
      },
      ordered: {
        "width": "60%",
        "@media screen and (max-width: 800px)": {
          width: "100%"
        }
      },
      unordered: {
        "width": "60%",
        "@media screen and (max-width: 800px)": {
          width: "100%"
        }
      }
    },
    StyleGuide: {
      hasSidebar: {
        "paddingLeft": "320px",
        "@media screen and (max-width: 800px)": {
          paddingLeft: 0
        }
      },
      content: {
        "maxWidth": "initial",
        "padding": "0 80px",
        "@media screen and (max-width: 800px)": {
          padding: "0 16px"
        }
      },
      sidebar: {
        "backgroundColor": "#f7fdff",
        "border": [["#a7edff", "solid"]],
        "borderWidth": [[0, 2, 0, 0]],
        "paddingLeft": 25,
        "@media screen and (max-width: 800px)": {
          position: "static",
          width: "auto",
          borderWidth: [[1, 0, 0, 0]],
          paddingBottom: "4px"
        }
      },
      logo: {
        borderBottom: [[0]],
        backgroundImage: "url(storefront-component-library-logo.svg)",
        backgroundRepeat: "no-repeat",
        height: 110,
        backgroundPosition: "25% 50%",
        backgroundSize: 235
      }
    },
    EditorLoader: {
      "@global": {
        ".CodeMirror.CodeMirror": {
          borderRadius: 3,
          marginTop: 20,
          marginBottom: 20
        }
      }
    },
    Playground: {
      controls: {
        marginTop: "40px"
      }
    },
    ComponentsList: {
      item: {
        "color": "#062a4e",
        "fontSize": 14,
        "& > a": {
          display: "inline",
          fontFamily: "PostGrotesk-Bold !important",
          letterSpacing: "0.6px !important",
          textDecoration: "none !important"
        }
      },
      isChild: {
        "& > a": {
          fontFamily: "PostGrotesk-Regular !important",
          letterSpacing: "0.4px !important"
        },
        "& > a:hover": {
          cursor: "pointer",
          backgroundImage: "linear-gradient(#f7fdff 50%, #a7edff 50%) !important",
          backgroundRepeat: "repeat-x !important",
          backgroundSize: "8px 4px !important",
          backgroundPositionY: "0.9em !important",
          transition: "background-image .3s ease-in"
        }
      }
    },
    Heading: {
      heading1: {
        fontFamily: "PostGrotesk-Medium",
        marginTop: "20px"
      },
      heading2: {
        fontFamily: "PostGrotesk-Medium"
      },
      heading3: {
        fontFamily: "PostGrotesk-Medium",
        color: "#052a4e",
        marginBottom: "30px",
        marginTop: "40px"
      },
      heading4: {
        fontFamily: "PostGrotesk-Regular",
        color: "#052a4e",
        marginBottom: "30px",
        marginTop: "40px"
      },
      heading5: {
        fontFamily: "PostGrotesk-Bold",
        color: "#4d4d4d"
      }
    },
    ReactComponent: {
      header: {
        "backgroundColor": "#fffbcc",
        "margin": "0 -80px 40px -80px",
        "padding": "20px 80px 40px 80px",
        "@media screen and (max-width: 800px)": {
          margin: "0 -16px 40px -16px",
          padding: "20px"
        }
      }
    },
    SectionHeading: {
      sectionName: {
        "color": "#052a4e",
        "cursor": "text",
        "pointerEvents": "none",
        "fontFamily": ["Overpass Mono", "Menlo", "monospace"],
        "fontSize": "50px",
        "word-wrap": "break-word",
        "hyphens": "auto",
        "&:hover, &:active": {
          cursor: "text",
          pointerEvents: "none",
          textDecoration: "none"
        }
      }
    },
    Link: {
      link: {
        "&, &:link, &:visited": {
          color: "inherit",
          textDecoration: "underline"
        },
        "&:hover, &:active": {
          color: "inherit",
          textDecoration: "none"
        }
      }
    },
    Logo: {
      logo: {
        display: "none"
      }
    },
    Table: {
      table: {
        marginBottom: "30px"
      },
      tableHead: {
        borderBottom: [[2, "#a7edff", "solid"]],
        fontFamily: "PostGrotesk-Medium"
      },
      cell: {
        paddingTop: "8px",
        paddingBottom: "8px",
        borderBottom: [[1, "#e7e7e7", "solid"]]
      }
    },
    TableCell: {
      td: {
        paddingTop: "8px",
        paddingBottom: "8px",
        borderBottom: [[1, "#e7e7e7", "solid"]]
      }
    },
    TableHead: {
      thead: {
        borderBottom: [[2, "#a7edff", "solid"]],
        fontFamily: "PostGrotesk-Medium"
      }
    },
    TableOfContents: {
      search: {
        "paddingLeft": 0,
        "position": "relative",
        "&::before": {
          border: "3px solid #052a4e",
          borderRadius: "50%",
          content: "' '",
          display: "block",
          height: 12,
          left: 14,
          width: 12,
          position: "absolute",
          top: "49%",
          zIndex: 1,
          transform: "translateY(-58%)"
        },
        "&::after": {
          background: "#052a4e",
          content: "' '",
          display: "block",
          height: 7,
          left: 24,
          position: "absolute",
          transform: "rotate(-45deg)",
          top: "52%",
          width: 3,
          zIndex: 1
        }
      },
      input: {
        "backgroundColor": "#f6f6f6",
        "border": "1px solid #f6f6f6",
        "borderRadius": 23,
        "padding": 11,
        "paddingLeft": 35,
        "&:focus": {
          borderColor: "#ebebeb"
        }
      }
    },
    Code: {
      code: {
        whiteSpace: "pre-wrap"
      }
    }
  },
  styleguideComponents: {
    Wrapper: path.join(__dirname, "styleguide/src/components/Wrapper")
  },
  sections: [
    {
      name: "Introduction",
      content: "styleguide/src/sections/Introduction.md",
      sections: [
        {
          name: "Using Components",
          content: "styleguide/src/sections/InstallingandImporting.md"
        },
        {
          name: "Theming Components",
          content: "styleguide/src/sections/ThemingComponents.md"
        },
        {
          name: "Understanding Component References",
          content: "styleguide/src/sections/ComponentsContext.md"
        },
        {
          name: "Developing Locally Inside Another Project",
          content: "styleguide/src/sections/LocalDevelopment.md"
        }
      ],
      sectionDepth: 2
    },
    {
      name: "Style",
      sections: [
        {
          name: "Colors",
          content: "styleguide/src/sections/Colors.md"
        },
        {
          name: "Typography",
          content: "styleguide/src/sections/Typography.md"
        }
      ],
      sectionDepth: 2
    },
    {
      name: "Base Components",
      sections: [
        generateSection({
          componentNames: [
            "Button",
            "Link"
          ],
          content: "styleguide/src/sections/Actions.md",
          name: "Actions"
        }),
        generateSection({
          componentNames: [
            "Accordion",
            "Address",
            "InlineAlert",
            "ProgressiveImage"
          ],
          content: "styleguide/src/sections/Content.md",
          name: "Content"
        }),
        generateSection({
          componentNames: [
            "AccordionFormList",
            "Checkbox",
            "ErrorsBlock",
            "Field",
            "MultiSelect",
            "PhoneNumberInput",
            "RegionInput",
            "QuantityInput",
            "Select",
            "SelectableItem",
            "SelectableList",
            "TextInput"
          ],
          content: "styleguide/src/sections/Forms.md",
          name: "Forms"
        }),
        generateSection({
          componentNames: [
            "InPageMenu",
            "InPageMenuItem"
          ],
          content: "styleguide/src/sections/Menus.md",
          name: "Menus"
        })
      ],
      sectionDepth: 2
    },
    {
      name: "Storefront Components",
      sections: [
        generateSection({
          componentNames: [
            "ShopLogo"
          ],
          content: "styleguide/src/sections/General.md",
          name: "General"
        }),
        generateSection({
          componentNames: [
            "AccountProfileInfo",
            "AddressBook",
            "ProfileImage",
            "ViewerInfo"
          ],
          content: "styleguide/src/sections/Account.md",
          name: "Account"
        }),
        generateSection({
          componentNames: [
            "CartEmptyMessage",
            "CartItem",
            "CartItems",
            "CartItemDetail",
            "CartSummary",
            "MiniCart",
            "MiniCartSummary"
          ],
          content: "styleguide/src/sections/Cart.md",
          name: "Cart"
        }),
        generateSection({
          componentNames: [
            "CheckoutAction",
            "CheckoutActionComplete",
            "CheckoutActionIncomplete",
            "CheckoutActions",
            "CheckoutEmailAddress",
            "CheckoutTopHat",
            "ExampleIOUPaymentForm",
            "FinalReviewCheckoutAction",
            "FulfillmentOptionsCheckoutAction",
            "PaymentsCheckoutAction",
            "ShippingAddressCheckoutAction",
            "StripePaymentCheckoutAction",
            "StripePaymentInput"
          ],
          content: "styleguide/src/sections/Checkout.md",
          name: "Checkout"
        }),
        generateSection({
          componentNames: [
            "AddressCapture",
            "AddressChoice",
            "AddressForm",
            "AddressReview",
            "GuestForm",
            "StripeForm"
          ],
          content: "styleguide/src/sections/StorefrontForms.md",
          name: "Forms"
        }),
        generateSection({
          componentNames: [
            "BadgeOverlay",
            "CatalogGridItem",
            "CatalogGrid",
            "InventoryStatus",
            "Price",
            "StockWarning"
          ],
          content: "styleguide/src/sections/Product.md",
          name: "Product"
        })
      ],
      sectionDepth: 2
    }
  ],
  require: ["@babel/polyfill", path.join(__dirname, "styleguide/src/styles.css")],
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
        },
        {
          test: /README\.md$/,
          loader: "ignore-loader"
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
  exampleMode: "collapse",
  usageMode: "expand",
  serverPort: Number(process.env.PORT || 6060),
  assetsDir: "styleguide/src/assets/",
  styleguideDir: "styleguide/dist",
  template: {
    lang: "en",
    head: {
      meta: [
        {
          name: "theme-color",
          content: "#000000"
        }
      ],
      links: [
        {
          rel: "manifest",
          href: "/manifest.json"
        },
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon.png"
        },
        {
          ref: "shortcut icon",
          href: "/favicon.ico"
        }
      ],
      raw: `
<link href="https://fonts.googleapis.com/css?family=Overpass+Mono|Source+Sans+Pro:200,400,600,700" rel="stylesheet">
  <style>
    @font-face {
      font-family: "PostGrotesk-Light";
      src: url("fonts/post-grotesk/PostGrotesk-Light.eot");
      /* IE9 Compat Modes */
      src: url("fonts/post-grotesk/PostGrotesk-Light.woff") format("woff"),
        url("fonts/post-grotesk/PostGrotesk-Light.svg") format("svg");
      font-weight: 300;
    }

    @font-face {
      font-family: "PostGrotesk-Medium";
      src: url("fonts/post-grotesk/PostGrotesk-Medium.eot");
      /* IE9 Compat Modes */
      src: url("fonts/post-grotesk/PostGrotesk-Medium.woff") format("woff"),
        url("fonts/post-grotesk/PostGrotesk-Medium.svg") format("svg");
      font-weight: normal;
    }

    @font-face {
      font-family: "PostGrotesk-Bold";
      src: url("fonts/post-grotesk/PostGrotesk-Bold.eot");
      /* IE9 Compat Modes */
      src: url("fonts/post-grotesk/PostGrotesk-Bold.woff") format("woff"),
        url("fonts/post-grotesk/PostGrotesk-Bold.svg") format("svg");
      font-weight: bold;
    }

    /* PostGrotesk-Regular is PostGrotesk-Book */
    @font-face {
      font-family: "PostGrotesk-Regular";
      src: url("fonts/post-grotesk/PostGrotesk-Book.eot");
      /* IE9 Compat Modes */
      src: url("fonts/post-grotesk/PostGrotesk-Book.woff") format("woff"),
        url("fonts/post-grotesk/PostGrotesk-Book.svg") format("svg");
      font-weight: 800;
    }
  </style>`
    },
    body: {
      scripts: [
        {
          src: "https://js.stripe.com/v3/"
        }
      ]
    }
  }
  // handlers(componentPath) {
  //   return defaultHandlers.concat(
  //     // require("react-docgen-displayname-handler").createDisplayNameHandler(componentPath),
  //     customDisplayName(componentPath));
  // }
};
