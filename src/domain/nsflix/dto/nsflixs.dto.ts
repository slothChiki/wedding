import { IsString } from 'class-validator';

export class PosterDto {
    constructor(options?: Partial<PosterDto>) {
        if (options !== undefined) Object.assign(this, options);
    }
    @IsString()
    name: string;

    @IsString()
    src: string;
}
