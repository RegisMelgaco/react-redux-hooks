import React from 'react'
import ArticlesList from './components/ArticlesList'
import NewArticleForm from './components/NewArticleForm'


function Home() {
  return (
    <div className="App">
      <h1>Articles</h1>

      <NewArticleForm/>

      <ArticlesList/>
    </div>
  );
}

export default Home
