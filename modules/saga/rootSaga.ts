import { takeEvery } from 'redux-saga/effects';
import { loadSaga } from './loadSaga';

function* rootSaga() {
    //api url

    yield takeEvery('board/getBoard', loadSaga);
    yield takeEvery('board/putBoard', loadSaga);
}

export default rootSaga;
