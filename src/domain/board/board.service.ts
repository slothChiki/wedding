import { Injectable } from '@nestjs/common';
import { NotionService } from '../../common/notion/notion.service';
import {
    CreatePageParameters,
    CreatePageResponse,
    GetPageResponse,
    QueryDatabaseResponse,
} from '@notionhq/client/build/src/api-endpoints';
import { PropertiesType } from '../../enums/notion.enum';
import { BoardListApi } from './api/board-list.api';
import * as moment from 'moment';
import { WebException } from '../../core/exception/web-exception';
import { ErrorCode } from '../../core/exception/errorCode';
import { CONFIG } from '../../config';

@Injectable()
export class BoardService {
    constructor(private readonly notionService: NotionService) {}

    async getBoardList(): Promise<BoardListApi[]> {
        const notionData: QueryDatabaseResponse =
            await this.notionService.getDBDataList(CONFIG.boardDB);
        const result: Record<string, any>[] = notionData.results;
        const boardList: BoardListApi[] = [];
        if (!result) {
            return boardList;
        }
        for (const entity of result) {
            const properties = entity.properties;
            boardList.push({
                idx: entity.id,
                name: await this.notionService.getPropertiesValue(
                    properties['name'],
                    PropertiesType.TITLE,
                ),
                contents: await this.notionService.getPropertiesValue(
                    properties['contents'],
                    PropertiesType.RICH_TEXT,
                ),
                tel: await this.notionService.getPropertiesValue(
                    properties['tel'],
                    PropertiesType.RICH_TEXT,
                ),
                regDate: new Date(
                    await this.notionService.getPropertiesValue(
                        properties['regDate'],
                        PropertiesType.DATE,
                    ),
                ),
            } as BoardListApi);
        }
        return boardList;
    }

    async putBoardPage(data: BoardListApi): Promise<CreatePageResponse> {
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
        if (!data.contents) {
            throw new WebException(
                ErrorCode.BOARD_CONTENTS_NULL,
                `[putBoardPage] contents null`,
            );
        }
        // TODO - 값 없을 때 에러 내줘서 프론트 처리해주기
        const inputData: CreatePageParameters = {
            parent: {
                database_id: CONFIG.boardDB,
                type: 'database_id',
            },
            properties: {
                name: {
                    title: [{ text: { content: data.name } }],
                    type: 'title',
                },
                contents: {
                    rich_text: [{ text: { content: data.contents } }],
                    type: 'rich_text',
                },
                tel: {
                    rich_text: [{ text: { content: data.tel } }],
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

        return await this.notionService.setPageData(CONFIG.boardDB, inputData);
    }

    async updateBoardPage(data: BoardListApi) {
        return await this.notionService.updatePage(CONFIG.boardDB, {});
    }

    async delBoardPage(id: string): Promise<GetPageResponse> {
        return await this.notionService.delPage(CONFIG.boardDB);
    }
}
