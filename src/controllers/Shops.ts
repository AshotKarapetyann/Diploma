import { Request, Response } from 'express';
import { shopService  } from "../services/Shops";

class Shop {
    async getAllShops(req: Request, res: Response){
        try {
            const data = await shopService.getAllShops();
            return res.send(data);
        } catch (err) {
            return res.send(err);
        };
    };

    async getShopByID(req: Request, res: Response){
        try{
            const id = req.params.id;
            const data = await shopService.getShopById(id);
            const resSend = res.send(data);
            return resSend;
        } catch (err){
            return res.send(err);
        };
    };

    async createNewShop(req, res){
        try {
            const body = await req.body;
            const data = await shopService.createNewShop(body);
            return res.send(data);
        } catch (err) {
            return res.send(err);
        }
    };

    async updateShop(req: Request, res: Response){
        try {
            const id = await req.params.id;
            const body = await req.body;
            const data = await shopService.updateShop(id, body);
            return res.send(data);
        } catch (err) {
            return res.send(err);
        }
    };

    async deleteShop(req: Request, res: Response){
        try {
           const id = req.params.id;
           const data = await shopService.deleteShop(id);
           return res.send(data);
        } catch (err) {
            return res.send(err);
        }
    };
};

export const shopController = new Shop();