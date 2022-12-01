import { IsNumber, IsString } from 'class-validator';
import { DetailType } from '../../../enums/wedding.enum';

export class PosterDto {
    constructor(options?: Partial<PosterDto>) {
        if (options !== undefined) Object.assign(this, options);
    }
    @IsNumber()
    type: DetailType;

    @IsString()
    name: string;

    @IsString()
    src: string;
}

export class PhotoDto {
    constructor(options?: Partial<PhotoDto>) {
        if (options !== undefined) Object.assign(this, options);
    }
    @IsNumber()
    type: DetailType;

    @IsString()
    src: string;
}
