import { getProductListService,addProductService } from "../service/product..service";
import { Request,Response } from "express";


export const getProductListController = async (_req:Request, res: Response) => {
    
    try {
        const result = await getProductListService();
        res.send(result);
    } catch (error) {
        res
        .status(500)    
        .send(error);
    }
};

export const addProductController = async (req: Request, res: Response) => {
    try {
        const { name, price, color, Image, stock } = req.body;
        if (!name || !price || !color || !Image || !stock) {
            throw new Error("Name, price, color, Image, and stock are required");
        }
        const result = await addProductService(name, price, color, Image, stock);
        res.send(result);
    } catch (error) {
        res
        .status(500)
        .send(error);
    }
}