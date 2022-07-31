import instance from "./config"
export const upload = (base64Image: string) => {
    const url = "/upload"
    return instance.post(url, {data: base64Image})
}