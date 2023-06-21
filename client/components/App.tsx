//======================Imports=======================
// React
import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'

// Redux
import { useAppDispatch } from '../hooks/hooks'
import * as actions from '../actions/books'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(actions.getBooksThunk())
  }, [dispatch])

  return (
    <>
      <header className="header">
        <h1>My Book Collection</h1>
      </header>
      <Outlet />
    </>
  )
}
export default App
