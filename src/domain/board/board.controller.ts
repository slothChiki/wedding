import { Body, Controller, Get, Post } from '@nestjs/common';
import { RestApi } from '../../core/decorator/rest-api.decorator';
import { UserInfoApi } from '../wedding/api/userInfo.api';
import { BoardService } from './board.service';
import { BoardListApi } from './api/board-list.api';
import { GetPageResponse } from '@notionhq/client/build/src/api-endpoints';

@Controller('')
export class BoardController {
    constructor(private readonly boardService: BoardService) {}

    @RestApi()
    @Post('/putBoard')
    async putBoard(@Body() body: BoardListApi) {
        return await this.boardService.putBoardPage(body);
    }

    @RestApi()
    @Get('/getBoard')
    async getBoard(): Promise<BoardListApi[]> {
        return await this.boardService.getBoardList();
    }

    @RestApi()
    @Post('/delBoard')
    async delBoard(@Body() body: { id: string }): Promise<GetPageResponse> {
        console.log(body.id);
        return await this.boardService.delBoardPage(body.id);
    }
}
