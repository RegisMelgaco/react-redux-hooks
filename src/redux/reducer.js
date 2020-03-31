import { ARTICLE_FETCH_SUCCEEDED, ARTICLE_FETCH_REQUESTED } from './../consts'


function reducer(state, action) {
    switch (action.type) {
        case ARTICLE_FETCH_REQUESTED:
            return Object.assign({}, state, {
                areArticlesLoading: true
            })
        case ARTICLE_FETCH_SUCCEEDED:
            return Object.assign({}, state, {
                articles: state.articles.concat(action.payload),
                areArticlesLoading: false
            })
        default:
            return state
    }
}

export default reducer