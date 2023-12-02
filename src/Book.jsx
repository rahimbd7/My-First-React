import React from 'react'

const Book = ({book:{name,price}}) => {
  return (
    <div>
      <h2>Book Name:{name} </h2>
      <h4>Book Price: {price} </h4>
    </div>
  )
}

export default Book
