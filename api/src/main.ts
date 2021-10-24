import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ConfigService} from "@nestjs/config";

import { config as configDotEnv } from "dotenv"

async function bootstrap() {

  configDotEnv({ path: '../.env' });

  const app = await NestFactory.create(AppModule);

  app.enableCors({ origin: 'http://localhost:4200' });

  const configService = app.get<ConfigService>(ConfigService);
  await app.listen(
      configService.get<number>('app.port'),
      configService.get<string>('app.host'),
  );
}
bootstrap();
