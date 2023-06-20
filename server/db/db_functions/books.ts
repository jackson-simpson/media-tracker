//=============== IMPORTS ================
import connection from '../connection'
import type { Book } from '../../../models/books'

const db = connection

//----------------- Get All Books -------------------

export function getAllBooks(): Promise<Book[]> {
  return db('books').select()
}

//---------------- Delete a Book --------------------

export function deleteBook(id: number): Promise<number> {
  return db('books').delete().where({ id })
}
