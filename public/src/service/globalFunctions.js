// ---------------------------------------------------------------------------------------------
// Funções para Adicionar produtos ao carrinho de compras, existe duas versões:
// 1 - Versão addCartFull : maior e mais didática
// 2 - Versão addCartRefact : mais enxuta e organizada

export function addCartFull(product, cart) {
  const {
    id, title, thumbnail, price,
  } = product;
  if (!cart.length) {
    const availableQuantity = product.available_quantity;
    const productCart = [{
      id, title, thumbnail, price, count: 1, totalValue: price, availableQuantity,
    }];
    return productCart;
  }
  let productCart = cart;
  const findProduct = productCart.find((item) => item.id === product.id);
  if (findProduct) {
    const key = productCart.indexOf(findProduct);
    productCart[key].count += 1;
    productCart[key].totalValue = Math.round((productCart[key].count
      * productCart[key].price) * 100) / 100;
    return productCart;
  }
  const availableQuantity = product.available_quantity;
  productCart = [...productCart, {
    id, title, thumbnail, price, count: 1, totalValue: price, availableQuantity,
  }];
  return productCart;
}

export function addCartRefact(product, cart) {
  const {
    id, title, thumbnail, price,
  } = product;
  const findProduct = cart.find((item) => item.id === product.id);
  if (!cart.length || !findProduct) {
    const availableQuantity = product.available_quantity;
    const productCart = [...cart, {
      id, title, thumbnail, price, availableQuantity, count: 1, totalValue: price,
    }];
    return productCart;
  }
  const productCart = cart;
  const key = productCart.indexOf(findProduct);
  productCart[key].count += 1;
  productCart[key].totalValue = Math.round((productCart[key].count
    * productCart[key].price) * 100) / 100;
  return productCart;
}
// ---------------------------------------------------------------------------------------------
