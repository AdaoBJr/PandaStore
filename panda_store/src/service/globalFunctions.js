export function addCartFull(product, cart) {
  const {
    id, title, thumbnail, price,
  } = product;
  if (!cart.length) {
    const productCart = [{
      id, title, thumbnail, price, count: 1,
    }];
    return productCart;
  }
  let productCart = cart;
  const findProduct = productCart.find((item) => item.id === product.id);
  if (findProduct) {
    const key = productCart.indexOf(findProduct);
    productCart[key].count += 1;
    return productCart;
  }
  productCart = [...productCart, {
    id, title, thumbnail, price, count: 1,
  }];
  return productCart;
}

export function addCartRefact(product, cart) {
  const {
    id, title, thumbnail, price,
  } = product;
  const findProduct = cart.find((item) => item.id === product.id);

  if (!cart.length || !findProduct) {
    const productCart = [...cart, {
      id, title, thumbnail, price, count: 1,
    }];
    return productCart;
  }
  const productCart = cart;
  const key = productCart.indexOf(findProduct);
  productCart[key].count += 1;
  return productCart;
}
