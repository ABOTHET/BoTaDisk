import { AutoIncrement, Column, Model, PrimaryKey, Table, Unique } from "sequelize-typescript";
import { DataTypes, InferAttributes, InferCreationAttributes } from "sequelize";

const options = {
  allowNull: false
}

@Table({tableName: "accounts", timestamps: false})
export class Account extends Model<InferAttributes<Account>, InferCreationAttributes<Account>> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;
  @Unique
  @Column({...options})
  email: string;
  @Column({...options})
  password: string;
  @Column({...options})
  name: string;
  @Column({...options})
  surname: string;
  @Column({...options})
  age: number;
  @Column({...options})
  date_of_create: Date = new Date();
}
