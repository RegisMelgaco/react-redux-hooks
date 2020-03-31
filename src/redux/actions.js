import { ARTICLE_FETCH_REQUESTED, ARTICLE_CREATE } from "../consts";


export function requestArticlesFromApi() {
    return { type: ARTICLE_FETCH_REQUESTED }
}

export function createArticle(payload) {
    return { type: ARTICLE_CREATE, payload }
}
