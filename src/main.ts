// import { ValidationPipe } from "@nestjs/common/pipes/validation.pipe";
import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { RenderModule } from "nest-next";
import Next from "next";
import "reflect-metadata";
import { AppModule } from "./app.module";

async function bootstrap() {
  const dev = process.env.NODE_ENV !== 'production';
  const app = Next({ dev }); // create Next.js app

  await app.prepare();

 // create Nest.js app using AppModule(contains RenderModule)
  const server = await NestFactory.create(AppModule);

  // get registered RenderModule in Nest.js app
  const renderer = server.get(RenderModule);

  // bind Nest.js app and Next.js app
  renderer.register(server, app);
  
  server.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  await server.listen(3000);
}

bootstrap();
