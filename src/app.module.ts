import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import { AccountsModule } from './accounts/accounts.module';
import { SequelizeModule } from "@nestjs/sequelize";
import { env } from "process";
import { Account } from "./accounts/entities/account.entity";
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: "src/config/.env",
      isGlobal: true,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: env["DB_HOST"],
      port: parseInt(env["DB_PORT"]),
      username: env["DB_USERNAME"],
      password: env["DB_PASSWORD"],
      database: env["DB_DATABASE"],
      models: [Account],
      autoLoadModels: true,
      synchronize: true,
      schema: "public",
      sync: {
        force: true
      },
    }),
    AccountsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
