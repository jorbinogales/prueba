import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice({
    Transport: Transport.TCP,
    options: {
      host: '127.20.20.2',
      port: 4000,
    }
  });

  app.startAllMicroservices();
  await app.listen(4000);
}
bootstrap();
