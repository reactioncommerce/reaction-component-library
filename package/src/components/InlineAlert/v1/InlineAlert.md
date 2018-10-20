### Overview

Inline alerts are used to give action-based feedback messages and convey critical or informational account-related messages. Use inline alerts when a user needs more detailed information for an action.

```jsx noeditor
<div style={{display: "flex", flexDirection: "column"}}>
   <div style={{margin: "10px 0"}}>
        <InlineAlert alertType="warning" message="Card ending in 0000 is expiring soon."/>
    </div>
   <div style={{margin: "10px 0"}}>
        <InlineAlert alertType="information" title="Release 3.1 is now available" message="Reaction Platform has a new update. Read the release notes here."/>
    </div>
   <div style={{margin: "10px 0"}}>
        <InlineAlert alertType="success" title="CSV imported successfully" message="Your jobs have been added to the queue."/>
    </div>
   <div style={{margin: "10px 0"}}>
        <InlineAlert alertType="error" message="Please correct the errors below."/>
    </div>
</div>
```

### Usage

Inline alerts are most often used when the user has taken an action. Alert messages appear in context and communicate when that action is successful, unsuccessful, or that it otherwise needs attention and further context.

Alert language should be polite, clear and concise. Alert language can also include a link. Optionally, a title can be added to an inline alert to give clarity, or when there are 2 or more lines of information to display.

Inline alerts should guide the user into taking corrective action if necessary. If the alert relates to a form, form field validation should be used in conjunction with the alert.

User should be able to dismiss inline alerts when appropriate. Information and success alerts can close automaticallly after 10 seconds. Error alerts should be persistent, and close only when action is resolved.

### Types

All alerts:
- Can link to other pages
- Can be closed with a **Dismiss button**
- Positioned contextually above the information or form they relate to

#### Information

```jsx
<InlineAlert alertType="information" message="Card ending in 0000 is expiring soon."/>
```

- Used when there is information or tips that users can benefit from
- Can also be positioned system-wide
- Can close automatically after 10 seconds

#### Success

```jsx
<InlineAlert alertType="success" message="Card ending in 0000 is expiring soon."/>
```

- Used when an action has been completed successfully
- Can close automatically after 10 seconds

#### Warning

```jsx
<InlineAlert alertType="warning" message="Card ending in 0000 is expiring soon."/>
```

- Used when an action or item needs attention
- Should **not** close automatically, unless the action has been resolved

#### Error

```jsx
<InlineAlert alertType="error" message="Card ending in 0000 is expiring soon."/>
```

- Used when the system has failed to complete an action, or the user has made an error
- Used when an action or item needs attention
- Should **not** close automatically, unless the action has been resolved

### Theme

Assume that any theme prop that does not begin with "rui" is within `rui_components`. See [Theming Components](./#!/Theming%20Components).

| Theme Prop                                | Default                      | Description                                 |
| ----------------------------------------- | ---------------------------- | ------------------------------------------- |
| `InlineAlert.borderRadius`                | 2px                          | Alert border radius size                    |
| `InlineAlert.borderStyle`                 | solid                        | Alert border style                          |
| `InlineAlert.borderWidth`                 | 2px                          | Alert border width size                     |
| `InlineAlert.paddingBottom`               | 15px                         | Alert padding bottom                        |
| `InlineAlert.paddingLeft`                 | 15px                         | Alert padding left                          |
| `InlineAlert.paddingRight`                | 15px                         | Alert padding right                         |
| `InlineAlert.paddingTop`                  | 15px                         | Alert padding top                           |
| `InlineAlert.color_error`                 | red600                       | Message color for error alert type          |
| `InlineAlert.backgroundColor_error`       | red100, 50% opacity          | Background color for error alert type       |
| `InlineAlert.borderColor_error`           | red, 25% opacity             | Border color for error alert type           |
| `InlineAlert.color_information`           | reactionBlue600              | Message color for information alert type    |
| `InlineAlert.backgroundColor_information` | reactionBlue100, 50% opacity | Background color for information alert type |
| `InlineAlert.borderColor_information`     | reactionBlue, 25% opacity    | Border color for information alert type     |
| `InlineAlert.color_success`               | forestGreen600               | Message color for success alert type        |
| `InlineAlert.backgroundColor_success`     | forestGreen100, 50% opacity  | Background color for success alert type     |
| `InlineAlert.borderColor_success`         | forestGreen, 25% opacity     | Border color for success alert type         |
| `InlineAlert.color_warning`               | yellow600                    | Message color for warning alert type        |
| `InlineAlert.backgroundColor_warning`     | yellow100, 50% opacity       | Background color for warning alert type     |
| `InlineAlert.borderColor_warning`         | yellow500, 25% opacity       | Border color for warning alert type         |

#### Typography

- The message  uses `bodyText` style with `rui_components.InlineAlert` override
- The title uses `bodyTextBold` style with `rui_components.InlineAlert` override