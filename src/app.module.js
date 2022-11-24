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
var serve_static_1 = require("@nestjs/serve-static");
var path_1 = require("path");
var board_controller_1 = require("./domain/board/board.controller");
var board_service_1 = require("./domain/board/board.service");
var access_logger_service_1 = require("./core/access-log/access-logger.service");
var access_logger_interceptor_1 = require("./core/access-log/access-logger.interceptor");
var logger_service_1 = require("@nestjs/common/services/logger.service");
var request_info_1 = require("./core/request-info");
var web_exception_filter_1 = require("./core/exception/web-exception.filter");
var response_interceptor_1 = require("./core/respons-interceptor/response.interceptor");
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
                serve_static_1.ServeStaticModule.forRoot({
                    rootPath: path_1["default"].resolve(__dirname, '../public')
                }), // 이미지 렌더!! ㅜㅜㅜㅜㅜ 찾았다
            ],
            controllers: [app_controller_1.AppController, wedding_controller_1.WeddingController, board_controller_1.BoardController],
            providers: [
                logger_service_1.Logger,
                notion_service_1.NotionService,
                customHttp_service_1.CustomHttpService,
                userInfo_service_1.UserInfoService,
                board_service_1.BoardService,
                access_logger_service_1.AccessLoggerService,
                request_info_1.RequestInfoService,
                {
                    provide: core_1.APP_PIPE,
                    scope: common_1.Scope.REQUEST,
                    useClass: validation_pipe_1.ValidationPipe
                },
                {
                    provide: core_1.APP_INTERCEPTOR,
                    scope: common_1.Scope.REQUEST,
                    useClass: access_logger_interceptor_1.AccessLoggerInterceptor
                },
                {
                    provide: core_1.APP_INTERCEPTOR,
                    scope: common_1.Scope.REQUEST,
                    useClass: request_info_1.RequestInfoInterceptor
                },
                {
                    provide: core_1.APP_INTERCEPTOR,
                    scope: common_1.Scope.REQUEST,
                    useClass: response_interceptor_1.ResponseInterceptor
                },
                {
                    provide: core_1.APP_FILTER,
                    scope: common_1.Scope.REQUEST,
                    useClass: web_exception_filter_1.WebExceptionFilter
                },
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
