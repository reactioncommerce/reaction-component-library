# Repo Structure

## Root Folders

- `.circleci`: Files used by CircleCI
- `.reaction`: Various scripts, project hooks, and templates. The script to add a new component is in here.
- `bin`: Shell scripts
- `config`: A folder created by create-react-app. It shouldn't be necessary to change things in here (and may not even be required by styleguidist any more?)
- `docs`: Documentation for this project
- `package`: The files that become the `@reactioncommerce/components` NPM package. The components, their markdown files, and anything they import are also built into the Style Guide app.
- `reports`: A folder in which coverage report files are built.
- `styleguide`: Files for the Style Guide app that are not included in the `@reactioncommerce/components` NPM package but are used when building the Style Guide.

## Files

- `.dockerignore`, `Dockerfile`, and `docker-compose.yml` are used by Docker
- `.snyk` contains rules and overrides for Snyk security checks
- `styleguide.config.js` is where Styleguidist package is configured for building the Style Guide app

### package.json

There are two package.json files.

- `package.json`: For the Style Guide app
- `package/package.json`: For the `@reactioncommerce/components` NPM package

## What should I care about?

If you're working on the Style Guide exclusively, you'll mostly edit `styleguide.config.js` and the files in the `styleguide` folder.

If you're creating or modifying component library components, you'll mostly edit files in the `package` folder, but you'll also need to add new components to `styleguide.config.js` to get them to appear in the Style Guide. You might also need to add or modify section markdown in the `styleguide` folder.
