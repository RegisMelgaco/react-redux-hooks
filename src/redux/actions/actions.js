import { ARTICLES_FETCH_REQUESTED, ARTICLE_CREATE } from "../../consts";
import { createActions } from "redux-actions";


export function requestArticlesFromApi() {
    return { type: ARTICLES_FETCH_REQUESTED }
}

export function createArticle(payload) {
    return { type: ARTICLE_CREATE, payload }
}

export const { articlesFetchSucceeded, articlesFetchFailed } = createActions({
    ARTICLES_FETCH_SUCCEEDED: (articles = []) => ({ articles }),
    ARTICLES_FETCH_FAILED: (error) => ({error})
})
