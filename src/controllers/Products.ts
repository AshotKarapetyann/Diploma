import { Request, Response } from 'express';
import { productService  } from "../services/Products";

class Product {
    async getAllProducts(req: Request, res: Response){
        try {
            const data = await productService.getAllProducts();
            return res.send(data);
        } catch (err) {
            return res.send(err);
        };
    };

    async getProductByID(req: Request, res: Response){
        try {
            const id = req.params.id;
            const data = await productService.getProductById(id);
            return res.send(data);
        } catch (err) {
            return res.send(err);
        }
    };

    async createNewProduct(req: Request, res: Response){
        try {
            const body = await req.body;
            const data = await productService.createNewProduct(body);
            return res.send(data);
        } catch (err) {
            return res.send(err);
        }
    };

    async updateProduct(req: Request, res: Response){
        try {
            const id = await req.params.id;
            const body = await req.body;
            const data = await productService.updateProduct(id, body);
            return res.send(data);
        } catch (err) {
            return res.send(err);
        }
    };

    async deleteProduct(req: Request, res: Response){
        try {
           const id = req.params.id;
           const data = await productService.deleteProduct(id);
           return res.send(data);
        } catch (err) {
            return res.send(err);
        }
    };
};

export const productController = new Product();

