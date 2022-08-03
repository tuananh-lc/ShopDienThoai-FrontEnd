import instance from "./config";

export const CategoryGetAll = () => {
    return instance.get("/categories")
}

export const CategoryGetOne = (id:String) => {
    return instance.get(`/categories/${id}`)
}