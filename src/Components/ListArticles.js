import React from 'react'
import CardArticles from './CardArticles'

const ListArticles = (props) => {
  if (!props) {return <div>Pas d'article</div>}
  else {
    const ArticlesListing = props.articles.map((article) => {
    if (article.price) return <CardArticles name={article.name} price={article.price} />
    else return null
  })
  console.log(ArticlesListing)
  return (
    <div>
      {ArticlesListing}
    </div>
  )
}
}

export default ListArticles