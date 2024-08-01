export interface RequestInfoDto {
    method: string;
    url: string;
    ip: string;
    agent: string;
    req: any;
    res: any;
    time: number;
}
