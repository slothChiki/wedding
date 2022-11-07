import { CustomException } from './custom.exception';

export class WebException extends CustomException {
    constructor(code: number, message: string, isNotice = true) {
        super(code, message, isNotice);
        this.name = 'WebException';
    }
}
