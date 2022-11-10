"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
var nest_next_1 = require("nest-next");
var next_1 = require("next");
var app_controller_1 = require("./app.controller");
var wedding_controller_1 = require("./domain/wedding/wedding.controller");
var notion_service_1 = require("./common/notion/notion.service");
var customHttp_service_1 = require("./common/custom-http/customHttp.service");
var userInfo_service_1 = require("./domain/wedding/userInfo.service");
var config_1 = require("@nestjs/config");
var core_1 = require("@nestjs/core");
var validation_pipe_1 = require("./core/validation/validation.pipe");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        (0, common_1.Module)({
            imports: [
                nest_next_1.RenderModule.forRootAsync((0, next_1["default"])({
                    dev: process.env.NODE_ENV !== 'production',
                    conf: { useFilesystemPublicRoutes: false }
                })),
                common_1.HttpModule,
                config_1.ConfigModule.forRoot(),
            ],
            controllers: [app_controller_1.AppController, wedding_controller_1.WeddingController],
            providers: [
                notion_service_1.NotionService,
                customHttp_service_1.CustomHttpService,
                userInfo_service_1.UserInfoService,
                {
                    provide: core_1.APP_PIPE,
                    scope: common_1.Scope.REQUEST,
                    useClass: validation_pipe_1.ValidationPipe
                },
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
