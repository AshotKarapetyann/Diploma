import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from "typeorm";
import { Types } from "./Types";
import { Colors } from "./Colors"
import { Sizes } from "./Sizes";
import { Shops } from "./Shops";
import { IProducts } from "./Interfaces";

@Entity()
export class Products implements IProducts {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column("varchar")
    product_name!: string;
    
    @Column()
    price!: number;

    @ManyToOne(()=>Shops, shops => shops.id)
    @JoinColumn({name: "shop"})
    shop!: Shops;

    @ManyToOne(()=>Types, types => types.id)
    @JoinColumn({name: "type"})
    type!: Types;

    @Column()
    quantity!: number;

    @ManyToOne(()=> Colors, colors=> colors.id, {eager: true})
    @JoinColumn({name: "color"})
    color!: Colors;

    @ManyToOne(()=> Sizes, sizes => sizes.id, {eager: true})
    @JoinColumn({name: "sizes"})
    sizes!: Sizes;

};