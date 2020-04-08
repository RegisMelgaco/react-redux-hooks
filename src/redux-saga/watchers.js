import { takeEvery } from 'redux-saga/effects'
import { ARTICLES_FETCH_REQUESTED } from '../consts'
import { apiWorker } from './workers'


export function* apiWatcher() {
    yield takeEvery(ARTICLES_FETCH_REQUESTED, apiWorker)
}