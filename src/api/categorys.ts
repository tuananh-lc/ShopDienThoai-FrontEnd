import instance from "./config";

export const CategoryGetAll = () => {
    return instance.get("/categories")
}

export const CategoryGetOne = (id:any) => {
    return instance.get(`/categories/${id}`)
}

export const UpdateCategory = (category:{}, id:any)=>{
    return instance.patch(`/categories/${id}`, category)
}

export const CreatCategory = (category:{}) => {
    return instance.post("/categories", category)
}

export const RemoveCategory = (id:any) => {
    return instance.delete(`/categories/${id}`)
}