import { useAppDispatch } from '../hooks/hooks'
import * as actions from '../actions/books'
import { useNavigate, useParams } from 'react-router-dom'

function EditBook() {
  const { id } = useParams()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleDelete = (id: number) => {
    dispatch(actions.delBookThunk(id))
    navigate('/')
  }

  return (
    <>
      <button onClick={() => handleDelete(Number(id))}>Delete</button>
    </>
  )
}

export default EditBook
