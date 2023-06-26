import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { useNavigate, useParams } from 'react-router-dom'
import { FormEvent, useState, ChangeEvent, useEffect } from 'react'
import { Book, UpdateBookData } from '../../models/books'
import * as actions from '../actions/books'

function EditBook() {
  //===================== CONFIG ===================
  const books: Book[] = useAppSelector((store) => store.books)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { id } = useParams()
  const [hiddenForm, setHiddenForm] = useState(true as boolean)
  const [hiddenDelete, setHiddenDelete] = useState(true as boolean)

  const currentBookInfo = books.find((book) => {
    if (book.id === Number(id)) {
      return book
    }
  })

  const [formData, setFormData] = useState({
    title: '',
    author: '',
    read: false,
  } as UpdateBookData)

  //==================== Page Functionality =================

  useEffect(() => {
    setFormData({
      title: currentBookInfo?.title,
      author: currentBookInfo?.author,
      read: currentBookInfo?.read,
    } as UpdateBookData)
  }, [currentBookInfo])

  const handleHideDelete = () => {
    setHiddenDelete(!hiddenDelete)
  }

  const handleHideForm = () => {
    setHiddenForm(!hiddenForm)
  }

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
    })
  }

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault()
    dispatch(actions.updateBookThunk(Number(id), formData))
    handleHideForm()
  }

  const handleDelete = (id: number) => {
    dispatch(actions.delBookThunk(id))
    navigate('/')
  }

  // ===================== Page Content ==================
  return (
    <>
      <section>
        {hiddenForm ? (
          <button onClick={handleHideForm}>Edit Book Info</button>
        ) : (
          <>
            <form>
              <label htmlFor="title">Book Title</label>
              <input
                value={formData.title}
                placeholder={formData.title}
                type="text"
                id="title"
                name="title"
                onChange={handleChange}
              />

              <label htmlFor="author">Book Author</label>
              <input
                value={formData.author}
                placeholder={formData.author}
                type="text"
                id="author"
                name="author"
                onChange={handleChange}
              />

              <label htmlFor="read">Have Read?</label>
              <input
                className="checkbox"
                defaultChecked={formData.read}
                type="checkbox"
                id="read"
                name="read"
                onChange={handleChange}
              />

              <input
                type="submit"
                value="Update Book Information"
                onClick={handleSubmit}
              />
            </form>
            <button onClick={() => handleHideForm()}>Back</button>
          </>
        )}
      </section>
      <section>
        {hiddenDelete ? (
          <button onClick={() => handleHideDelete()}>Delete Book</button>
        ) : (
          <section>
            <p>Are you sure?</p>
            <button onClick={() => handleHideDelete()}>
              No, don&apos;t delete
            </button>
            <button onClick={() => handleDelete(Number(id))}>
              Yes, Delete Book
            </button>
          </section>
        )}
      </section>
    </>
  )
}

export default EditBook
