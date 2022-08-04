import instance from "./config";

export const ProductsGetAll =  () => {
    return instance.get("/products")
}

export const ProductsGetOne =  (id:any) => {
    return instance.get(`/products/${id}`)
}

export const ProductsGet =  (id:any) => {
    return instance.get(`/products/${id}?_expand=category`)
}

export const CreatrProducts = (product:{}) => {
    return instance.post("/products", product)
}

export const UpdateProducts = (product:{}, id:any) => {
    return instance.patch(`/products/${id}`, product)
}

export const RemoveProducts = (id:any) => {
    return instance.delete(`/products/${id}`)
}