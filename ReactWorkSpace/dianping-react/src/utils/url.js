export default {
  getProductList: (path, rowIndex, pageSize) => {
    return `/mock/products/${path}.json?rowIndex=${rowIndex}&pageSize=${pageSize}`;
  },
  getProductDetail: (id) => {
    return `/mock/product_detail/${id}.json`;
  },
  getShopById: (id) => {
    return `/mock/shops/${id}.json`;
  },
  getPopularKeywords: () => {
    return `/mock/keywords/popular.json`;
  },
  getRelatedKeywords: (text) => {
    return `/mock/keywords/related.json?keyword=${text}`;
  },
  getRelatedShops: (keyword) => {
    return `/mock/shops/related.json?keyword=${keyword}`;
  },
  getOrders: () => {
    return `/mock/orders/orders.json`;
  },
};
