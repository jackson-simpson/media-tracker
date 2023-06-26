import { useAppDispatch } from '../hooks/hooks'
import { useNavigate, useParams } from 'react-router-dom'
import * as actions from '../actions/books'
import { useState } from 'react'

function EditBook() {
  const { id } = useParams()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [hidden, setHidden] = useState(true as boolean)

  const handleHide = () => {
    setHidden(!hidden)
  }

  const handleDelete = (id: number) => {
    dispatch(actions.delBookThunk(id))
    navigate('/')
  }

  return (
    <>
      <section>
        {}
        <form></form>
      </section>

      {/* Button for deleting this book entry - I want too: 
        1. Have it toggle to a secondary confirmation state
        2. Have it include two buttons, yes and no. */}
      <section>
        {hidden ? (
          <button onClick={() => handleHide()}>Delete Book</button>
        ) : (
          <section>
            <p>Are you sure?</p>
            <button onClick={() => handleHide()}>No, don&apos;t delete</button>
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
