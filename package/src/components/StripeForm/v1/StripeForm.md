### Overview

This form is intended to be used to integrate [react-stripe-elements](https://github.com/stripe/react-stripe-elements) into a storefront project easily.

### Usage

The hosting project will need to wrap the main app component with the [StripeProvider](https://github.com/stripe/react-stripe-elements#the-stripe-context-stripeprovider) and provide an api key. If Server Side Rendering is implemented in the host project, consult Server Side Rendering integration details [here](https://github.com/stripe/react-stripe-elements#server-side-rendering-ssr).

In the hosting project it will be necessary to obtain a reference to the `stripe` object used to tokenize collected payment information, i.e. credit card number. This can be accomplished by passing a callback to the `stripeRef` prop as seen below:

```jsx static
class MyComponent extends Component {
  handlePayment = () => {
    this._stripe.createToken().then(({ token }) => {
      console.log("token", token);
    });
  };

  render() {
    return (
      <div>
        <StripeForm stripeRef={stripe => (this._stripe = stripe)} />
      </div>
    );
  }
}
```

```jsx
<StripeForm isComplete={() => false} />
```

### Theme

Assume that any theme prop that does not begin with "rui" is within `rui_components`. See [Theming Components](./#!/Theming%20Components).

| Theme Prop                      | Default                                                      | Description                                  |
| ------------------------------- | ------------------------------------------------------------ | -------------------------------------------- |
| `Input.backgroundColor_dark`    | white                                                        | Background color when `isDarkBackground`     |
| `Input.backgroundColor_default` | black02                                                      | Background color when not `isDarkBackground` |
| `Input.borderColor_default`     | black20                                                      | Border color in "default" state              |
| `Input.borderColor_error`       | red                                                          | Border color in "error" state                |
| `Input.borderColor_focus`       | teal                                                         | Border color in "focus" state                |
| `Input.borderColor_success`     | teal                                                         | Border color in "success" state              |
| `Input.color_default`           | coolGrey500                                                  | Input text color when in "default" state     |
| `Input.color_disabled`          | black25                                                      | Input text color when in "disabled" state    |
| `Input.color_error`             | red                                                          | Input text color when in "error" state       |
| `Input.color_focus`             | coolGrey500                                                  | Input text color when in "focus" state       |
| `Input.color_success`           | black55                                                      | Input text color when in "success" state     |
| `Input.fontFamily`              | `'Source Sans Pro', 'Helvetica Neue', Helvetica, sans-serif` | Input text font                              |
| `Input.fontSize`                | 14px                                                         | Input text font size                         |
| `Input.horizontalPadding`       | 10px                                                         | Left and right padding                       |
| `Input.lineHeight`              | 1                                                            | Input line height                            |
| `Input.placeholderColor`        | black20                                                      | Placeholder text color                       |
| `Input.verticalPadding`         | 8px                                                          | Top and bottom padding                       |

#### Typography

None
