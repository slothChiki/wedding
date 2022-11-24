import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { RestApi } from '../../core/decorator/rest-api.decorator';
import { UserInfoApi } from '../wedding/api/userInfo.api';
import { BoardService } from './board.service';
import { BoardListApi } from './api/board-list.api';
import { GetPageResponse } from '@notionhq/client/build/src/api-endpoints';
import { BoardViewDto } from './api/board-view.dto';

@Controller('board')
export class BoardController {
    constructor(private readonly boardService: BoardService) {}

    @Get('')
    @Render('/Board')
    async Board(): Promise<BoardViewDto> {
        const boardList: BoardListApi[] =
            await this.boardService.getBoardList();

        return {
            boardList: JSON.parse(JSON.stringify(boardList)),
        };
    }

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

    @RestApi()
    @Post('/delBoard')
    async delBoard(@Body() body: { id: string }): Promise<GetPageResponse> {
        console.log(body.id);
        return await this.boardService.delBoardPage(body.id);
    }
}
