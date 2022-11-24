/*
https://docs.nestjs.com/providers#services
*/

import { Injectable, Logger, Scope } from '@nestjs/common';
import { AccessLogDto } from './access-log.dto';
import * as util from 'util';
import moment from 'moment';

@Injectable({ scope: Scope.REQUEST })
export class AccessLoggerService {
    private accessLog: AccessLogDto;
    private timer: Date;
    constructor(private readonly logger: Logger) {}

    public setAccessLog(info: AccessLogDto) {
        this.timer = new Date();
        this.accessLog = info;
    }

    public writeLog(response: any) {
        // setAccessLog 가 없었으면 로그 쓰지 않는다.
        if (!this.accessLog) return;

        const now = new Date();
        const responseTime = now.getTime() - this.timer.getTime();
        this.accessLog.date = moment().format(`YYYY-MM-DD HH:mm:ss.SSS`);
        this.accessLog.res = response;
        this.accessLog.time = responseTime;
        this.logger.debug(
            `accessLog[Success] : ${util.inspect(this.accessLog)}`,
        );
    }

    public writeLogError(response: any) {
        // setAccessLog 가 없었으면 로그 쓰지 않는다.
        if (!this.accessLog) return;

        const now = new Date();
        const responseTime = now.getTime() - this.timer.getTime();
        this.accessLog.date = moment().format(`YYYY-MM-DD HH:mm:ss.SSS`);
        this.accessLog.res = response;
        this.accessLog.time = responseTime;
        this.logger.debug(`accessLog[Error] : ${util.inspect(this.accessLog)}`);
    }
}
