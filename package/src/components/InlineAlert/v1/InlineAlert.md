### Overview

Inline alerts are used to give action-based feedback messages and convey critical or informational account-related messages. Use inline alerts when a user needs more detailed information for an action.

```jsx noeditor
<InlineAlert/>
```

### Usage

Inline alerts are most often used when the user has taken an action. Alert messages appear in context and communicate when that action is successful, unsuccessful, or that it otherwise needs attention and further context.

Alert language should be polite, clear and concise. Alert language can also include a link. Optionally, a title can be added to an inline alert to give clarity, or when there are 2 or more lines of information to display.

Inline alerts should guide the user into taking corrective action if necessary. If the alert relates to a form, form field validation should be used in conjunction with the alert.

User should be able to dismiss inline alerts when appropriate. Information and success alerts can close automaticallly after 10 seconds. Error alerts should be persistent, and close only when action is resolved.

### Types

#### Information

- Used when there is information or tips that users can benefit from
- System-wide or positioned contextually above the information or form they relate to
- Can link to other pages
- Can be closed with a **Close/Dismiss button**
- Can close automatically after 10 seconds

#### Success

- Used when an action has been completed successfully
- Positioned contextually above the information or form they relate to
- Can link to other pages
- Can be closed with a **Close/Dismiss button**
- Can close automatically after 10 seconds

#### Warning

- Used when an action or item needs attention
- Positioned contextually above the information or form they relate to
- Can link to other pages
- Can be closed with a **Close/Dismiss button**
- Should **not** close automatically, unless the action has been resolved

#### Error

- Used when the system has failed to complete an action, or the user has made an error
- Used when an action or item needs attention
- Positioned contextually above the information or form they relate to
- Can link to other pages
- Can be closed with a **Close/Dismiss button**
- Should **not** close automatically, unless the action has been resolved

### Theme

Assume that any theme prop that does not begin with "rui" is within `rui_components`. See [Theming Components](./#!/Theming%20Components).

| Theme Prop | Default | Description |
