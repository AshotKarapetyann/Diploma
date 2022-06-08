import { Request, Response } from 'express';
import { sizeService } from "../services/Sizes";

class Size{
    async getAllSizes(req: Request, res: Response){
        try {
            const data = await sizeService .getAllSizes();
            return res.send(data);
        } catch (err) {
            return res.send(err);
        };
    };

    async getSizeByID(req: Request, res: Response){
        try {
            const id = req.params.id;
            const data = await sizeService.getSizeById(id);
            return res.send(data);
        } catch (err) {
            return res.send(err);
        }
    };

    async createNewSize(req: Request, res: Response){
        try {
            const body = await req.body;
            const data = await sizeService.createNewSize(body);
            return res.send(data);
        } catch (err) {
            return res.send(err);
        }
    };

    async updateSize(req: Request, res: Response){
        try {
            const id = await req.params.id;
            const body = await req.body;
            const data = await sizeService.updateSize(id, body);
            return res.send(data);
        } catch (err) {
            return res.send(err);
        }
    };

    async deleteSize(req: Request, res: Response){
        try {
           const id = req.params.id;
           const data = await sizeService.deleteSize(id);
           return res.send(data);
        } catch (err) {
            return res.send(err);
        }
    };
};

export const sizeController = new Size();