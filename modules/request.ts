import axios from 'axios';

const url = '/';

export function requestGET(payload) {
    return axios.get(url + payload.type, payload.param);
}
export function requestPOST(payload) {
    return axios.post(url + payload.type, payload.param, payload.config);
}
