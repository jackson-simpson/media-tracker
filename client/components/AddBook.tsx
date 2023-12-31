import { FormEvent, ChangeEvent, useState } from 'react'
import { useAppDispatch } from '../hooks/hooks'
import { BookData } from '../../models/books'
import * as actions from '../actions/books'

function AddBook() {
  const dispatch = useAppDispatch()
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    read: false,
  } as BookData)

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
    })
  }

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault()
    if (formData.title === '' || formData.author === '') {
      return null
    } else {
      dispatch(actions.addBookThunk(formData))
    }

    setFormData({
      title: '',
      author: '',
      read: false,
    })
  }

  return (
    <>
      <form>
        <label htmlFor="title">Book Title</label>
        <input
          value={formData.title}
          type="text"
          id="title"
          name="title"
          onChange={handleChange}
        />

        <label htmlFor="author">Book Author</label>
        <input
          value={formData.author}
          type="text"
          id="author"
          name="author"
          onChange={handleChange}
        />

        <label htmlFor="read">Have Read?</label>
        <input
          className="checkbox"
          defaultChecked={false}
          type="checkbox"
          id="read"
          name="read"
          onChange={handleChange}
        />

        <input type="submit" value="Submit" onClick={handleSubmit} />
      </form>
    </>
  )
}

export default AddBook
