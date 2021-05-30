export async function getProductBySearchBar(categoryId, query) {
  const data = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const result = await data.json();
  return result;
}

export async function handleClickCategory(value) {
  const query = '';
  const categoryId = value;
  const searchByCategories = await this.getProductBySearchBar(categoryId, query);
  return searchByCategories;
}
