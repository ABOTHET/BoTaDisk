import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import { AccountsModule } from './accounts/accounts.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: "src/config/.env",
      isGlobal: true,
    }),
    AccountsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
