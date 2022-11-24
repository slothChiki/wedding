"use strict";
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
exports.__esModule = true;
exports.WebException = void 0;
var custom_exception_1 = require("./custom.exception");
var WebException = /** @class */ (function (_super) {
    __extends(WebException, _super);
    function WebException(code, message, isNotice) {
        if (isNotice === void 0) { isNotice = true; }
        var _this = _super.call(this, code, message, isNotice) || this;
        _this.name = 'WebException';
        return _this;
    }
    return WebException;
}(custom_exception_1.CustomException));
exports.WebException = WebException;
