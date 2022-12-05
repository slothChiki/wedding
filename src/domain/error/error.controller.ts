import {
    Controller,
    Get,
    Query,
    Render,
    Request,
    Session,
    UseGuards,
} from '@nestjs/common';

@Controller('/error')
export class ErrorController {
    @Get('500')
    @Render('error/500')
    async error500(@Request() req, @Query() qry) {
        return {
            code: qry.code ? qry.code : '0000',
        };
    }

    @Get('404')
    @Render('error/404')
    async error404(@Request() req, @Query() qry) {
        return {
            code: qry.code ? qry.code : '0000',
        };
    }
}
