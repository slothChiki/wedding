/*
https://docs.nestjs.com/exception-filters#custom-exceptions
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { HttpException, HttpStatus } from '@nestjs/common';
var CustomException = /** @class */ (function (_super) {
    __extends(CustomException, _super);
    /**
     * @param code
     * @param message
     * @param isNotice - 노티피케이션으로 보낼 것인지.
     */
    function CustomException(code, message, isNotice) {
        if (isNotice === void 0) { isNotice = true; }
        var _this = _super.call(this, message, HttpStatus.INTERNAL_SERVER_ERROR) || this;
        _this.code = code;
        _this.name = 'Custom';
        _this.isNotice = isNotice;
        return _this;
    }
    return CustomException;
}(HttpException));
export { CustomException };
