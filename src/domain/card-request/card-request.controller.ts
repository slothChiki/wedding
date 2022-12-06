import { Body, Controller, Post } from '@nestjs/common';
import { RestApi } from '../../core/decorator/rest-api.decorator';
import { CardRequestService } from './card-request.service';
import { CardRequestApi } from './api/card-request.api';

@Controller('card')
export class CardRequestController {
    constructor(private readonly cardService: CardRequestService) {}

    @RestApi()
    @Post('/putRequest')
    async putRequest(@Body() body: CardRequestApi) {
        console.log('putRequest');
        return await this.cardService.putCardRequest(body);
    }
}
