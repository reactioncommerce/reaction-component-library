# Cloning the Project for Development

## Prerequisites

We use [Docker](https://www.docker.com/products/docker-desktop) for development, so install it and make sure you understand how [developing in Docker](https://docs.reactioncommerce.com/docs/installation-docker-development) works.

## Install

```sh
# Clone
git clone git@github.com:reactioncommerce/reaction-component-library.git

cd reaction-component-library

# Setup - puts an .env in place
bin/setup

yarn install
```

Then check the `.env` file to see if there are any placeholder values that need to be replaced with real values.

Now that you're set up, you'll want to read about [Running and Developing Locally](./developing.md).
