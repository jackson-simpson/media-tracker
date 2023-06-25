import { Action } from '../../models/actions'
import { Book, BookData } from '../../models/books'

import * as api from '../apis/internal/books'
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

//--------------- Simple Actions -----------------

export function setBooks(books: Book[]): Action {
  return {
    type: SET_BOOKS,
    payload: books,
  }
}

export function deleteBook(id: number): Action {
  return {
    type: DEL_BOOK,
    payload: id,
  }
}

export function addBook(data: BookData): Action {
  return {
    type: ADD_BOOK,
    payload: data,
  }
}

//--------------- Thunk Actions ------------------
//GET books
export function getBooksThunk(): ThunkAction {
  return async (dispatch) => {
    try {
      const bookArr = await api.getBooks()
      dispatch(setBooks(bookArr))
    } catch (err) {
      dispatch(error(String(err)))
    }
  }
}

//DEL book
export function delBookThunk(id: number): ThunkAction {
  return async (dispatch) => {
    try {
      await api.delBook(id)
      dispatch(deleteBook(id))
    } catch (err) {
      dispatch(error(String(err)))
    }
  }
}

//ADD book
export function addBookThunk(data: BookData): ThunkAction {
  return async (dispatch) => {
    try {
      const res = await api.postBook(data)
      dispatch(addBook(res))
    } catch (err) {
      dispatch(error(String(err)))
    }
  }
}
