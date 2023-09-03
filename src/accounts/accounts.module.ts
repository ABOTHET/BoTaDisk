import { Module } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { AccountsController } from './accounts.controller';
import { SequelizeModule } from "@nestjs/sequelize";
import { Account } from "./entities/account.entity";

@Module({
  controllers: [AccountsController],
  providers: [AccountsService],
  imports: [SequelizeModule.forFeature([Account])]
})
export class AccountsModule {}
