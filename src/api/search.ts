import instance from "./config";

export const search = (value:String) => {
    return instance.get(`/?search=${value}`)
}