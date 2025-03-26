import prisma from"../database";


export const getProductListService = async () => {
    const result = await prisma.product.findMany();
    return result;
};


export const addProductService = async (name: string, price: number, color:string, Image:string, stock:number) => {
    const result = await prisma.product.create({
        data: {
            name: name,
            price: price,
            color:color,
            Image:Image,
            Stock :stock

        }
    });
    return result;
}
