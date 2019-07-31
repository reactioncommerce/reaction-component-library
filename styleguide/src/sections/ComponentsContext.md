As mentioned in the installation instructions, many of the components in this library require that you provide the components they render by either passing them in as props or setting up a components context provider.

But why, you might be wondering, is that extra work necessary?

We designed it this way because of two requirements we gave ourselves for the package:

- A developer using the library must be able to upgrade to a new minor or patch version at any time, to get fixes and new components, without fear of their app changing visually or functionally in any unexpected ways.
- A developer using the library must be able to opt in to breaking changes for a component, as a per-component decision.

If you've used another component library before, you're likely aware of what life is like if a library does NOT meet these requirements. You try to pull in a quick urgent fix for a single component and end up rewriting and testing half of your app to address behavior and style changes that were pulled in with it.

Having these requirements, we then had to decide how to implement versioning and dependencies to achieve them. We thought about making one package per component and using package versioning, but we decided that the overhead and complexity would be too much. Instead we landed on a way to keep all components in a single package but version them separately. (Check out [the relevant ADR](https://github.com/reactioncommerce/reaction-component-library/blob/master/docs/architecture/decisions/0007-publish-components.md) for more details.)

The basic idea is simple. Components live in a versioned folder, and whenever we need to make breaking changes to the component (functionally or visually), we copy the whole thing into a new version folder, incrementing the version by 1. When you use a component in your app, your import path includes the version, and you will not get any breaking changes unless you change the version in that import path.

Problem solved, right?

Well, almost. But things get complicated when we start building library components that depend on other library components. Say `ComponentB` renders `ComponentA` and directly imports `ComponentA/v1`. If we now make a `v2` of `ComponentA`, we must also make a `v2` of `ComponentB` in order to safely bump the import version. This might be fine, but typically I want to pull in `ComponentA/v2` everywhere in my app without having to discover all the components that use it and update them as well.

And there is an additional requirement we gave ourselves that I didn't mention:

- A developer using the library must be able to easily swap in their own compatible component

For example, if you have a different Select component you really like, you should be able to import that somewhere and all of the Reaction Storefront Component Library form components will use that instead.

So with all of these requirements and complications in mind, we decided that the best solution is to pass all component dependencies as props, specifically in an object prop named `components`. This gives full control to the app developers to import and pass in whatever they choose, as long as it conforms to the expected props and methods API.

Finally, we are left with just one last problem: importing and passing in component dependencies everywhere is a lot of extra work. To solve this problem, we created a way for you to wrap your app in a components provider, allowing all of the imports to happen in a single file (while still allowing you to pass in different components in specific places to override).

Adding the components context provider is an extra step and potentially confusing to some developers, but initially it's simply a copy-paste of one file, and the maintenance of adding new components whenever you update the package is minimal. For all the benefits just explained, we feel the tradeoff is worth it and can think of no better way.

Lastly, if you're wondering why we don't just have a default components context built into the library package, it's for two reasons:
- Importing all the components anywhere in the library codebase would mean that you are no longer able to tree-shake them out of your app. You would be stuck with all of the components code, even if you provided your own components context in which you were only using a few of them.
- We would have to provide multiple versions of the context, or only the latest version. Either way, it could lead to a lot of confusion about which version of a component is being used in which places.
By giving full control to the app developer, it is very easy to see which versions of which components your app is using, and to remove the code for all unused Reaction Storefront Component Library components from your app JavaScript bundle.