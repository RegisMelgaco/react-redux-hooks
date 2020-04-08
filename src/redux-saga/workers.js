import { call, put } from 'redux-saga/effects'
import { articlesFetchSucceeded, articlesFetchFailed } from '../redux/actions/actions'
import { requestArticles } from '../network/Api'


export function* apiWorker() {
    try {
        const payload = yield call(requestArticles);
        yield put(articlesFetchSucceeded(payload));
    } catch (e) {
        yield put(articlesFetchFailed(e));
    }
}
