import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { InjectModel } from "@nestjs/sequelize";
import { Account } from "./entities/account.entity";
import { AccountIsBusy } from "../exceptions/account-is-busy";

@Injectable()
export class AccountsService {

  constructor(@InjectModel(Account) private accountRepository: typeof Account) {}
  async create(createAccountDto: CreateAccountDto): Promise<Account> {
    const accountFromDB: Account = await this.accountRepository
      .findOne({where: {email: createAccountDto.email}});
    if (accountFromDB) {
      throw new AccountIsBusy();
    }
    const account: Account = await this.accountRepository.create(createAccountDto);
    return account;
  }

  async findAll(): Promise<Account[]> {
    const accounts: Account[] = await this.accountRepository.findAll();
    return accounts;
  }

  async findOne(id: number): Promise<Account> {
    const account = await this.accountRepository.findByPk(id);
    return account;
  }

  update(id: number, updateAccountDto: UpdateAccountDto) {
    return `This action updates a #${id} account`;
  }

  remove(id: number) {
    return `This action removes a #${id} account`;
  }
}
