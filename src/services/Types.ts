import { Types } from "../entities/Types";
import { getRepository } from 'typeorm';
import JSONform from '../utils/JSONform';

class Type{
    async getAllTypes(){
        const allTypes = await getRepository(Types).find();
        if (allTypes.length === 0){
            const msg: object = [];
            return JSONform.empty_data(msg);
        } else if(allTypes.length === 1){
            return JSONform.valid_one_data(allTypes);
        } else return JSONform.valid_much_data(allTypes);
       
    };

    async getTypeById(id){
        if (!Number(id)) {
            throw JSONform.bad_request();
        }
        const type = await getRepository(Types).findByIds(id);
        if (type) {
            return JSONform.valid_one_data(type);
        } else {
            throw JSONform.not_found();
        };
    };

    async createNewType(body){
        const name = body.type_name
        if(name.trim() === ""){
            throw JSONform.empty_string();
        };
        if(name.length > 50){
            throw JSONform.wrong_characters_number();
        }
        const newType = await getRepository(Types).create(body);
        return await getRepository(Types).save(newType);
    };

    async updateType(id, body){
        if (isNaN(+id)) {
            throw JSONform.bad_request();
        };
        const name = body.type_name;
        if(name.length > 50){
            throw JSONform.wrong_characters_number();
        };
        const type = await getRepository(Types).findOne(id);
        if(type){
            await getRepository(Types).merge(type, body);
            await getRepository(Types).save(type);
            return JSONform.update_data();
        } else {
            throw JSONform.not_found();
        };
        
    };

    async deleteType(id){
        if (isNaN(+id)) {
            throw JSONform.bad_request();
        }
        await getRepository(Types).delete(id);
        return JSONform.delete_valid_data();
    };
};

export const typeService = new Type();
