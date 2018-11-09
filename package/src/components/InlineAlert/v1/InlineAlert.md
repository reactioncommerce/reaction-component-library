### Overview

Inline alerts are used to give action-based feedback messages and convey critical or informational account-related messages. Use inline alerts when a user needs more detailed information for an action.

```jsx noeditor
const iconComponents = {
  iconDismiss: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
};

<div style={{display: "flex", flexDirection: "column"}}>
   <div style={{margin: "10px 0"}}>
        <InlineAlert alertType="warning" message="Card ending in 0000 is expiring soon."/>
    </div>
   <div style={{margin: "10px 0"}}>
        <InlineAlert isDismissable components={iconComponents} alertType="information" title="Release 3.1 is now available" message="Reaction Platform has a new update. Read the release notes here."/>
    </div>
   <div style={{margin: "10px 0"}}>
        <InlineAlert alertType="success" title="CSV imported successfully" message="Your jobs have been added to the queue." isAutoClosing />
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

Users should be able to dismiss inline alerts when appropriate. Information and success alerts can close automaticallly after 10 seconds. Error alerts should be persistent, and close only when action is resolved.

An empty `<InlineAlert/>` without an `alertType`, or a blank `alertType`, will not be rendered.

### Alert Types

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
- Should **not** close automatically, unless the action has been resolved

### Options

#### Title (optional)

- Pass a `title` string
- The `title` is displayed in SemiBold weight

```jsx
<InlineAlert alertType="information" title="Title goes here" message="Card ending in 0000 is expiring soon."/>
```

#### Dismissable (optional)

- Pass `isDismissable` with `components` to allow the user to close the alert by clicking the dismiss button
- The icon can be overridden by providing your own `iconDismiss` in `components`

```jsx
const iconComponents = {
  iconDismiss: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
};

<InlineAlert isDismissable components={iconComponents} alertType="information" message="Card ending in 0000 is expiring soon."/>
```

#### Autoclosing (optional)

- Pass `isAutoClosing` to close the window automatically after 10 seconds

```jsx
<InlineAlert isAutoClosing alertType="information" message="This will close in 10 seconds."/>
```

#### No props

- An empty `<InlineAlert/>`, specifically, an alert without a specified `alertType`, will not be rendered:

```jsx
<InlineAlert alertType="" message="Message" title="Title"/>
```

```jsx
<InlineAlert />
```

### Theme

Assume that any theme prop that does not begin with "rui" is within `rui_components`. See [Theming Components](./#!/Theming%20Components).

| Theme Prop                                | Default                                        | Description                                 |
| ----------------------------------------- | ---------------------------------------------- | ------------------------------------------- |
| `InlineAlert.borderRadius`                | 2px                                            | Alert border radius size                    |
| `InlineAlert.borderStyle`                 | solid                                          | Alert border style                          |
| `InlineAlert.borderWidth`                 | 2px                                            | Alert border width size                     |
| `InlineAlert.paddingBottom`               | 15px                                           | Alert padding bottom                        |
| `InlineAlert.paddingLeft`                 | 15px                                           | Alert padding left                          |
| `InlineAlert.paddingRight`                | 15px                                           | Alert padding right                         |
| `InlineAlert.paddingTop`                  | 15px                                           | Alert padding top                           |
| `InlineAlert.buttonHeight`                | 15px                                           | Dismiss button (optional) height            |
| `InlineAlert.buttonWidth`                 | 15px                                           | Dismiss button (optional) width             |
| `InlineAlert.buttonPositionRight`         | 15px                                           | Dismiss button (optional) position          |
| `InlineAlert.buttonPositionTop`           | 15px                                           | Dismiss button (optional) position          |
| `InlineAlert.titlePaddingBottom`          | 10px                                           | Padding under title (optional)              |
| `InlineAlert.transition`                  | opacity cubic-bezier(0.785, 0.135, 0.15, 0.86) | Dismiss animation (optional)                |
| `InlineAlert.color_error`                 | red600                                         | Message color for error alert type          |
| `InlineAlert.backgroundColor_error`       | redBackground                                  | Background color for error alert type       |
| `InlineAlert.borderColor_error`           | redBorder                                      | Border color for error alert type           |
| `InlineAlert.color_information`           | reactionBlue600                                | Message color for information alert type    |
| `InlineAlert.backgroundColor_information` | reactionBlueBackground                         | Background color for information alert type |
| `InlineAlert.borderColor_information`     | reactionBlueBorder                             | Border color for information alert type     |
| `InlineAlert.color_success`               | forestGreen600                                 | Message color for success alert type        |
| `InlineAlert.backgroundColor_success`     | forestGreenBackground                          | Background color for success alert type     |
| `InlineAlert.borderColor_success`         | forestGreenBorder                              | Border color for success alert type         |
| `InlineAlert.color_warning`               | yellow600                                      | Message color for warning alert type        |
| `InlineAlert.backgroundColor_warning`     | yellowBackground                               | Background color for warning alert type     |
| `InlineAlert.borderColor_warning`         | yellow500Border                                | Border color for warning alert type         |

#### Typography

- The message uses `bodyText` style with `rui_components.InlineAlert` override
- The title uses `bodyTextSemiBold` style with `rui_components.InlineAlert` override