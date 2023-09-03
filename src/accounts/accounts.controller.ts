import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { Account } from "./entities/account.entity";
import { AccountModel } from "./models/account.model";

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Post()
  async create(@Body() createAccountDto: CreateAccountDto) {
    const account: Account = await this.accountsService.create(createAccountDto);
    const data: AccountModel = new AccountModel(account);
    return data;
  }

  @Get()
  async findAll() {
    const accounts: Account[] = await this.accountsService.findAll();
    let dataAll: AccountModel[] = [];
    accounts.forEach((account) => {
      dataAll.push(new AccountModel(account));
    });
    return dataAll;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const account: Account = await this.accountsService.findOne(+id);
    if (!account) {
      return account;
    }
    const data: AccountModel = new AccountModel(account);
    return data;
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateAccountDto: UpdateAccountDto) {
  //   return this.accountsService.update(+id, updateAccountDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.accountsService.remove(+id);
  // }
}
