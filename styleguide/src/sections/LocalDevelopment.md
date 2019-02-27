If you'd like to see your changes locally inside of another project, such as the [Reaction Operator UI](https://github.com/reactioncommerce/reaction) or the [Reaction Storefront](https://github.com/reactioncommerce/reaction-next-starterkit), it's possible to link your local version of this Component Library using the following steps:

- `cd` into your local version of the [Reaction Component Library](https://github.com/reactioncommerce/reaction-component-library), and run the following commands:

```diff
yarn install
cd package
yarn install
yarn run build
```

- Next, `cd` into the local version of the repository you'd like to use the local `Component Library` inside. Add the following line to the `volumes:` portion of the `docker-compose.yml` file:

Inside `Reaction Storefront`:

```diff
volumes:
  - $HOME/.cache/yarn-offline-mirror:/home/node/.cache/yarn-offline-mirror
  - web-yarn:/home/node/.cache/yarn
  - .:/usr/local/src/reaction-app
  - empty_node_modules:/usr/local/src/reaction-app/node_modules # do not link node_modules in, and persist it between dc up runs
  - node_modules:/usr/local/src/node_modules
+ - /{Path-to-your-local-repo}/reaction-component-library/package/dist:/usr/local/src/reaction-app/node_modules/@reactioncommerce/components
```

Inside `Reaction Operator UI`:
```diff
volumes:
  - $HOME/.cache/yarn-offline-mirror:/home/node/.cache/yarn-offline-mirror
  - web-yarn:/home/node/.cache/yarn
  - .:/usr/local/src/reaction-app
  - empty_node_modules:/usr/local/src/reaction-app/node_modules # do not link node_modules in, and persist it between dc up runs
  - node_modules:/usr/local/src/node_modules
+ - /{Path-to-your-local-repo}/reaction-component-library/package/dist:/usr/local/src/node_modules/@reactioncommerce/components
```

- Next, run `docker-compose up -d` like normal to access the app in your browser and test it.

**Be sure to remove and not commit the added line from `docker-compose.yml` when you are done testing.**
