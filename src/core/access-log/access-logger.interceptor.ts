/*
https://docs.nestjs.com/interceptors#interceptors
*/

import {
    CallHandler,
    ExecutionContext,
    Injectable,
    Logger,
    NestInterceptor,
    Scope,
} from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AccessLoggerService } from './access-logger.service';
import { AccessLogDto } from './access-log.dto';

@Injectable({ scope: Scope.REQUEST })
export class AccessLoggerInterceptor implements NestInterceptor {
    constructor(
        private readonly logger: Logger,
        private readonly accessLoggerService: AccessLoggerService,
    ) {}

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const request: Request = context.switchToHttp().getRequest();

        const { ip, method, originalUrl } = request;
        // if (includes(CONFIG.ACCESS_LOGGER.SKIP_URL, originalUrl)) {
        //     return next.handle();
        // }

        const userAgent = request.get('user-agent') || '';

        const accessLog = {
            date: '',
            method: method,
            url: originalUrl,
            ip: ip,
            agent: userAgent,
            req: request.body,
            res: {},
        } as AccessLogDto;
        this.accessLoggerService.setAccessLog(accessLog);

        return next.handle().pipe(
            tap((responseBody) => {
                this.accessLoggerService.writeLog(responseBody);
            }),
        );
    }
}
