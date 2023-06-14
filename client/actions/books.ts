import { Action } from '../../models/actions'
import { Book } from '../../models/books'

import { getBooks } from '../apis/internal/books'
import { ThunkAction } from '../store'

//================= Global Variables =================

export const SET_BOOKS = 'SET_BOOKS'
export const ADD_BOOK = 'ADD_BOOK'
export const DEL_BOOK = 'DEL_BOOK'
export const UPDATE_BOOK = 'UPDATE_BOOK'
export const ERROR = 'ERROR'

//================= Action Creators ==================
// Error Simple Action

export function error(message: string): Action {
  return {
    type: ERROR,
    payload: message,
  }
}

// Simple Actions

export function setBooks(books: Book[]): Action {
  return {
    type: SET_BOOKS,
    payload: books,
  }
}

// Thunk Actions

export function getAllBooks(): ThunkAction {
  return async (dispatch) => {
    try {
      const bookArr = await getBooks()
      dispatch(setBooks(bookArr))
    } catch (e) {
      dispatch(error(String(e)))
    }
  }
}
