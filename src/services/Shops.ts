import { Shops } from "../entities/Shops";
import { getRepository } from 'typeorm';
import JSONform from '../utils/JSONform';

class Shop{
    async getAllShops(){
        const allShops = await getRepository(Shops).find();
        if (allShops.length === 0){
            const msg: object = [];
            return JSONform.empty_data(msg);
        } else if (allShops.length === 1) {
            return JSONform.valid_one_data(allShops);
        } else return JSONform.valid_much_data(allShops);
    };

    async getShopById(id){
        if (!Number(id)) {
            throw JSONform.bad_request();
        }
        const shop = await getRepository(Shops).findByIds(id);
        if (shop) {
            return JSONform.valid_one_data(shop);
        } else {
            throw JSONform.not_found();
        };
    };

    async createNewShop(body){
        const name = body.shop_name
        if(name.trim() === ""){
            throw JSONform.empty_string();
        };
        if(name.length > 50){
            throw JSONform.wrong_characters_number();
        };
        const newShop = await getRepository(Shops).create(body);
        return await getRepository(Shops).save(newShop);
    };

    async updateShop(id, body){
        if (isNaN(+id)) {
            throw JSONform.bad_request();
        };
        const name = body.shop_name
        if(name.length > 50){
            throw JSONform.wrong_characters_number();
        };
        const shop = await getRepository(Shops).findOne(id);
        if(shop){
            await getRepository(Shops).merge(shop, body);
            await getRepository(Shops).save(shop);
            return JSONform.update_data();
        } else {
            throw JSONform.not_found();
        }
    };

    async deleteShop(id){
        if (isNaN(+id)) {
            throw JSONform.bad_request();
        }
        await getRepository(Shops).delete(id);
        return JSONform.delete_valid_data();
    };
};

export const shopService = new Shop();
