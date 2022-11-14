import {
    validate,
    validateOrReject,
    Contains,
    IsInt,
    Length,
    IsEmail,
    IsFQDN,
    IsDate,
    Min,
    Max,
    IsString,
    IsNumber,
    isDate,
} from 'class-validator';

export class UserInfoApi {
    constructor() {}
    @IsString()
    idx!: string;

    @IsString()
    name!: string;

    @IsString()
    tel?: string;

    @IsDate()
    contactDate?: Date;
}
