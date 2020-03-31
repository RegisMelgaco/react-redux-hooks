import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer'
import { apiWatcher } from '../redux-saga/watchers'
import { newArticlesMiddleware } from './middlewares'


const initialState = { articles: []}
// const testState = Object.assign({}, initialState, {
//     articles: [{
//         "userId": 1,
//         "id": 1,
//         "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//         "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//       }]
// })

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    reducer,
    initialState,
    applyMiddleware(
        sagaMiddleware, newArticlesMiddleware
    )
)

sagaMiddleware.run(apiWatcher)

export default store