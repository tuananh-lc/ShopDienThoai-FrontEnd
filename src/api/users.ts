import instance from "./config";

export const userGetAll = () => {
    return instance.get("/users")
} 

export const RemoveUser = (id:any) => {
    return instance.delete(`users/${id}`)
}