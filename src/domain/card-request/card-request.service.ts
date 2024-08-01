import { Injectable } from '@nestjs/common';
import { NotionService } from '../../common/notion/notion.service';
import {
    CreatePageParameters,
    CreatePageResponse,
} from '@notionhq/client/build/src/api-endpoints';
import * as moment from 'moment';
import { WebException } from '../../core/exception/web-exception';
import { ErrorCode } from '../../core/exception/errorCode';
import { CONFIG } from '../../config';
import { CardRequestApi } from './api/card-request.api';

@Injectable()
export class CardRequestService {
    constructor(private readonly notionService: NotionService) {}
    async putCardRequest(data: CardRequestApi): Promise<CreatePageResponse> {
        if (!data.name) {
            throw new WebException(
                ErrorCode.BOARD_NAME_NULL,
                `[putBoardPage] name null`,
            );
        }
        if (!data.tel) {
            throw new WebException(
                ErrorCode.BOARD_TEL_NULL,
                `[putBoardPage] tel null`,
            );
        }
        if (!data.address1 || !data.address2) {
            throw new WebException(
                ErrorCode.BOARD_CONTENTS_NULL,
                `[putBoardPage] address null`,
            );
        }

        // TODO - 값 없을 때 에러 내줘서 프론트 처리해주기
        const inputData: CreatePageParameters = {
            parent: {
                database_id: CONFIG.cardDB,
                type: 'database_id',
            },
            properties: {
                name: {
                    title: [{ text: { content: data.name } }],
                    type: 'title',
                },
                tel: {
                    rich_text: [{ text: { content: data.tel } }],
                    type: 'rich_text',
                },
                address1: {
                    rich_text: [{ text: { content: data.address1 } }],
                    type: 'rich_text',
                },
                address2: {
                    rich_text: [{ text: { content: data.address2 } }],
                    type: 'rich_text',
                },
                postNum: {
                    rich_text: [{ text: { content: data.postNum } }],
                    type: 'rich_text',
                },
                regDate: {
                    date: {
                        start: moment.default().format('YYYY-MM-DD HH:mm:ss'),
                        time_zone: 'Asia/Seoul',
                    },
                },
            },
        };

        return await this.notionService.setPageData(CONFIG.cardDB, inputData);
    }
}
