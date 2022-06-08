import { Entity, Column, PrimaryGeneratedColumn, } from "typeorm";
import { IColors } from "./Interfaces";

@Entity()
export class Colors implements IColors{

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "varchar" })
    color_name!: string;

};