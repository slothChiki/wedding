import {
    ArgumentsHost,
    Catch,
    ExceptionFilter,
    HttpStatus,
} from '@nestjs/common';
import { Logger } from '@nestjs/common/services/logger.service';
import { AccessLoggerService } from '../access-log/access-logger.service';
import { Reflector } from '@nestjs/core';
import { ErrorCode } from './errorCode';
import { ResponseApiBase } from '../respons-interceptor/response.api';
import { HttpArgumentsHost } from '@nestjs/common/interfaces';
import { RequestInfoService } from '../request-info';
import { RestApiPropertyName } from '../decorator/rest-api.decorator';
import { includes } from 'lodash';

@Catch(Error)
export class WebExceptionFilter implements ExceptionFilter {
    constructor(
        private readonly logger: Logger,
        private readonly accessLoggerService: AccessLoggerService,
        private readonly requestInfoService: RequestInfoService,
        private readonly reflector: Reflector,
    ) {}
    catch(exception: Error, host: ArgumentsHost) {
        const ctx: HttpArgumentsHost = host.switchToHttp();
        const response = ctx.getResponse();
        // const request = ctx.getRequest();
        const hostClass = this.requestInfoService
            .getExecutionContext()
            .getClass();
        const hostHandler = this.requestInfoService
            .getExecutionContext()
            .getHandler();

        let restApiRequest = false;
        const restApiHandlers = this.reflector.getAll<boolean[]>(
            RestApiPropertyName,
            [hostClass, hostHandler],
        );
        if (includes(restApiHandlers, true)) {
            restApiRequest = true;
        }

        this.logger.error(
            `[ErrorFilter] errer : ${exception.message}`,
            exception.stack,
        );

        const apiResponse = new ResponseApiBase();
        apiResponse.code = ErrorCode.DEFAULT_ERROR;
        apiResponse.message = exception.message;

        if (restApiRequest) response.status(HttpStatus.OK).json(apiResponse);
        else
            response
                .status(HttpStatus.OK)
                .redirect('/error/500?code=' + ErrorCode.DEFAULT_ERROR);

        this.accessLoggerService.writeLogError(apiResponse);
    }
}
