import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Types } from "./Types";
import { IShops } from "./Interfaces";

@Entity()
export class Shops implements IShops {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "varchar", nullable: false })
    shop_name!: string;

    @ManyToOne(()=> Types, types => types.id,{ eager: true})
    @JoinColumn({name: "types"})
    types!: Types[];

};