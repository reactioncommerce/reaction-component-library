# Reaction Storefront Component Library - Contributor Docs

## Getting Started

- [Cloning the Project for Development](./clone.md)
- [Running and Developing Locally](./developing.md)
- [Repo Structure](./repo-structure.md)
- [Style Guide Development](./style-guide-development.md)
- [Contributing](./contributing.md)

### Editor Extensions

https://www.styled-components.com/docs/tooling#syntax-highlighting

## Creating and Modifying Components

- [Writing a Component ticket](../.github/ISSUE_TEMPLATE/component_request.md)
- [Creating a New Component](./creating-new-component.md)
- [Creating a New Version of a Component](./creating-new-component-version.md)
- [Component Development Guidelines](./component-development-guidelines.md)

## Component Styling Conventions

- [Styling Conventions](./styling-conventions.md)

## Component Review process

- [Reviewing Components](./reviewing-components.md)
- [Browser Compatibility](./browser-compatibility.md)

## Architectural Decisions Records

Information around the architectural decisions made for this project should be
added to the [architecture/decisions](./architecture/decisions) directory.

The NPM package [adr](https://www.npmjs.com/package/adr) is installed with this
project and can be used to add new decisions.

```sh
docker-compose run --rm web adr new "Implement the Torpedos"
```
