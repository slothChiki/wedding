export interface AccessLogDto {
    date: string;
    method: string;
    url: string;
    ip: string;
    agent: string;
    req: any;
    res: any;
    time: number;
}
