# 3. Choose a Style Guide Generator Framework

Date: 2018-02-23

## Status

STATUS：accepted

2018-02-23 proposed
2018-03-01 accepted

## Context

We want:

- Write all simple React components in one repository
- Document the React components with code comments
- Add additional markdown documentation for components when necessary
- Allow both designers and engineers to edit the docs
- Run the tool locally to make component development and testing easier
- Build into a hostable web app, which can be used by anyone to learn our style, pick an appropriate component, and edit the component on the page
- Be able to style/theme anything about the style guide app as a whole to match our other docs

### Options

[React Storybook](https://storybook.js.org/)
[React Styleguidist](https://react-styleguidist.js.org/)

## Decision

Use Styleguidist. They way it is built from markdown is more user-friendly for designers to edit vs. React Storybook. Also, it is more aimed at generating a living style guide, whereas Storybook is more of a developer's tool.

## Consequences

Styleguidist seems to be missing the action logger the Storybook has, which is useful, but we should be able to easily develop a plugin for this if one does not exist.
