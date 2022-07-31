import instance from "./config";

export const CategoryGetAll = () => {
    return instance.get("/categories")
}