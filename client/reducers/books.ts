import { Action } from '../../models/actions'
import { Book } from '../../models/books'
import * as book from '../actions/books'

const initialState = [] as Book[]

export default function bookReducers(state = initialState, action: Action) {
  const { type, payload } = action
  switch (type) {
    case book.SET_BOOKS:
      return payload

    case book.ADD_BOOK:
      return [...state, payload]

    case book.DEL_BOOK:
      return state.filter((book) => book.id !== payload)

    case book.UPDATE_BOOK:
      return state.map((book) => {
        if (book.id === payload.id) {
          return {}
        }
        return book
      })

    case book.ERROR:
      return payload

    default:
      return state
  }
}
