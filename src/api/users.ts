import instance from "./config";

export const userGetAll = () => {
    return instance.get("/users")
} 

export const userGetOne = (id:any) => {
    return instance.get(`/users/${id}`)
}

export const RemoveUser = (id:any) => {
    return instance.delete(`users/${id}`)
}

export const UpdateNewUser = (users:{}, id:any)=>{
    return instance.patch(`/users/${id}`, users)
}

export const CreatUser = (users:{}) => {
    return instance.post("/users", users)
}