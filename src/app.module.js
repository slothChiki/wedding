var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { HttpModule, Module } from '@nestjs/common';
import { RenderModule } from 'nest-next';
import Next from 'next';
import { AppController } from './app.controller';
import { WeddingController } from './domain/wedding/wedding.controller';
import { NotionService } from './common/notion/notion.service';
import { CustomHttpService } from './common/custom-http/customHttp.service';
import { UserInfoService } from './domain/wedding/userInfo.service';
import { ConfigModule } from '@nestjs/config';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Module({
            imports: [
                RenderModule.forRootAsync(Next({
                    dev: process.env.NODE_ENV !== 'production',
                    conf: { useFilesystemPublicRoutes: false },
                })),
                HttpModule,
                ConfigModule.forRoot(),
            ],
            controllers: [AppController, WeddingController],
            providers: [NotionService, CustomHttpService, UserInfoService],
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
