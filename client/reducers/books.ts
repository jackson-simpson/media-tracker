import { ERROR } from 'sqlite3'

const initialState = [] as Book[]

export default function bookReducers(state = initialState, action: Action) {
  const { type, payload } = action
  switch (type) {
    case SET_BOOKS:
      return payload

    case ADD_BOOK:
      return [...state, payload]

    case DEL_BOOK:
      return state.filter((book) => book.id !== payload)

    case UPDATE_BOOK:
      return state.map((book) => {
        if (book.id === payload.id) {
          return {}
        }
        return book
      })

    case ERROR:
      return payload

    default:
      return state
  }
}
