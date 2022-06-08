import { Shops } from "./Shops";
import { Types } from "./Types";
import { Colors } from "./Colors";
import { Sizes } from "./Sizes";

export interface IShops{
    id: number,
    shop_name: string,
    types: Types[];
};

export interface ITypes{
    id: number,
    type_name: string,
    shops: Shops[];
};

export interface IProducts{
    id: number,
    product_name: string,
    price: number,
    shop: Shops,
    type: Types,
    quantity: number,
    color: Colors,
    sizes: Sizes;
};

export interface IColors{
    id: number,
    color_name: string;
};

export interface ISizes{
    id: number,
    size_name: string;
};