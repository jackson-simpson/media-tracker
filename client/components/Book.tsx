import { useAppSelector } from '../hooks/hooks'
import { Link } from 'react-router-dom'
import { Book } from '../../models/books'
import { useParams } from 'react-router-dom'

function Books() {
  const books = useAppSelector((state) => state.books as Book[])
  const book = books.map(())

  return (
    <>
      <header>
        <h3>{books.title}</h3>
      </header>
    </>
  )
}

export default Books