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
import { RequestInfoService } from './request-info.service';
import { RequestInfoDto } from './request-info.dto';

@Injectable({ scope: Scope.REQUEST })
export class RequestInfoInterceptor implements NestInterceptor {
    constructor(
        private readonly logger: Logger,
        private readonly requestInfoService: RequestInfoService,
    ) {}

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const request: Request = context.switchToHttp().getRequest();

        const { ip, method, originalUrl } = request;

        const userAgent = request.get('user-agent') || '';

        const requestInfo = {
            method: method,
            url: originalUrl,
            ip: ip,
            agent: userAgent,
        } as RequestInfoDto;
        this.requestInfoService.setRequestInfo(requestInfo, context);

        return next.handle();
    }
}
