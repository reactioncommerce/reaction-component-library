const path = require("path");
const snapguidist = require("snapguidist");

module.exports = snapguidist({
  title: "Reaction Core UI Components",
  sections: [
    {
      name: "Introduction",
      sections: [
        {
          name: "How To Use This Guide",
          content: "docs/HowToUseThisGuide.md"
          // description: ""
        }
      ]
    },
    {
      name: "Components",
      sections: [
        {
          name: "Clickables",
          components: () => [
            "./src/components/Button/Button.jsx"
          ]
        },
        {
          name: "Containers"
        },
        {
          name: "Forms"
        },
        {
          name: "General"
        },
        {
          name: "Images"
        },
        {
          name: "Layouts"
        }
      ]
    }
  ],
  require: [path.join(__dirname, "src/styles.css")],
  webpackConfig: {
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          include: path.resolve(__dirname, "src"),
          loader: "babel-loader"
        },
        {
          test: /\.css$/,
          loader: "style-loader!css-loader"
        }
      ]
    }
  }
});
