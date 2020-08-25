import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { AllExceptionsFilter } from './http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useGlobalFilters(new AllExceptionsFilter());
  await app.listen(3000);
}
bootstrap();
