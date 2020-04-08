import { ARTICLES_FETCH_SUCCEEDED, ARTICLES_FETCH_REQUESTED, ARTICLE_CREATE, ARTICLES_FETCH_FAILED } from '../../consts'


function reducer(state, action) {
    switch (action.type) {
        case ARTICLE_CREATE:
            const lastArticle = state.articles[state.articles.length-1]
            const newArticleId = lastArticle !== undefined ? lastArticle.id+1 : 1
            const article = Object.assign({}, action.payload, {
                id: newArticleId
            })

            return Object.assign({}, state, {
                articles: state.articles.concat([ article ])
            })
        case ARTICLES_FETCH_REQUESTED:
            return Object.assign({}, state, {
                areArticlesLoading: true
            })
        case ARTICLES_FETCH_FAILED:
            return Object.assign({}, state, {
                areArticlesLoading: false
            })
        case ARTICLES_FETCH_SUCCEEDED:
            return Object.assign({}, state, {
                articles: state.articles.concat(action.payload),
                areArticlesLoading: false
            })
        default:
            return state
    }
}

export default reducer