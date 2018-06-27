## Creating a New Version of a Component

When a component needs to be updated, first determine whether the changes can be made in a backwards compatible way. This includes not changing styles in an unexpected way. For example, fixing a bug where the component did not look or work correctly in a particular browser is backwards compatible. However, changing component styles so that it now looks different from before is a breaking change.

The goal is to allow any app depending on this library to take new minor or patch versions without worrying about anything magically looking different, unless it's an appearance fix. To do this, we create new versions of components within the codebase by copying all of their related files to a `v#` folder, and all imports include this version.

### Create the Component Files

Only when you have to make changes that are not backwards compatible, you can use the following script to copy the most recent version folder for a component to a next version folder:

```bash
docker-compose run --rm web node .reaction/scripts/addcomponent MyComponent next
```

Where `MyComponent` is the name of the component, which must already exist and have at least one `v`-prefixed subfolder.

### Make Changes

In either a newly created version of the component or the existing component, for non-breaking changes, change the documentation and tests to reflect the desired changes. Then change the component code until all tests pass again.

Refer to the steps in [Creating a New Component](./creating-new-component)
