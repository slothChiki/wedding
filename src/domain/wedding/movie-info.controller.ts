import { Controller, Get, Render, Request, Response } from '@nestjs/common';
import { UserInfoService } from './userInfo.service';
import { BoardService } from '../board/board.service';
import { UserInfoApi } from './api/userInfo.api';
import { BoardViewDto } from '../board/api/board-view.dto';
import { BoardListApi } from '../board/api/board-list.api';

@Controller('movie-info')
export class MovieInfoController {
    constructor(
        private readonly userInfoService: UserInfoService,
        private readonly boardService: BoardService,
    ) {}

    @Get('')
    async movieInfo(@Request() req, @Response() res) {
        res.redirect('/');
        return;
    }
    @Get('/cast')
    @Render('movie-info/Cast')
    async cast(@Request() req, @Response() res) {
        return;
    }
    @Get('/album')
    @Render('movie-info/Album')
    async album(@Request() req, @Response() res) {
        return;
    }
    @Get('/booking')
    @Render('movie-info/Booking')
    async booking(@Request() req, @Response() res) {
        return;
    }
    @Get('/review')
    @Render('movie-info/Review')
    async review(@Request() req, @Response() res): Promise<BoardViewDto> {
        const boardList: BoardListApi[] =
            await this.boardService.getBoardList();

        return {
            boardList: JSON.parse(JSON.stringify(boardList)),
        };
    }
}
