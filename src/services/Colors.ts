import { Colors } from "../entities/Colors";
import { getRepository } from 'typeorm';
import JSONform from '../utils/JSONform';

class Color{
    async getAllColors(){
        const allColors = await getRepository(Colors).find();
        if (allColors.length === 0){
            const msg: object = [];
            return JSONform.empty_data(msg);
        } else if(allColors.length === 1){
            return JSONform.valid_one_data(allColors);
        } else return JSONform.valid_much_data(allColors);
    };

    async getColorById(id){
        if (!Number(id)) {
            throw JSONform.bad_request();
        }
        const color = await getRepository(Colors).findByIds(id);
        if (color){
            return JSONform.valid_one_data(color);
        } else {
            throw JSONform.not_found();
        }; 
    };

    async createNewColor(body){
        const name = body.color_name;
        if(name.trim() === ""){
            throw JSONform.empty_string();
        };
        if(name.length > 50){
            throw JSONform.wrong_characters_number();
        };
        const newColor = await getRepository(Colors).create(body);
        return await getRepository(Colors).save(newColor);
    };

    async updateColor(id, body){
        if (isNaN(+id)) {
            throw JSONform.bad_request();
        };
        const name = body.color_name;
        if(name.length > 50){
            throw JSONform.wrong_characters_number();
        };
        const color = await getRepository(Colors).findOne(id);
        if (color){
            await getRepository(Colors).merge(color, body);
            await getRepository(Colors).save(color);
            return JSONform.update_data();
        } else {
            throw JSONform.not_found();
        }
    };

    async deleteColor(id){
        if (isNaN(+id)) {
            throw JSONform.bad_request();
        }
        await getRepository(Colors).delete(id);
        return JSONform.delete_valid_data();
    };
};

export const colorService = new Color();
