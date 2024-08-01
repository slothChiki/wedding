import { IsArray, IsNumber, IsObject, IsString } from 'class-validator';
import { DetailType } from '../../../enums/wedding.enum';

export class Top10Dto {
    constructor(options?: Partial<Top10Dto>) {
        if (options !== undefined) Object.assign(this, options);
    }
    @IsObject()
    data: ActorDto | PosterDto | PhotoDto;

    @IsNumber()
    detailType: DetailType;
}
export class PosterDto {
    constructor(options?: Partial<PosterDto>) {
        if (options !== undefined) Object.assign(this, options);
    }
    @IsString()
    name: string;

    @IsString()
    src: string;

    @IsString()
    thumbSrc: string;

    @IsString()
    date: string;

    @IsString()
    comment1: string;

    @IsString()
    comment2: string;

    @IsString()
    category: string; // 연관된 여행 카테고리
}

export class PhotoDto {
    constructor(options?: Partial<PhotoDto>) {
        if (options !== undefined) Object.assign(this, options);
    }
    @IsString()
    src: string;

    @IsString()
    thumbSrc: string;
}

export class ActorDto {
    constructor(options?: Partial<ActorDto>) {
        if (options !== undefined) Object.assign(this, options);
    }

    @IsString()
    name: string;

    @IsString()
    src: string;

    @IsString()
    thumbSrc: string;

    @IsArray()
    photoList: string[] | null;

    @IsString()
    bank: string;

    @IsString()
    account: string;

    @IsString()
    kakaoQr: string;

    @IsString()
    toss: string;

    @IsString()
    comment1: string;

    @IsString()
    comment2: string;
}
