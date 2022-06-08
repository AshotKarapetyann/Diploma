import { Sizes } from "../entities/Sizes";
import { getRepository } from 'typeorm';
import JSONform from '../utils/JSONform';

class Size{
    async getAllSizes(){
        const allSizes = await getRepository(Sizes).find();
        if (allSizes.length === 0){
            const msg: object = [];
            return JSONform.empty_data(msg);
        } else if(allSizes.length === 1){
            return JSONform.valid_one_data(allSizes);
        } else return JSONform.valid_much_data(allSizes);
    };

    async getSizeById(id){
        if (!Number(id)) {
            throw JSONform.bad_request();
        }
        const size = await getRepository(Sizes).findByIds(id);
        if (size){
            return JSONform.valid_one_data(size);
        } else {
            throw JSONform.not_found();
        };
    };

    async createNewSize(body){
        const name = body.size_name;
        if(name.trim() === ""){
            throw JSONform.empty_string();
        };
        if(name.length > 50){
            throw JSONform.wrong_characters_number();
        };
        const newSize = await getRepository(Sizes).create(body);
        return await getRepository(Sizes).save(newSize);
    };

    async updateSize(id, body){
        if (isNaN(+id)) {
            throw JSONform.bad_request();
        };
        const name = body.size_name;
        if(name.length > 50){
            throw JSONform.wrong_characters_number();
        };
        const size = await getRepository(Sizes).findOne(id);
        if (size){
            await getRepository(Sizes).merge(size, body);
            await getRepository(Sizes).save(size);
            return JSONform.update_data();
        } else {
            throw JSONform.not_found();
        } 
    };

    async deleteSize(id){
        if (isNaN(+id)) {
            throw JSONform.bad_request();
        }
        await getRepository(Sizes).delete(id);
        return JSONform.delete_valid_data();
    };
};

export const sizeService = new Size();