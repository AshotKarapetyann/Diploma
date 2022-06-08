import { Entity, Column, PrimaryGeneratedColumn} from "typeorm";
import { ISizes } from "./Interfaces";

@Entity()
export class Sizes implements ISizes{

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({type: "varchar"})
    size_name!: string;

};