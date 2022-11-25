import { HttpModule, Module, Scope } from '@nestjs/common';
import { RenderModule } from 'nest-next';
import Next from 'next';
import { AppController } from './app.controller';
import { WeddingController } from './domain/wedding/wedding.controller';
import { NotionService } from './common/notion/notion.service';
import { CustomHttpService } from './common/custom-http/customHttp.service';
import { UserInfoService } from './domain/wedding/userInfo.service';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { ValidationPipe } from './core/validation/validation.pipe';
import { ServeStaticModule } from '@nestjs/serve-static';
import path from 'path';
import { BoardController } from './domain/board/board.controller';
import { BoardService } from './domain/board/board.service';
import { AccessLoggerService } from './core/access-log/access-logger.service';
import { AccessLoggerInterceptor } from './core/access-log/access-logger.interceptor';
import { Logger } from '@nestjs/common/services/logger.service';
import {
    RequestInfoInterceptor,
    RequestInfoService,
} from './core/request-info';
import { WebExceptionFilter } from './core/exception/web-exception.filter';
import { ResponseInterceptor } from './core/respons-interceptor/response.interceptor';
import { MovieInfoController } from './domain/wedding/movie-info.controller';

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
    controllers: [
        AppController,
        WeddingController,
        BoardController,
        MovieInfoController,
    ],
    providers: [
        Logger,
        NotionService,
        CustomHttpService,
        UserInfoService,
        BoardService,
        AccessLoggerService,
        RequestInfoService,
        {
            provide: APP_PIPE,
            scope: Scope.REQUEST,
            useClass: ValidationPipe,
        },
        {
            provide: APP_INTERCEPTOR,
            scope: Scope.REQUEST, // 요청마다 생성되고 요청이 종료되면 삭제됨.
            useClass: AccessLoggerInterceptor,
        },
        {
            provide: APP_INTERCEPTOR,
            scope: Scope.REQUEST, // 요청마다 생성되고 요청이 종료되면 삭제됨.
            useClass: RequestInfoInterceptor,
        },
        {
            provide: APP_INTERCEPTOR,
            scope: Scope.REQUEST, // 요청마다 생성되고 요청이 종료되면 삭제됨.
            useClass: ResponseInterceptor,
        },
        {
            provide: APP_FILTER,
            scope: Scope.REQUEST, // 요청마다 생성되고 요청이 종료되면 삭제됨.
            useClass: WebExceptionFilter,
        },
    ],
})
export class AppModule {}
