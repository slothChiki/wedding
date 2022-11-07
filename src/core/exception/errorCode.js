export var ErrorCode;
(function (ErrorCode) {
    ErrorCode[ErrorCode["SUCCESS"] = 100] = "SUCCESS";
    ErrorCode[ErrorCode["DEFAULT_ERROR"] = 200] = "DEFAULT_ERROR";
    ErrorCode[ErrorCode["VALIDATION_ERROR"] = 10000] = "VALIDATION_ERROR";
})(ErrorCode || (ErrorCode = {}));
