import { ARTICLE_FETCH_SUCCEEDED, ARTICLE_FETCH_REQUESTED, ARTICLE_CREATE } from './../consts'


function reducer(state, action) {
    switch (action.type) {
        case ARTICLE_CREATE:
            const lastArticle = state.articles[state.articles.length-1]
            const newArticleId = lastArticle.id + 1
            const article = Object.assign({}, action.payload, {
                id: newArticleId
            })

            return Object.assign({}, state, {
                articles: state.articles.concat([ article ])
            })
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