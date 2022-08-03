import instance from "./config";

export const AddressGetAll = () => {
    return instance.get("/address")
}


export const AddressDetailGetAll = () => {
    return instance.get("/detail_address")
}


export const AddressGetOne =  (id:String) => {
    return instance.get(`/address/${id}`)
}
