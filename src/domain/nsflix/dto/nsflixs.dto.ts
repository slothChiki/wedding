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

export class Actor {
    constructor(options?: Partial<Actor>) {
        if (options !== undefined) Object.assign(this, options);
    }

    @IsString()
    name:string;

    @IsString()
    imgSrc:string;

    @IsString()
    bank:string;

    @IsString()
    account:string;

    @IsString()
    kakaoQr:string;

    @IsString()
    toss:string;

    @IsString()
    comment1:string;

    
    @IsString()
    comment2:string;
}
