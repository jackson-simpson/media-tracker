import { useAppDispatch } from '../hooks/hooks'
import * as actions from '../actions/books'
import { Navigate, redirect, useParams } from 'react-router-dom'

function EditBook() {
  const { id } = useParams()
  const dispatch = useAppDispatch()

  const handleDelete = (id: number) => {
    dispatch(actions.delBookThunk(id))
    redirect('/')
  }

  return (
    <>
      <button onClick={() => handleDelete(Number(id))}>Delete</button>
    </>
  )
}

export default EditBook
