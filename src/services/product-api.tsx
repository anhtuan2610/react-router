import { get, post, remove, update } from ".";
import { Product } from "../components/Shop/Form";

export type TProductNoId = Omit<Product, "id">; // add

export async function getProducts(params?: object) {
  return await get<Product[]>({
    url: "/products",
    params: params,
  });
}

export async function createProduct(data: TProductNoId) {
   await post({
    url: "/products",
    data: data,
  });
}

export async function editProduct(id: number, data: TProductNoId) {
   await update({
    url: `/products/${id}`,
    data: data,
  });
}

export async function deleteProduct(id: number) {
  await remove({ url: `/products/${id}` });
}
