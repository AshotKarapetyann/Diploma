import { Products } from "../entities/Products";
import { getRepository } from 'typeorm';
import JSONform from '../utils/JSONform';

class Product{
    async getAllProducts(){
        const allProducts = await getRepository(Products).find();
        if (allProducts.length === 0){
            const msg: object = [];
            return JSONform.empty_data(msg);
        } else if(allProducts.length === 1){
            return JSONform.valid_one_data(allProducts);
        } else return JSONform.valid_much_data(allProducts);
    };

    async getProductById(id){
        if (!Number(id)) {
            throw JSONform.bad_request();
        }
        const product = await getRepository(Products).findByIds(id);
        if (product) {
            return JSONform.valid_one_data(product);
        } else {
            throw JSONform.not_found();
        };
    };
      

    async createNewProduct(body){
        const name = body.product_name;
        if(name.trim() === ""){
            throw JSONform.empty_string();
        };
        if(name.length > 50){
            throw JSONform.wrong_characters_number();
        };
        const newProduct = await getRepository(Products).create(body);
        return await getRepository(Products).save(newProduct);
    };

    async updateProduct(id, body){
        if (isNaN(+id)) {
            throw JSONform.bad_request();
        };
        const name = body.product_name;
        if(name.length > 50){
            throw JSONform.wrong_characters_number();
        };
        const product = await getRepository(Products).findOne(id);
        if(product){
            await getRepository(Products).merge(product, body);
            await getRepository(Products).save(product);
            return JSONform.update_data();
        } else {
            throw JSONform.not_found();
        }
        
    };

    async deleteProduct(id){
        if (isNaN(+id)) {
            throw JSONform.bad_request();
        }
        await getRepository(Products).delete(id);
        return JSONform.delete_valid_data();
    };
};

export const productService = new Product();
