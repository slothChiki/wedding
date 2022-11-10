import { HttpModule, Module, Scope } from '@nestjs/common';
import { RenderModule } from 'nest-next';
import Next from 'next';
import { AppController } from './app.controller';
import { WeddingController } from './domain/wedding/wedding.controller';
import { NotionService } from './common/notion/notion.service';
import { CustomHttpService } from './common/custom-http/customHttp.service';
import { UserInfoService } from './domain/wedding/userInfo.service';
import { ConfigModule } from '@nestjs/config';
import { APP_PIPE } from '@nestjs/core';
import { ValidationPipe } from './core/validation/validation.pipe';
import { ServeStaticModule } from '@nestjs/serve-static';
import path from 'path';

@Module({
    imports: [
        RenderModule.forRootAsync(
            Next({
                dev: process.env.NODE_ENV !== 'production',
                conf: { useFilesystemPublicRoutes: false },
            }),
        ),
        HttpModule,
        ConfigModule.forRoot(),
        ServeStaticModule.forRoot({
            rootPath: path.resolve(__dirname, '../public'),
        }), // 이미지 렌더!! ㅜㅜㅜㅜㅜ 찾았다
    ],
    controllers: [AppController, WeddingController],
    providers: [
        NotionService,
        CustomHttpService,
        UserInfoService,
        {
            provide: APP_PIPE,
            scope: Scope.REQUEST,
            useClass: ValidationPipe,
        },
    ],
})
export class AppModule {}
