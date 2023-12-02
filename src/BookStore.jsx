import React from 'react'
import Book from './Book'

const BookStore = ({book}) => {
    
  return (
    <div>
          {
              book.map((b) => (
                  <Book book= {b} key={b.id}></Book>
              ))
      }
    </div>
  )
}

export default BookStore
