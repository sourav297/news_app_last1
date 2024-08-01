import React from 'react'

const NewsCard = ({result}) => {
  console.log(result.url);
  return (
    <div className="card">
      <img src={result.urlToImage} alt={result.title} />
      <h3>{result.title}</h3>
        <p>{result.author} ({result.source.name})</p>
        <a href={result.url}>Read more</a>
    </div>
  )
}

export default NewsCard
