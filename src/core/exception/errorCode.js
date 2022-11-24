"use strict";
exports.__esModule = true;
exports.ErrorCode = void 0;
var ErrorCode;
(function (ErrorCode) {
    ErrorCode[ErrorCode["SUCCESS"] = 100] = "SUCCESS";
    ErrorCode[ErrorCode["DEFAULT_ERROR"] = 200] = "DEFAULT_ERROR";
    ErrorCode[ErrorCode["VALIDATION_ERROR"] = 10000] = "VALIDATION_ERROR";
    // 게시판 관련
    ErrorCode[ErrorCode["BOARD_NAME_NULL"] = 11000] = "BOARD_NAME_NULL";
    ErrorCode[ErrorCode["BOARD_TEL_NULL"] = 11001] = "BOARD_TEL_NULL";
    ErrorCode[ErrorCode["BOARD_CONTENTS_NULL"] = 11002] = "BOARD_CONTENTS_NULL";
    // 노션 관련
    ErrorCode[ErrorCode["NOTION_DB_ID_NULL"] = 19000] = "NOTION_DB_ID_NULL";
    ErrorCode[ErrorCode["NOTION_INPUT_DATA_NULL"] = 19001] = "NOTION_INPUT_DATA_NULL";
    ErrorCode[ErrorCode["INTERNAL_ERROR"] = 20000] = "INTERNAL_ERROR";
})(ErrorCode = exports.ErrorCode || (exports.ErrorCode = {}));
