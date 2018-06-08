/* eslint-disable no-console */
/* Much of this is borrowed from https://github.com/mui-org/material-ui/blob/master/packages/material-ui/scripts/copy-files.js */

import path from "path";
import fse from "fs-extra";

const DIST_FOLDER = path.join(process.cwd(), "dist");
const COMPONENTS_FOLDER = path.join(DIST_FOLDER, "components");

async function copyFile(file) {
  const buildPath = path.resolve(process.cwd(), "dist", path.basename(file));
  await fse.copy(file, buildPath);
  console.log(`Copied ${file} to ${buildPath}`);
}

async function createPackageFile() {
  const packageData = await fse.readFile(path.resolve(__dirname, "../package.json"), "utf8");
  const { devDependencies, jest, scripts, ...packageDataOther } = JSON.parse(packageData);
  const newPackageData = {
    ...packageDataOther,
    main: "./index.js"
    // module: "./index.es.js"
  };
  const buildPath = path.resolve(__dirname, "../dist/package.json");
  const stringPackageJson = JSON.stringify(newPackageData, null, 2);

  await fse.writeFile(buildPath, `${stringPackageJson}\n`, "utf8");
  console.log(`Created package.json in ${buildPath}`);

  return newPackageData;
}

async function run() {
  // After the Babel build step, we have a `dist` folder but we want to remove the extra `components`
  // folder inside it in order to have flatter import paths. We"ll traverse the `dist/components/*`
  // folders here and move them up a level.
  const directoryContents = await fse.readdir(COMPONENTS_FOLDER);
  const promises = directoryContents.map(async (componentName) => {
    if (componentName.indexOf(".") !== -1) return Promise.resolve();
    const componentFolder = path.join(COMPONENTS_FOLDER, componentName);
    return fse.copy(componentFolder, path.join(DIST_FOLDER, componentName));
  });
  await Promise.all(promises);

  // Then delete `dist/components`
  await fse.remove(COMPONENTS_FOLDER);

  // Then copy the package.json file into the `dist` folder so that we can do `npm publish dist`
  // and thereby remove the `dist` from the import paths, flattening them more.
  await createPackageFile();

  // And copy some other files we want published
  await Promise.all(["./README.md", "./CHANGELOG.md", "./LICENSE.md"].map((file) => copyFile(file)));
}

run();
