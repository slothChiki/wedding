import { Controller, Get, Query, Render } from '@nestjs/common';

@Controller()
export class AppController {
    @Get('/check')
    check(): string {
        return 'ok';
    }

    @Get('/mega')
    @Render('/card/Mega')
    mega() {
        return;
    }
}
