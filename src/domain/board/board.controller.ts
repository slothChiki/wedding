import { Body, Controller, Post } from '@nestjs/common';
import { RestApi } from '../../core/decorator/rest-api.decorator';
import { BoardService } from './board.service';
import { BoardListApi } from './api/board-list.api';
import { GetPageResponse } from '@notionhq/client/build/src/api-endpoints';

@Controller('board')
export class BoardController {
    constructor(private readonly boardService: BoardService) {}

    @RestApi()
    @Post('/putBoard')
    async putBoard(@Body() body: BoardListApi) {
        console.log('putBoard');
        return await this.boardService.putBoardPage(body);
    }

    @RestApi()
    @Post('/getBoard')
    async getBoard(): Promise<BoardListApi[]> {
        return await this.boardService.getBoardList();
    }

    // @RestApi()
    // @Post('/getBoardOne')
    // async getBoardOne(): Promise<BoardListApi> {
    //     return await this.boardService.getBoardList();
    // }

    @RestApi()
    @Post('/delBoard')
    async delBoard(@Body() body: { id: string }): Promise<GetPageResponse> {
        console.log(body.id);
        return await this.boardService.delBoardPage(body.id);
    }
}
