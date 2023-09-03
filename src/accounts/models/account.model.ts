import { Account } from "../entities/account.entity";

export class AccountModel {

  email: string;
  name: string;
  surname: string;
  age: number;

  constructor(account: Account) {
    this.email = account.email;
    this.name = account.name;
    this.surname = account.surname;
    this.age = account.age;
  }

}