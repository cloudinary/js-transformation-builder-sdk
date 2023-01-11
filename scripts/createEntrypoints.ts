/* eslint @typescript-eslint/no-var-requires: 0 */

/**
 * This file is responsible for creating the proper /dist files.
 * Typescript/Rollup will generate the bundles (./dist/bundles/esm & ./dist/bundles/umd)
 * However, to create ./dist/actions/adjust (as an example), some more work is needed.
 *
 * This file creates a package.json in each desired import path (@base/actions/adjust for example).
 * The package.json points to the right file in the ESM module
 * (@base/actions/adjust points to @base/bundles/esm/actions/adjust)
 */

import * as fs from 'fs';

// All of our package.jsons need to contain this property to allow tree shaking
const commonPackageProperties = {
  sideEffects: false
};

/**
 * Creates the npm entry-point for the UMD Bundle
 * Allows users to import from '@base/bundles/umd'
 */
function createUMDBundleEntryPoint() {
  const packageJson = Object.assign({
    "types": `../../index.d.ts`,
    "main": `./base.js`
  }, commonPackageProperties);

  // create umd
  fs.writeFileSync(
    `dist/bundles/umd/package.json`,
    JSON.stringify(packageJson, null, '\t')
  );
}

/**
 * @description Since only ./dist/ is packaged to npm, we need to copy a proper package.json file to it
 *              That will allow `import {TransformableImage} from '@cloudinary/url-gen`
 */
function copyPackageJson(fileDestination = 'dist') {
  const projectJson = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));
  delete projectJson.scripts;
  delete projectJson.devDependencies;
  projectJson.main = './bundles/umd/base.js';
  projectJson.browser = './index.js';
  projectJson.module = './index.js';
  projectJson.type = 'module';

  Object.assign(projectJson, commonPackageProperties);
  fs.writeFileSync(`./${fileDestination}/package.json`, JSON.stringify(projectJson, null, '\t'));
}

// Allows import from '@base' (With types)
copyPackageJson();

// Allows import from '@base/bundles/umd' (With types)
createUMDBundleEntryPoint();

// Force typescript to treat this file as a module
export {};
