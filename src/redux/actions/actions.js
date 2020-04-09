import { ARTICLES_FETCH_REQUESTED, ARTICLE_CREATE, ARTICLES_FETCH_SUCCEEDED, ARTICLES_FETCH_FAILED } from "../../consts";


export function requestArticlesFromApi() {
    return { type: ARTICLES_FETCH_REQUESTED }
}

export function createArticle(payload) {
    return { type: ARTICLE_CREATE, payload }
}

export function succeedFetchArticles(articles = []) {
    return {
        type: ARTICLES_FETCH_SUCCEEDED,
        payload: { articles }
    }
}

export function faillFetchArticles(error) {
    return {
        type: ARTICLES_FETCH_FAILED,
        payload: {error}
    }
}
