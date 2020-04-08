import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from '../reducers/reducer'
import { apiWatcher } from '../../redux-saga/watchers'
import { newArticlesMiddleware } from '../middlewares/middlewares'


const defaultInitialState = { articles: []}

const sagaMiddleware = createSagaMiddleware()

function initStore(initialState = defaultInitialState) {
    const store = createStore(
        reducer,
        initialState,
        applyMiddleware(
            sagaMiddleware, newArticlesMiddleware
        )
    )
    sagaMiddleware.run(apiWatcher)

    return store
}

export default initStore