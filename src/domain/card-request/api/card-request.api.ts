import { IsDate, IsOptional, IsString } from 'class-validator';

export class CardRequestApi {
    constructor(options?: Partial<CardRequestApi>) {
        if (options !== undefined) Object.assign(this, options);
    }
    @IsString()
    name: string;

    @IsString()
    tel?: string;

    @IsString()
    address1: string;

    @IsString()
    address2: string;

    @IsString()
    postNum: string;

    @IsDate()
    @IsOptional()
    regDate?: Date;
}
