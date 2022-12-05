import { ValidationPipe } from './core/validation/validation.pipe';
import { NestFactory } from '@nestjs/core';
import { RenderModule } from 'nest-next';
import Next from 'next';
import 'reflect-metadata';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import path from 'path';

async function bootstrap() {
    const dev = process.env.NODE_ENV !== 'production';
    const app = Next({ dev ,
        // conf: { distDir: `${path.relative(process.cwd(), __dirname)}/../next` },
    }); // create Next.js app

    await app.prepare();

    // create Nest.js app using AppModule(contains RenderModule)
    const server = await NestFactory.create<NestExpressApplication>(AppModule);

    // get registered RenderModule in Nest.js app
    const renderer = server.get(RenderModule);

    // bind Nest.js app and Next.js app
    renderer.register(server, app);

    server.useGlobalPipes(new ValidationPipe());

    await server.listen(3000);
}

bootstrap();
