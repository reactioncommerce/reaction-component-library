# 7. Publish Components

Date: 2018-02-23

## Status

STATUS：accepted

2018-02-23 proposed
2018-03-01 accepted

## Context

We need to be able to pull in these components to other apps as one or more NPM packages. There are pros and cons to a single-package approach versus one package per component.

### One Package Per Component

Pros:

- Minimum dependencies pulled in with each component used. You don't download or package anything you aren't using.
- When you need to pull in a fix to one component, you aren't unintentionally changing the behavior of a hundred other components.

Cons:

- How do we track dependencies per component but also install them so that the whole Style Guide app can run as one?
- Each component package has to be installed by developers as it is needed
- Publishing them will be tricky, especially if there are any interdependencies. Lerna + semantic-release may help, but the typical Lerna repo structure may not be ideal with the context of the Style Guide app we have here.

### A Single Package Exporting All Components

Pros:

- Install a single package and you get access to them all in your app
- Much simpler to publish vs multiple packages
- Easier for people working on the style guide repo to understand.

Cons:

- Every time you bump the dependency version of the component package, you'll pull in potentially changed versions of every component in your app.
- Extra work will be required to ensure that bundled JavaScript does not include any components that an app does not use.

### What about the style guide

There is a further complication here, which is "how does the style guide release cycle relate to the release cycle of the components within it, and how does the style guide represent multiple versions of components as they change?"

## Decision

The complexity of setting up, maintaining, and understanding a one-package-per-component approach, even with the help of tools like Lerna, is a very strong con. So if we assume that a single package is our preference, let's look at how we might mitigate the cons of that apprach.

The first con, pulling in unwanted component changes, is MAJOR. This causes a lot of headaches for a lot of people. There are a few things we can do to avoid it:

- Every component change that changes the appearance of a component in any way should be exported as a new component. The whole component folder can be copied into a `v2` folder. That way, any app that pulls in an updated package will not see any changes until they change `import { Button } from "@reactioncommerce/components/v1` to `import { Button } from "@reactioncommerce/components/v2`
- No React component in this library will import any other React component in this library. All components that a component needs to render will be passed in as props or children.
- Every component will have Jest snapshot testing, which will give a clue to developers and reviewers that a component's appearance may have changed. Part of the review process can be deciding whether the changes are visual and whether they require splitting off a new version of the component (i.e. are considered "breaking" changes). There is the possibility of automating this even more through automated screen shot comparison.

This approach also answers the question of how the style guide will show all versions of the component. Since all versions will remain in the repo in versioned folder names, they'll just naturally appear.

The second con of a single package can be avoided by the following suggestion:

- Apps using the component package should set up a "tree shaking" solution to avoid bundling any components they do not import.
