import connection from '../connection'
import type { Book } from '../../../models/books'

// Get All Books

export function getAllBooks(): Promise<Book[]> {
  return connection('books').select()
}
