export interface ListProducts {
    id:number,
    name:string,
    price:number,
    sale:number,
    image:string,
    descriptionSort:string,
    descriptionLong:string,
    outstanding:string,
    category:{
        id:number,
        name:string
    },
    categoryId:number,
    idHidden:boolean
}