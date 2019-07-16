export default [
  products.slice().map((product) => {
    const clonedProduct = Object.assign({}, product);
    clonedProduct.primaryImage = null;
    return clonedProduct;
  })
];
