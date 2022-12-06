/**
 * 참고
 * TypeScript에서의 환경 설정 관리
 * https://devblog.croquis.com/ko/2020-02-15-1-configuration-in-typescript/
 * 주의 : 자식 config 에서 undefined 인경우 부모쪽에 덮어쓰지 못함. null 사용 할 것.
 */
//Hive Analytics

export const APP_NAME = 'wedding_card';
const Config = {
    Notionkey: 'secret_fQoqH2YbA4BnqX1fdLsLTIsR1NvBPJ5WvPTtthF7eA2',
    userInfoDb: '72579980abd04fd6b3a326f8fadd6945',
    boardDB: 'd416183a2ca6416e9fd3d223c2cd4807',
    cardDB: '427a0ba1973449948caed9b2968e2f1a',
};
export default Config;

// from https://github.com/krzkaczor/ts-essentials
/* eslint-disable @typescript-eslint/indent */
type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends Array<infer U>
        ? Array<DeepPartial<U>>
        : // tslint:disable-next-line:no-shadowed-variable
        T[P] extends ReadonlyArray<infer U>
        ? ReadonlyArray<DeepPartial<U>>
        : DeepPartial<T[P]>;
};

export type BaseConfigType = DeepPartial<typeof Config>;
