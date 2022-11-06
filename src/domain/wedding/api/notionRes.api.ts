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
    isDate
  } from 'class-validator';

export class NotionResApi {
    @IsString()
    object! : string;

}