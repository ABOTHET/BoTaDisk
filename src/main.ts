import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { env } from "process";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const PORT = env["PORT"] || 3000
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true
  }));
  await app.listen(PORT, () => {
    console.log(`Сервер был запущен на порту: ${PORT}`);
  });
}

bootstrap().then();
