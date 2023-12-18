import { Request, Response } from "express";
import ProductService from "../services/product";

const productsController = {
    getProducts: async function (req: Request, res: Response) {
        try {
            const products = await ProductService.getProducts();
            return products;

        } catch (err: any) {
            throw new Error(err.message);
        }
    }
}

export default productsController;