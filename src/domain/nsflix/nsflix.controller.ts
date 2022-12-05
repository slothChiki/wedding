import { Controller, Get, Render, UseFilters } from '@nestjs/common';
import { MainManu } from '../../enums/wedding.enum';
import { WebExceptionFilter } from '../../core/exception/web-exception.filter';

@UseFilters(WebExceptionFilter)
@Controller()
export class NsflixController {
    constructor() {}
    @Get('/')
    @Render('nsFlix/Main')
    async index() {
        return {
            headerMenu: MainManu.MOVIE_INFO,
        };
    }
}
