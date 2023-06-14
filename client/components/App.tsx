//======================Imports=======================
// React
import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'

// Redux
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { getAllBooks } from '../actions/books'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getAllBooks())
  }, [dispatch])

  return (
    <>
      <header className="header">
        <h1>My Book Collection</h1>
      </header>
      <section>
        <Outlet />
      </section>
    </>
  )
}
export default App
