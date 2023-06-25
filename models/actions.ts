import { Book, BookData } from './books'

export type Action =
  | { type: 'ERROR'; payload: string }
  | { type: 'SET_BOOKS'; payload: Book[] }
  | { type: 'DEL_BOOK'; payload: number }
  | { type: 'ADD_BOOK'; payload: BookData }
// | { type: 'UPDATE_BOOK', payload: UpdatePayload }

// interface UpdatePayload {

// }
