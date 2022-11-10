"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.UserInfoService = void 0;
var common_1 = require("@nestjs/common");
var userInfo_api_1 = require("./api/userInfo.api");
var notionKey = require("../../common/notion/notionKey");
var notion_enum_1 = require("../../common/notion/enums/notion.enum");
var UserInfoService = /** @class */ (function () {
    function UserInfoService(notionService) {
        this.notionService = notionService;
    }
    UserInfoService.prototype.getUserInfoList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var notionData, result, userList, _i, result_1, entity, properties, _a, _b, _c;
            var _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0: return [4 /*yield*/, this.notionService.getDBDataList(notionKey.userInfoDb)];
                    case 1:
                        notionData = _e.sent();
                        result = notionData.results;
                        userList = [];
                        _i = 0, result_1 = result;
                        _e.label = 2;
                    case 2:
                        if (!(_i < result_1.length)) return [3 /*break*/, 7];
                        entity = result_1[_i];
                        properties = entity.properties;
                        _b = (_a = userList).push;
                        _d = {
                            idx: entity.id
                        };
                        return [4 /*yield*/, this.notionService.getPropertiesValue(properties['name'], notion_enum_1.PropertiesType.TITLE)];
                    case 3:
                        _d.name = _e.sent();
                        return [4 /*yield*/, this.notionService.getPropertiesValue(properties['tel'], notion_enum_1.PropertiesType.RICH_TEXT)];
                    case 4:
                        _d.tel = _e.sent();
                        _c = Date.bind;
                        return [4 /*yield*/, this.notionService.getPropertiesValue(properties['contactDate'], notion_enum_1.PropertiesType.DATE)];
                    case 5:
                        _b.apply(_a, [(_d.contactDate = new (_c.apply(Date, [void 0, _e.sent()]))(),
                                _d)]);
                        _e.label = 6;
                    case 6:
                        _i++;
                        return [3 /*break*/, 2];
                    case 7: return [2 /*return*/, userList];
                }
            });
        });
    };
    UserInfoService.prototype.getUserInfoMap = function () {
        return __awaiter(this, void 0, void 0, function () {
            var notionData, result, userMap, _i, result_2, entity, properties, keys, _a, _b, _c, _d;
            var _e;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0: return [4 /*yield*/, this.notionService.getDBDataList(notionKey.userInfoDb)];
                    case 1:
                        notionData = _f.sent();
                        result = notionData.results;
                        userMap = new Map();
                        _i = 0, result_2 = result;
                        _f.label = 2;
                    case 2:
                        if (!(_i < result_2.length)) return [3 /*break*/, 8];
                        entity = result_2[_i];
                        properties = entity.properties;
                        keys = Object.keys(properties);
                        //Reflection 쓰고싶다....ㅜㅜㅜㅜ
                        _b = (_a = userMap).set;
                        return [4 /*yield*/, this.notionService.getPropertiesValue(properties['name'], notion_enum_1.PropertiesType.TITLE)];
                    case 3:
                        _c = [_f.sent()];
                        _e = {
                            idx: entity.id
                        };
                        return [4 /*yield*/, this.notionService.getPropertiesValue(properties['name'], notion_enum_1.PropertiesType.TITLE)];
                    case 4:
                        _e.name = _f.sent();
                        return [4 /*yield*/, this.notionService.getPropertiesValue(properties['tel'], notion_enum_1.PropertiesType.RICH_TEXT)];
                    case 5:
                        _e.tel = _f.sent();
                        _d = Date.bind;
                        return [4 /*yield*/, this.notionService.getPropertiesValue(properties['contactDate'], notion_enum_1.PropertiesType.DATE)];
                    case 6:
                        //Reflection 쓰고싶다....ㅜㅜㅜㅜ
                        _b.apply(_a, _c.concat([(_e.contactDate = new (_d.apply(Date, [void 0, _f.sent()]))(),
                                _e)]));
                        _f.label = 7;
                    case 7:
                        _i++;
                        return [3 /*break*/, 2];
                    case 8: return [2 /*return*/, userMap];
                }
            });
        });
    };
    UserInfoService.prototype.findUserOneFromList = function (name, tel) {
        return __awaiter(this, void 0, void 0, function () {
            var userList, findOne;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getUserInfoList()];
                    case 1:
                        userList = _a.sent();
                        findOne = userList.find(function (v, i) { return v.name == name || v.tel == tel; });
                        if (!findOne) {
                            return [2 /*return*/, null];
                        }
                        return [2 /*return*/, findOne];
                }
            });
        });
    };
    UserInfoService.prototype.findUserOneFromMap = function (name, tel) {
        return __awaiter(this, void 0, void 0, function () {
            var userMap, user, findOne;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getUserInfoMap()];
                    case 1:
                        userMap = _a.sent();
                        user = new userInfo_api_1.UserInfoApi();
                        findOne = userMap.get('name');
                        if (!findOne) {
                            return [2 /*return*/, null];
                        }
                        return [2 /*return*/, findOne];
                }
            });
        });
    };
    UserInfoService = __decorate([
        (0, common_1.Injectable)()
    ], UserInfoService);
    return UserInfoService;
}());
exports.UserInfoService = UserInfoService;
