### Overview
The `GuestForm` component is based on the [Composable Form Spec](http://forms.dairystatedesigns.com/) and uses [reacto-form](http://forms.dairystatedesigns.com/reacto-form/) to handle form state and validation.

### Usage
The `GuestForm` is a simple form that captures a users email address.
```jsx
<GuestForm onSubmit={(value) => console.log("GuestForm value", value)} />
```

#### Saving example
Using an `async` function or a function that returns a `Promise` will make the form wait until the async task has completed before clearing the form.
This also provides a way to display a saving state while waiting.
```jsx
initialState = { isSavingEmail:false };

const setEmailAddress = (value) => new Promise((resolve, reject) => {
  setState({isSavingEmail: true});
  setTimeout(() => {
    console.log("GuestForm value", value)
    setState({isSavingEmail: false});
    resolve(value);
  }, 5000);
});

<GuestForm onSubmit={setEmailAddress} isSaving={state.isSavingEmail} />
```

### Theme

Assume that any theme prop that does not begin with "rui" is within `rui_components`. See [Theming Components](./#!/Theming%20Components).

| Theme Prop           | Default | Description                                                            |
| -------------------- | ------- | ---------------------------------------------------------------------- |
| `rui_breakpoints.sm` | 320px   | Below this breakpoint, the component renders the button as full width. |
