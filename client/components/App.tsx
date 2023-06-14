//======================Imports=======================
// React
import { Routes, Route } from 'react-router-dom'

// Redux
import { useAppDispatch } from '../hooks/hooks'

// Components
import Books from './Books'

function App() {
  return (
    <>
      <header className="header">
        <h1>My Collection</h1>
      </header>
      <Routes></Routes>
    </>
  )
}

export default App
