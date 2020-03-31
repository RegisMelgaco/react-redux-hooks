import { takeEvery } from 'redux-saga/effects'
import { ARTICLE_FETCH_REQUESTED } from '../consts'
import { apiWorker } from './workers'


export function* apiWatcher() {
    yield takeEvery(ARTICLE_FETCH_REQUESTED, apiWorker)
}