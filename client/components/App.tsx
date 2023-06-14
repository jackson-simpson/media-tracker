//======================Imports=======================
// React
import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'

// Redux
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { getAllBooks } from '../actions/books'

// Models
import { Book } from '../../models/books'

// Components
// import Home from './Home'
// import Books from './Books'

function App() {
  const dispatch = useAppDispatch()
  const books = useAppSelector((state) => state.books as Book[])

  useEffect(() => {
    dispatch(getAllBooks())
  }, [dispatch])

  return (
    <>
      <header className="header">
        <h1>My Collection</h1>
      </header>
      <section>
        <ul>
          {books.map((book) => {
            return <li key={book.id}>{book.title}</li>
          })}
        </ul>
      </section>
    </>
  )
}
export default App
