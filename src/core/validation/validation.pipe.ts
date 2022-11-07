import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToInstance } from 'class-transformer';
import * as util from 'util';
import { WebException } from '../exception/WebException';
import { ErrorCode } from '../exception/errorCode';

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
    async transform(value: any, { metatype }: ArgumentMetadata) {
        if (!metatype || !ValidationPipe.toValidate(metatype)) {
            return value;
        }
        const object = plainToInstance(metatype, value);
        const errors = await validate(object);
        if (errors.length > 0) {
            const validationError = errors[0];
            const message = `[validation error] ${validationError.property} : ${
                validationError.value
            } / metatype : ${metatype?.name} / ${util.inspect(
                validationError.constraints,
            )}`;
            throw new WebException(ErrorCode.VALIDATION_ERROR, message);
        }
        return value;
    }

    // eslint-disable-next-line @typescript-eslint/ban-types
    private static toValidate(metatype: Function): boolean {
        // eslint-disable-next-line @typescript-eslint/ban-types
        const types: Function[] = [String, Boolean, Number, Array, Object];
        return !types.includes(metatype);
    }
}
