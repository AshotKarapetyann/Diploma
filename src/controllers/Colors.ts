import { Request, Response } from 'express';
import { colorService  } from "../services/Colors";

class Color{
    async getAllColors(req: Request, res: Response){
        try {
            const data = await colorService.getAllColors();
            return res.send(data);
        } catch (err) {
            return res.send(err);
        };
    };

    async getColorByID(req: Request, res: Response){
        try {
            const id = req.params.id;
            const data = await colorService.getColorById(id);
            return res.send(data);
        } catch (err) {
            return res.send(err);
        }
    };

    async createNewColor(req: Request, res: Response){
        try {
            const body = await req.body;
            const data = await colorService.createNewColor(body);
            return res.send(data);
        } catch (err) {
            return res.send(err);
        }
    };

    async updateColor(req: Request, res: Response){
        try {
            const id = await req.params.id;
            const body = await req.body;
            const data = await colorService.updateColor(id, body);
            return res.send(data);
        } catch (err) {
            return res.send(err);
        }
    };

    async deleteColor(req: Request, res: Response){
        try {
           const id = req.params.id;
           const data = await colorService.deleteColor(id);
           return res.send(data);
        } catch (err) {
            return res.send(err);
        }
    };
};

export const colorController = new Color();