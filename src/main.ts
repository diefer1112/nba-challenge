import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import compression from 'fastify-compress';
import * as cors from 'cors';


async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  app.register(compression, { encodings: ['gzip', 'deflate'] });
  app.use(cors());
  await app.listen(4000);
}

bootstrap();
