import { Injectable } from '@nestjs/common';
import {
    CreatePageParameters,
    CreatePageResponse,
    GetPageResponse,
    QueryDatabaseResponse,
} from '@notionhq/client/build/src/api-endpoints';
import { UserInfoApi } from './api/userInfo.api';
import { NotionService } from '../../common/notion/notion.service';
import { PropertiesType } from '../../enums/notion.enum';
import * as moment from 'moment';
import 'moment/locale/ko';
import { CONFIG } from '../../config';

moment.locale('ko');

@Injectable()
export class UserInfoService {
    constructor(private readonly notionService: NotionService) {}

    async getUserInfoList(): Promise<UserInfoApi[]> {
        const notionData: QueryDatabaseResponse =
            await this.notionService.getDBDataList(CONFIG.userInfoDb);
        const result: Record<string, any>[] = notionData.results;
        const userList: UserInfoApi[] = [];
        for (const entity of result) {
            const properties = entity.properties;
            userList.push({
                idx: entity.id,
                name: await this.notionService.getPropertiesValue(
                    properties['name'],
                    PropertiesType.TITLE,
                ),
                tel: await this.notionService.getPropertiesValue(
                    properties['tel'],
                    PropertiesType.RICH_TEXT,
                ),
                contactDate: new Date(
                    await this.notionService.getPropertiesValue(
                        properties['contactDate'],
                        PropertiesType.DATE,
                    ),
                ),
            } as UserInfoApi);
        }

        return userList;
    }

    async getUserInfoMap(): Promise<Map<string, UserInfoApi>> {
        const notionData: QueryDatabaseResponse =
            await this.notionService.getDBDataList(CONFIG.userInfoDb);
        const result: Record<string, any>[] = notionData.results;
        const userMap = new Map<string, UserInfoApi>();
        for (const entity of result) {
            const properties = entity.properties;
            const keys = Object.keys(properties);

            //Reflection 쓰고싶다....ㅜㅜㅜㅜ

            userMap.set(
                await this.notionService.getPropertiesValue(
                    properties['name'],
                    PropertiesType.TITLE,
                ),
                {
                    idx: entity.id,
                    name: await this.notionService.getPropertiesValue(
                        properties['name'],
                        PropertiesType.TITLE,
                    ),
                    tel: await this.notionService.getPropertiesValue(
                        properties['tel'],
                        PropertiesType.RICH_TEXT,
                    ),
                    contactDate: new Date(
                        await this.notionService.getPropertiesValue(
                            properties['contactDate'],
                            PropertiesType.DATE,
                        ),
                    ),
                } as UserInfoApi,
            );
        }

        return userMap;
    }

    async findUserOneFromList(
        name: string,
        tel: string,
    ): Promise<UserInfoApi | null> {
        const userList: UserInfoApi[] = await this.getUserInfoList();

        const findOne = userList.find((v, i) => v.name == name || v.tel == tel);

        if (!findOne) {
            return null;
        }
        return findOne;
    }

    async findUserOneFromMap(
        name: string,
        tel: string,
    ): Promise<UserInfoApi | null> {
        const userMap: Map<string, UserInfoApi> = await this.getUserInfoMap();

        const findOne = userMap.get('name');

        if (!findOne) {
            return null;
        }
        return findOne;
    }

    async putUserInfoPage(data: UserInfoApi): Promise<CreatePageResponse> {
        const inputData: CreatePageParameters = {
            parent: {
                database_id: CONFIG.userInfoDb,
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
                contactDate: {
                    date: {
                        start: moment.default().format('YYYY-MM-DD HH:mm:ss'),
                        time_zone: 'Asia/Seoul',
                    },
                },
            },
        };

        return await this.notionService.setPageData(
            CONFIG.userInfoDb,
            inputData,
        );
    }

    async delUserPage(id: string): Promise<GetPageResponse> {
        return await this.notionService.delPage(CONFIG.userInfoDb);
    }
}
