import {Column, DataType, Table, Model } from "sequelize-typescript";

@Table
export class User extends Model<User>{
    @Column({
        type: DataType.STRING(),
        allowNull: false
    })
    name: string

    @Column({
        type: DataType.STRING(),
        allowNull: false
    })
    email: string

    @Column({
        type: DataType.STRING(),
        allowNull: false
    })
    phone: string

    @Column({
        type: DataType.STRING(),
        allowNull: false
    })
    password: string

}

