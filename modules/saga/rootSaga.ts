import { takeEvery } from 'redux-saga/effects';
import { loadSaga } from './loadSaga';

function* rootSaga() {
    //api url

    //login
    yield takeEvery('common/saveLogin', loadSaga);

    //header
    yield takeEvery('common/getCollectionInfo', loadSaga);
    yield takeEvery('common/setLang', loadSaga);
    yield takeEvery('common/setRedirectUrl', loadSaga);
    yield takeEvery('common/logout', loadSaga);
    yield takeEvery('common/setLightMode', loadSaga);
    yield takeEvery('common/toggleLightMode', loadSaga);

    //main
    yield takeEvery('main/getListByCollection', loadSaga);

    //store
    yield takeEvery('store/collection', loadSaga);
    yield takeEvery('store/productsSort', loadSaga);

    //market
    yield takeEvery('marketplace/productsSort', loadSaga);

    //myCollection
    yield takeEvery('myCollection/productsList', loadSaga);
    yield takeEvery('myCollection/sellProducts', loadSaga);
    yield takeEvery('myCollection/myProductsSorting', loadSaga);
    yield takeEvery('myCollection/sellProductsSorting', loadSaga);
    yield takeEvery('myCollection/userLike', loadSaga);
    yield takeEvery('myCollection/purchaseRetry', loadSaga);
    yield takeEvery('myCollection/cancelSendNft', loadSaga);
    yield takeEvery('myCollection/deleteBuyNft', loadSaga);
    yield takeEvery('myCollection/nftBuyRetry', loadSaga);

    //myCollection detail
    yield takeEvery('myCollectionDetail/cancelSelling', loadSaga);
    yield takeEvery('myCollectionDetail/registerSell', loadSaga);
    yield takeEvery('myCollectionDetail/reqSendNft', loadSaga);
    yield takeEvery('myCollectionDetail/descriptionInfo', loadSaga);
    yield takeEvery('myCollectionDetail/moreLatestHistory', loadSaga);
    yield takeEvery('myCollectionDetail/userBalance', loadSaga);

    //coupon
    yield takeEvery('coupon/register', loadSaga);

    //detail
    yield takeEvery('detail/nftTransfer', loadSaga);
    yield takeEvery('detail/sellPurchaseAPI', loadSaga);
    yield takeEvery('detail/billingSessionCheck', loadSaga);
    yield takeEvery('detail/startBilling', loadSaga);
    yield takeEvery('detail/billingCheck', loadSaga);

    //account info
    yield takeEvery('info/setWalletName', loadSaga);

    //account profile
    yield takeEvery('profile/checkValid', loadSaga);
    yield takeEvery('profile/setProfile', loadSaga);

    //account history
    yield takeEvery('history/getNftList', loadSaga);
    yield takeEvery('history/getTransList', loadSaga);
    yield takeEvery('history/getWalletList', loadSaga);

    //account inventory
    yield takeEvery('inventory/getNftList', loadSaga);

    //account wallet
    yield takeEvery('wallet/coinExchangeRate', loadSaga);
    yield takeEvery('wallet/withdrawCoin', loadSaga);

    //search
    yield takeEvery('search/store', loadSaga);
    yield takeEvery('search/marketplace', loadSaga);
    yield takeEvery('search/collector', loadSaga);

    //notice
    yield takeEvery('notice/getNotice', loadSaga);
    yield takeEvery('faq/getFaq', loadSaga);
    yield takeEvery('notice/noticeDetail', loadSaga);

    //migration
    yield takeEvery('api/migration/send-verification-email', loadSaga);
    yield takeEvery('api/migration/verify-email', loadSaga);
    yield takeEvery('api/migration/get-user-migration-list', loadSaga);
    yield takeEvery('api/migration/set-migration', loadSaga);
    yield takeEvery('api/migration/set-mnemonic-checked', loadSaga);
    yield takeEvery('api/migration/verify-wallet', loadSaga);
}

export default rootSaga;
