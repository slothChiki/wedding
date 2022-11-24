import { UserInfoService } from './userInfo.service';
import {
    Body,
    Controller,
    Get,
    NotFoundException,
    Post,
    Render,
    UseFilters,
} from '@nestjs/common';

import { UserInfoApi } from './api/userInfo.api';
import { RestApi } from '../../core/decorator/rest-api.decorator';
import { WebExceptionFilter } from '../../core/exception/web-exception.filter';
import { BoardService } from '../board/board.service';

@UseFilters(WebExceptionFilter)
@Controller('')
export class WeddingController {
    constructor(
        private readonly userInfoService: UserInfoService,
        private readonly boardService: BoardService,
    ) {}

    @Get('/')
    @Render('/Main')
    async index() {
        const notionData: UserInfoApi[] =
            await this.userInfoService.getUserInfoList();

        return {
            aaa: 'notionData',
        };
    }

    @RestApi()
    @Post('/movieInfo')
    async movieInfo() {
        const notionData: UserInfoApi[] =
            await this.userInfoService.getUserInfoList();

        return {
            aaa: notionData,
        };
    }

    @Get('/theaterInfo')
    @Render('/TheaterInfo')
    async theaterInfo() {
        const notionData: UserInfoApi[] =
            await this.userInfoService.getUserInfoList();

        return {
            aaa: 'notionData',
        };
    }
}
