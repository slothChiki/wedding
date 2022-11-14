import { IsString } from 'class-validator';

export class ImageDto {
    constructor() {}
    @IsString()
    url!: string;

    @IsString()
    thumbNail?: string;
}
