import { Injectable } from "@nestjs/common";
import { CreatePageParameters, PageObjectResponse, PartialPageObjectResponse, QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";
import { json } from "stream/consumers";
import { UserInfoApi } from "./api/userInfo.api";
import { NotionService } from "../../common/notion/notion.service";
import * as notionKey from "../../common/notion/notionKey"
import { PropertiesType } from "src/common/notion/enums/notion.enum";

@Injectable()
export class UserInfoService {
    constructor(private readonly notionService: NotionService){}

    async getUserInfoList():Promise<UserInfoApi[]> {       
        const notionData:QueryDatabaseResponse = await this.notionService.getDBDataList(notionKey.userInfoDb);
        const result :Record<string,any>[] = notionData.results;
        const userList : UserInfoApi[] = [];
        for(const entity of result){
            const properties = entity.properties;
            userList.push(
                {
                    idx: entity.id,
                    name:properties["name"]["DATE"][0]["plain_text"],
                    tel:  properties["tel"]["rich_text"][0]["plain_text"],
                    contactDate:properties["contactDate"]["date"]["start"],
                }
            );
        }
       
        return userList;
    }

    async getUserInfoMap():Promise<Map<string, UserInfoApi>> {       
        const notionData:QueryDatabaseResponse = await this.notionService.getDBDataList(notionKey.userInfoDb);
        const result :Record<string,any>[] = notionData.results;
        const userMap = new Map<string, UserInfoApi>();
        for(const entity of result){
            const properties = entity.properties;
            const keys = Object.keys(properties);
            
            //Reflection 쓰고싶다....ㅜㅜㅜㅜ

            userMap.set(await this.notionService.getPropertiesValue(properties["name"], PropertiesType.TITLE),
                {
                    idx: entity.id,
                    name: await this.notionService.getPropertiesValue(properties["name"], PropertiesType.TITLE),
                    tel:  await this.notionService.getPropertiesValue(properties["tel"], PropertiesType.RICH_TEXT),
                    contactDate: new Date(await this.notionService.getPropertiesValue(properties["contactDate"], PropertiesType.DATE)),
                }as UserInfoApi
            );
        }
       
        return userMap;
    }

    async findUserOneFromList(name:string, tel:string):Promise<UserInfoApi|null>{
        const userList: UserInfoApi[] = await this.getUserInfoList();

        const findOne = userList.find((v, i)=> v.name == name || v.tel == tel);

        if(!findOne){
            return null;
        }
        return findOne;

    }

    async findUserOneFromMap(name:string, tel:string):Promise<UserInfoApi|null>{
        const userMap: Map<string, UserInfoApi> = await this.getUserInfoMap();

        let user = new UserInfoApi();

        const findOne = userMap.get("name");

        if(!findOne){
            return null;
        }
        return findOne;

        return user;

    }

    // async putUserInfoPage (data:UserInfoApi) {
    //     const inputData:CreatePageParameters = {
    //        parent: { 
    //            database_id: '',
    //         type?: "database_id",
    //     },
    //        properties: ,


    //     };
    // }
}