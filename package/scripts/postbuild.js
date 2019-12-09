/* eslint-disable no-console */
/* Some of this is borrowed from https://github.com/mui-org/material-ui/blob/master/packages/material-ui/scripts/copy-files.js */

const path = require("path");
const fse = require("fs-extra");
const replaceInFiles = require("replace-in-files");

const DIST_FOLDER = path.join(process.cwd(), "dist");
const DIST_MODULES_FOLDER = path.join(process.cwd(), "dist-modules-temp");
const COMPONENTS_FOLDER = path.join(DIST_FOLDER, "components");

/**
 * @summary Recursively changes all files with one extension to another
 * @param {String} fullDirPath Directory path
 * @param {String} ext Extension to look for
 * @param {String} newExt Extension to change to
 * @returns {Promise<undefined>} Nothing
 */
async function recursivelyChangeExtension(fullDirPath, ext, newExt) {
  const directoryContents = await fse.readdir(fullDirPath);
  const promises = directoryContents.map(async (item) => {
    const childPath = path.join(fullDirPath, item);
    if (item.indexOf(".") === -1) return recursivelyChangeExtension(childPath, ext, newExt);

    if (!item.endsWith(`.${ext}`)) return null;

    await fse.copy(childPath, childPath.replace(`.${ext}`, `.${newExt}`));
    await fse.remove(childPath);

    return null;
  });
  await Promise.all(promises);
}

/**
 * @summary Copies a file to the build directory
 * @param {String} file File path
 * @returns {Promise<undefined>} Nothing
 */
async function copyFile(file) {
  const buildPath = path.resolve(process.cwd(), "dist", path.basename(file));
  await fse.copy(file, buildPath);
  console.log(`Copied ${file} to ${buildPath}`);
}

/**
 * @summary Copies the package.json file into the `dist` folder
 * @returns {Promise<Object>} The package.json object
 */
async function createPackageFile() {
  const packageData = await fse.readFile(path.resolve(__dirname, "../package.json"), "utf8");
  const { devDependencies, jest, scripts, ...packageDataOther } = JSON.parse(packageData);
  const newPackageData = {
    ...packageDataOther,
    main: "index",
    module: "index.mjs"
  };
  const buildPath = path.resolve(__dirname, "../dist/package.json");
  const stringPackageJson = JSON.stringify(newPackageData, null, 2);

  await fse.writeFile(buildPath, `${stringPackageJson}\n`, "utf8");
  console.log(`Created package.json in ${buildPath}`);

  return newPackageData;
}

/**
 * @summary After a component has been moved to `dist` and flattened,
 *   change all "../../../utils" to "../../utils"
 * @param {String} componentFolderPath The full path to the components folder
 * @returns {Promise<undefined>} Nothing
 */
async function replaceUtilsPathForComponent(componentFolderPath) {
  await replaceInFiles({
    files: `${componentFolderPath}/**/*.js`,
    from: /\.\.\/\.\.\/utils/g,
    to: "../utils"
  });

  await replaceInFiles({
    files: `${componentFolderPath}/**/*.mjs`,
    from: /\.\.\/\.\.\/utils/g,
    to: "../utils"
  });
}

/**
 * @summary The main post-build script.
 *   1. Rename all `.js` files in `dist-modules-temp` to `.mjs` extension
 *   2. Copy all `.mjs` files into `dist`
 *   3. Delete `dist-modules-temp`
 *   4. Move components up to `dist` root and delete `components` folder
 *   5. Copy `package.json` and markdown files into `dist`
 *
 *   `dist` is now ready to be published in the final package structure
 * @returns {Promise<undefined>} Nothing
 */
async function run() {
  // Rename all `.js` files in `dist-modules-temp` to `.mjs` extension
  await recursivelyChangeExtension(DIST_MODULES_FOLDER, "js", "mjs");

  // Copy all `.mjs` files into `dist`
  await fse.copy(DIST_MODULES_FOLDER, DIST_FOLDER);

  // Delete `dist-modules-temp`
  await fse.remove(DIST_MODULES_FOLDER);

  // We now have a `dist` folder but we want to remove the extra `components`
  // folder inside it in order to have flatter import paths. We"ll traverse the `dist/components/*`
  // folders here and move them up a level.
  const directoryContents = await fse.readdir(COMPONENTS_FOLDER);
  const promises = directoryContents.map(async (componentName) => {
    if (componentName.indexOf(".") !== -1) return Promise.resolve();
    const componentFolder = path.join(COMPONENTS_FOLDER, componentName);
    const distComponentFolder = path.join(DIST_FOLDER, componentName);
    await fse.copy(componentFolder, distComponentFolder);

    // The relative path to global `utils` folder has changed, so do a multi-file search/replace
    return replaceUtilsPathForComponent(distComponentFolder);
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
