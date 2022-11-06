import { Client } from '@notionhq/client';
import { Notionkey, userInfoDb } from './notionKey';
import {
    CreateCommentResponse,
    CreateDatabaseParameters,
    CreateDatabaseResponse,
    CreatePageParameters,
    CreatePageResponse,
    DatabaseObjectResponse,
    GetPageResponse,
    PageObjectResponse,
    PartialDatabaseObjectResponse,
    PartialPageObjectResponse,
    QueryDatabaseResponse,
} from '@notionhq/client/build/src/api-endpoints';
import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { PropertiesType } from './enums/notion.enum';

@Injectable()
export class NotionService {
    notion = new Client({ auth: Notionkey });

    async getDBDataList(dataBaseKey: string):Promise<QueryDatabaseResponse> {
        if(!dataBaseKey){
            throw new NotFoundException;
        }
        const res = await this.notion.databases.query({
            database_id: dataBaseKey,
        });

        return res;
    }

    async setDBData(dataBaseKey: string, data: CreateDatabaseParameters) {
        const res: CreateDatabaseResponse = await this.notion.databases.create(
            data,
        );

        // console.log(JSON.stringify(res));

        return res;
    }

    async getPageData (dataBaseKey: string):Promise<GetPageResponse> {
        if(!dataBaseKey){
            throw new NotFoundException;
        }
        const res = await this.notion.pages.retrieve({
            page_id: dataBaseKey,
        });

        return res;
    }

       
    async setPageData(dataBaseKey: string, data : CreatePageParameters):Promise<CreatePageResponse>{
        if(!data) {
            throw new NotFoundException;
        }

        return await this.notion.pages.create(data);
    }

    async getPropertiesValue(data:Record<string,any>,type:PropertiesType):Promise<string> {
        switch(type){
            case PropertiesType.TITLE:
                return data["title"][0]["plain_text"];
            case PropertiesType.RICH_TEXT:
                return data["rich_text"][0]["plain_text"];
            case PropertiesType.DATE:
                return data["start"];
            default:
                return '';
        }
    }
}
