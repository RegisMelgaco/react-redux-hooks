import { ARTICLE_CREATE, ARTICLE_TITLE_INVALID } from '../../consts'


export const newArticlesMiddleware = store => next => action => {
    if (action.type === ARTICLE_CREATE) {
        const titles = store.getState().articles.map(article => article.title)

        for (const i in titles) {
            const title = titles[i]
            
            if (action.payload.title === title) {
                return store.dispatch({ type: ARTICLE_TITLE_INVALID })
            }
        }
    }
    
    return next(action)
}