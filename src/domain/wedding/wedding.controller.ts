import { UserInfoService } from './userInfo.service';
import { Controller, Get, Render } from '@nestjs/common';

import { UserInfoApi } from './api/userInfo.api';

@Controller('')
export class WeddingController {
    constructor(private readonly userInfoService: UserInfoService) {}

    @Get('/')
    @Render('card/Card01')
    async index() {
        const notionData: UserInfoApi[] =
            await this.userInfoService.getUserInfoList();

        return {
            aaa: 'notionData',
        };
    }

    @Get('/user')
    @Render('card/Card01')
    async getUser() {
        const notionData: UserInfoApi[] =
            await this.userInfoService.getUserInfoList();

        return {
            aaa: 'notionData',
        };
    }
}
