import { UserInfoService } from './userInfo.service';
import {
    Controller,
    Get,
    Render,
    Request,
    Response,
    UseFilters,
} from '@nestjs/common';

import { UserInfoApi } from './api/userInfo.api';
import { WebExceptionFilter } from '../../core/exception/web-exception.filter';
import { BoardService } from '../board/board.service';
import { MainManu } from 'src/enums/wedding.enum';

@UseFilters(WebExceptionFilter)
@Controller('')
export class WeddingController {
    constructor(
        private readonly userInfoService: UserInfoService,
        private readonly boardService: BoardService,
    ) {}

    @Get('/')
    @Render('movie-info/Main')
    async index() {
        const notionData: UserInfoApi[] =
            await this.userInfoService.getUserInfoList();

        return {
            headerMenu: MainManu.MOVIE_INFO,
        };
    }

    @Get('/theater-info')
    @Render('theater-info/TheaterInfo')
    async theaterInfo() {
        const notionData: UserInfoApi[] =
            await this.userInfoService.getUserInfoList();

        return {
            aaa: 'notionData',
        };
    }
}
