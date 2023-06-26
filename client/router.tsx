//=========== IMPORTS ===============

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

// Component Imports

import App from './components/App'
import Home from './components/Home'
import Books from './components/Books'
import Book from './components/Book'

//====================================

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/books" element={<Books />} />
      <Route path="/books/:id" element={<Book />} />
    </Route>
  )
)

export default router
