import { ExecutionContext, Injectable, Scope } from '@nestjs/common';
import { RequestInfoDto } from './request-info.dto';

@Injectable({ scope: Scope.REQUEST })
export class RequestInfoService {
    private executionContext: ExecutionContext;
    private requestInfo: RequestInfoDto;
    constructor() {} // private readonly logger: Logger,

    public setRequestInfo(
        info: RequestInfoDto,
        executionContext: ExecutionContext,
    ) {
        this.requestInfo = info;
        this.executionContext = executionContext;
    }

    public getExecutionContext(): ExecutionContext {
        return this.executionContext;
    }
}
