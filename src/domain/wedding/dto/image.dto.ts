import { IsString } from 'class-validator';

export class ImageDto {
    constructor(options?: Partial<ImageDto>) {
        if (options !== undefined) Object.assign(this, options);
    }
    @IsString()
    url!: string;

    @IsString()
    thumbNail?: string;
}
