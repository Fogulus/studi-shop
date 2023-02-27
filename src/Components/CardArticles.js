import React from 'react'

const CardArticles = (props) => {
  
  return (
    <div>
      <h1>Pizza {props.name}</h1>
      <h2>Prix : {props.price ?props.price :25}€</h2>
    </div>
  )
}

export default CardArticles