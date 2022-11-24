import { put, call } from 'redux-saga/effects';
import { requestGET, requestPOST } from '../request';
import { ErrorCode } from '../../src/core/exception/errorCode';

export function* loadSaga(action) {
    try {
        let response;
        if (action.method === 'GET') response = yield call(requestGET, action);
        else if (action.method === 'POST')
            response = yield call(requestPOST, action);

        if (response.data.code == ErrorCode.SUCCESS) {
            yield put({
                type: action.type + '_SUCCESS',
                param: response.data,
            });
        } else {
            yield put({
                type: action.type + '_FAILURE',
                param: response.data,
            });
        }
    } catch (err) {
        yield put({
            type: action.type + '_FAILURE',
            param: { code: ErrorCode.INTERNAL_ERROR },
        });
    }
}
