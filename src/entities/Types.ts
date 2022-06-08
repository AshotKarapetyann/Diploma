import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { ITypes } from "./Interfaces";
import { Products } from "./Products";
import { Shops } from "./Shops";

@Entity()
export class Types implements ITypes{  

    @PrimaryGeneratedColumn()
    id!: number;

    @Column("varchar")
    type_name!: string;
    
    @OneToMany(()=> Shops, shops => shops.types, {eager: false})
    shops!: Shops[];

    @OneToMany(()=> Products, products => products.type, {eager: true})
    products!: Types;

};