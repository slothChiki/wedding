/*
https://docs.nestjs.com/exception-filters#custom-exceptions
*/

import { HttpException, HttpStatus } from '@nestjs/common';

export class CustomException extends HttpException {
    name: string;
    code: number;
    isNotice: boolean;

    /**
     * @param code
     * @param message
     * @param isNotice - 노티피케이션으로 보낼 것인지.
     */
    constructor(code: number, message: string, isNotice = true) {
        super(message, HttpStatus.INTERNAL_SERVER_ERROR);
        this.code = code;
        this.name = 'Custom';
        this.isNotice = isNotice;
    }
}
