import { Client } from '@notionhq/client';
import { Notionkey, userInfoDb } from './notionKey';
import {
    CreateCommentResponse,
    CreateDatabaseParameters,
    CreateDatabaseResponse,
    CreatePageResponse,
    DatabaseObjectResponse,
    PartialDatabaseObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';

export class NotionService {
    notion = new Client({ auth: Notionkey });

    async getNotionData(dataBaseKey: string) {
        const res = await this.notion.databases.query({
            database_id: dataBaseKey,
        });

        console.log(JSON.stringify(res));
    }

    async setNotionData(dataBaseKey: string, data: CreateDatabaseParameters) {
        const res: CreateDatabaseResponse = await this.notion.databases.create(
            data,
        );

        console.log(JSON.stringify(res));

        return res;
    }
}
