import { IsDate, IsOptional, IsString } from 'class-validator';

export class UserInfoApi {
    constructor(options?: Partial<UserInfoApi>) {
        if (options !== undefined) Object.assign(this, options);
    }
    @IsString()
    @IsOptional()
    idx?: string;

    @IsString()
    name!: string;

    @IsString()
    tel?: string;

    @IsDate()
    @IsOptional()
    contactDate?: Date;
}
