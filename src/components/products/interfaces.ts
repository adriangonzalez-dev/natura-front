export interface IProducts {
    id:number,
    title: string,
    category:string | undefined,
    description:string,
    price:number,
    image:string,
    stock:number
}