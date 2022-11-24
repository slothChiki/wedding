/*
https://docs.nestjs.com/interceptors#interceptors
*/

import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    CallHandler,
    Logger,
    HttpStatus,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ResponseApiBase } from './response.api';
import { Response } from 'express';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
    constructor(private readonly logger: Logger) {}

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const request: Request = context.switchToHttp().getRequest();
        const response: Response = context.switchToHttp().getResponse();

        const { method } = request;
        return next.handle().pipe(
            map((data) => {
                if (method === 'POST') {
                    // POST 기본은 201 이지만 200 으로 변경.
                    response.status(HttpStatus.OK);

                    return new ResponseApiBase(data);
                } else return data;
            }),
        );
    }
}
