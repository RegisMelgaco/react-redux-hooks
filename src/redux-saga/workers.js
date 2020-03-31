import { call, put } from 'redux-saga/effects'
import { ARTICLE_FETCH_SUCCEEDED, ARTICLE_FETCH_FAILED } from '../consts'
import { requestArticles } from '../network/Api'


export function* apiWorker() {
    try {
        const payload = yield call(requestArticles)
        yield put({type: ARTICLE_FETCH_SUCCEEDED, payload})
    } catch (e) {
        yield put({type: ARTICLE_FETCH_FAILED, payload: e})
    }
}