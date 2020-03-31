import { ARTICLE_FETCH_REQUESTED } from "../consts";


export function requestArticlesFromApi() {
    return { type: ARTICLE_FETCH_REQUESTED }
}