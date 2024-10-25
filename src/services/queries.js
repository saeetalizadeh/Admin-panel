import api from "../configs/api";

export const getProducts = () => {
  return api.get("/products");
};
