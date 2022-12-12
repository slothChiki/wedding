import { Client } from '@notionhq/client';
import {
    CreatePageParameters,
    CreatePageResponse,
    GetPageResponse,
    QueryDatabaseResponse,
    UpdatePageResponse,
} from '@notionhq/client/build/src/api-endpoints';
import { Injectable } from '@nestjs/common';
import { PropertiesType } from '../../enums/notion.enum';
import { WebException } from '../../core/exception/web-exception';
import { ErrorCode } from '../../core/exception/errorCode';
import { CONFIG } from '../../config';

@Injectable()
export class NotionService {
    notion = new Client({ auth: CONFIG.Notionkey });

    async getDBDataList(dataBaseKey: string): Promise<QueryDatabaseResponse> {
        if (!dataBaseKey) {
            throw new WebException(
                ErrorCode.NOTION_DB_ID_NULL,
                `[getPageData] dataBaseKey null.`,
            );
        }
        const res = await this.notion.databases.query({
            database_id: dataBaseKey,
            sorts: [{ timestamp: 'created_time', direction: 'descending' }],
        });

        return res;
    }

    // async getDBData(
    //     dataBaseKey: string,
    //     filterList: Array<QueryDatabaseParameters>,
    // ): Promise<QueryDatabaseResponse> {
    //     if (!dataBaseKey) {
    //         throw new NotFoundException();
    //     }
    //
    //     const res = await this.notion.databases.query({
    //         ...filterList,
    //         database_id: dataBaseKey,
    //     });
    //
    //     return res;
    // }

    async getPageData(dataBaseKey: string): Promise<GetPageResponse> {
        if (!dataBaseKey) {
            throw new WebException(
                ErrorCode.NOTION_DB_ID_NULL,
                `[getPageData] dataBaseKey null.`,
            );
        }
        const res = await this.notion.pages.retrieve({
            page_id: dataBaseKey,
        });

        return res;
    }

    async setPageData(
        dataBaseKey: string,
        data: CreatePageParameters,
    ): Promise<CreatePageResponse> {
        if (!data) {
            throw new WebException(
                ErrorCode.NOTION_INPUT_DATA_NULL,
                `[setPageData] page input data null.`,
            );
        }

        return await this.notion.pages.create(data);
    }

    async getPropertiesValue(
        data: Record<string, any>,
        type: PropertiesType,
    ): Promise<string> {
        switch (type) {
            case PropertiesType.TITLE:
                return data['title'][0]['plain_text'];
            case PropertiesType.RICH_TEXT:
                return data['rich_text'][0]['plain_text'];
            case PropertiesType.DATE:
                return data['date']['start'];
            default:
                return '';
        }
    }

    async updatePage(
        pageId: string,
        data: Record<string, any>,
    ): Promise<UpdatePageResponse> {
        return await this.notion.pages.update({
            page_id: pageId,
            properties: {
                ...data,
            },
        });
    }

    async delPage(pageId: string): Promise<GetPageResponse> {
        return await this.notion.pages.retrieve({ page_id: pageId });
    }
}
