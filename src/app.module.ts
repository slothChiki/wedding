import { HttpModule, Module } from '@nestjs/common';
import { RenderModule } from 'nest-next';
import Next from 'next';
import { AppController } from './app.controller';
import { WeddingController } from './domain/wedding/wedding.controller';
import { NotionService } from './common/notion/notion.service';
import { CustomHttpService } from './common/custom-http/customHttp.service';
import { UserInfoService } from './domain/wedding/userInfo.service';
import { ConfigModule } from '@nestjs/config';

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
    ],
    controllers: [AppController, WeddingController],
    providers: [NotionService, CustomHttpService, UserInfoService],
})
export class AppModule {}
