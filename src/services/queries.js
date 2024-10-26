import api from "../configs/api";

export const getProducts = () => {
  return api.get("/products");
};

export const postProduct = (data) => {
  return api.post("/products", data).then((res) => res);
};

export const getProductById = (id) => {
  return api.get(`/products/${id}`).then((res) => res.data);
};

export const putProduct = (data) => {
  const { id, ...rest } = data;
  return api.put(`/products/${id}`, rest).then((res) => res);
};

export const deleteProduct = (id) => {
  return api.delete(`/products/${id}`).then((res) => res);
};
