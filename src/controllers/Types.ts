import { Request, Response } from 'express';
import { typeService } from "../services/Types"

class Type {
    async getAllTypes(req: Request, res: Response){
        try {
            const data = await typeService.getAllTypes();
            return res.send(data);
        } catch (err) {
            return res.send(err);
        };
    };

    async getTypeByID(req: Request, res: Response){
        try {
            const id = req.params.id;
            const data = await typeService.getTypeById(id);
            return res.send(data);
        } catch (err) {
            return res.send(err);
        }
    };

    async createNewType(req: Request, res: Response){
        try {
            const body = await req.body;
            const data = await typeService.createNewType(body);
            return res.send(data);
        } catch (err) {
            return res.send(err);
        }
    };

    async updateType(req: Request, res: Response){
        try {
            const id = await req.params.id;
            const body = await req.body;
            const data = await typeService.updateType(id, body);
            return res.send(data);
        } catch (err) {
            return res.send(err);
        }
    };

    async deleteType(req: Request, res: Response){
        try {
           const id = req.params.id;
           const data = await typeService.deleteType(id);
           return res.send(data);
        } catch (err) {
            return res.send(err);
        }
    };
};

export const typeController = new Type();

