import axios, { AxiosRequestConfig } from 'axios';

const url = '/';

export function requestGET(payload: {
    type: string;
    param: AxiosRequestConfig<any> | undefined;
}) {
    return axios.get(url + payload.type, payload.param);
}
export function requestPOST(payload: {
    type: string;
    param: any;
    config: AxiosRequestConfig<any> | undefined;
}) {
    return axios.post(url + payload.type, payload.param, payload.config);
}
