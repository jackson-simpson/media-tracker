import req from 'superagent'
import { Book } from '../../../models/books'

const serverUrl = '/api/v1/books'

export async function getBooks(): Promise<Book[]> {
  const res = await req.get(serverUrl)
  return res.body
}

export async function delBook(id: number) {
  await req.delete(`${serverUrl}/${id}`)
}
