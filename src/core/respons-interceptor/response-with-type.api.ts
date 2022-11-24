import { IsNumber, IsOptional } from 'class-validator';
import { ErrorCode } from '../exception/errorCode';

export class ResponseWithType<T> {
    @IsNumber()
    code: number;
    @IsOptional()
    message: string;
    @IsOptional()
    data: T;

    constructor(data?: any) {
        this.code = ErrorCode.SUCCESS;
        this.message = '';
        this.data = data;
    }
}
