import { MainManu } from '../../../enums/wedding.enum';
import { IsNumber } from 'class-validator';

export class MainDto {
    @IsNumber()
    headerMenu: MainManu;
}
