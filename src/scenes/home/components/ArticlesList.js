import React from 'react'
import { useSelector, useDispatch } from'react-redux'
import { requestArticlesFromApi } from '../../../redux/actions'


function ArticlesList(props) {
    const articles = useSelector(state => state.articles)
    const isLoading = useSelector(state => state.areArticlesLoading)
    const dispatch = useDispatch()

    if (isLoading == null) {
        dispatch(requestArticlesFromApi())
    }

    return (
        <ul>
            {articles.map(genArticleLi)}
        </ul>
    )
}

const genArticleLi = (article) => (
    <li key={article.id}>
        {article.title}
    </li>
)

export default ArticlesList
