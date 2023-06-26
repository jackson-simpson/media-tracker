import req from 'superagent'
import { Book, BookData } from '../../../models/books'

const serverUrl = '/api/v1/books'

export async function getBooks(): Promise<Book[]> {
  const res = await req.get(serverUrl)
  return res.body
}

export async function delBook(id: number) {
  await req.delete(`${serverUrl}/${id}`)
}

export async function postBook(data: BookData) {
  const res = await req.post(`${serverUrl}`).send(data)
  return res.body
}

export async function patchBook(id: number, data: BookData) {
  const res = await req.patch(`${serverUrl}/${id}`).send(data)
  return res.body
}
