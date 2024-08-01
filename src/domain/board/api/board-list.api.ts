import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';

export class BoardListApi {
    constructor(options?: Partial<BoardListApi>) {
        if (options !== undefined) Object.assign(this, options);
    }

    @IsString()
    @IsOptional()
    idx?: string;

    @IsString()
    name: string;

    @IsString()
    contents: string;

    @IsString()
    tel?: string;

    @IsDate()
    @IsOptional()
    regDate?: Date;
}
