# 8. Keep Styles With Components

Date: 2018-05-23

## Status

STATUS：accepted

2018-05-22 proposed
2018-05-23 accepted

## Context

So that developers do not have to think too hard, we want a simple rule about where the styles related to a React component should live. The options are "always in a separate styles.js file in the same folder" or "always in the same file as the React component, above the component". (This is referring to JSX or styled-components styles, and not CSS/SASS styles.)

### Separate File

Pros:

- Smaller files, easier to read

Cons:

- Overkill for a single style
- More files for Babel to transform and watchers to watch
- Extra work for dev (minimal)

### Same File

Pros:

- Simple and less work for dev
- Fewer files for Babel to transform and watchers to watch

Cons:

- Larger files, harder to read (but you can code fold in IDE)

## Decision

All styles always live in the same file as the React component, above the component.
