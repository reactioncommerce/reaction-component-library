### Overview
This checkout action is responsible for rendering the [CartItems](/#!/CartItems) and [CartSummary](/#!/CartSummary)components used to display the final checkout review action.

#### Basic Usage

```jsx
const isReady = (ready) => true;

const checkoutSummary = {
  displayShipping: "$5.25",
  displaySubtotal: "$118.00",
  displayTotal: "$135.58",
  displayTax: "$12.33",
  items: [{
    _id: "123",
    attributes: [{ label: "Color", value: "Red" }, { label: "Size", value: "Medium" }],
    compareAtPrice: {
      displayAmount: "$45.00"
    },
    currentQuantity: 3,
    imageURLs: {
      small: "//placehold.it/150",
      thumbnail: "//placehold.it/100"
    },
    isLowQuantity: true,
    price: {
      displayAmount: "$20.00"
    },
    productSlug: "/product-slug",
    productVendor: "Patagonia",
    title: "A Great Product",
    quantity: 2
  },
  {
    _id: "456",
    attributes: [{ label: "Color", value: "Black" }, { label: "Size", value: "10" }],
    currentQuantity: 500,
    imageURLs: {
      small: "//placehold.it/150",
      thumbnail: "//placehold.it/100"
    },
    isLowQuantity: false,
    price: {
      displayAmount: "$78.00"
    },
    productSlug: "/product-slug",
    productVendor: "Patagonia",
    title: "Another Great Product",
    quantity: 1
  }]
};

<FinalReviewCheckoutAction
  label="Review and place order"
  onReadyForSaveChange={isReady}
  checkoutSummary={checkoutSummary}
  stepNumber={4}
/>

```
