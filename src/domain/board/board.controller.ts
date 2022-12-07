import { Body, Controller, Post } from '@nestjs/common';
import { RestApi } from '../../core/decorator/rest-api.decorator';
import { BoardService } from './board.service';
import { BoardListApi } from './api/board-list.api';
import { GetPageResponse } from '@notionhq/client/build/src/api-endpoints';
import { BoardPageDto } from './api/board-page.dto';

@Controller('board')
export class BoardController {
    constructor(private readonly boardService: BoardService) {}

    @RestApi()
    @Post('/putBoard')
    async putBoard(@Body() body: BoardListApi) {
        return await this.boardService.putBoardPage(body);
    }

    @RestApi()
    @Post('/getBoard')
    async getBoard(): Promise<BoardPageDto> {
        const boardList = await this.boardService.getBoardList();
        const limit = 5;
        const pageNum = Math.ceil(boardList.length / limit);
        let paging = new Array<number>(pageNum);
        const pageList = new Array<BoardListApi[]>(pageNum);

        for (let i = 1; i <= pageNum; i++) {
            paging[i - 1] = i;
            if (i == 1) {
                pageList[i - 1] = boardList.slice(i - 1, limit);
            } else {
                pageList[i - 1] = boardList.slice(limit * (i - 1), i * limit);
            }
        }

        return { lists: pageList, boardPage: paging } as BoardPageDto;
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
