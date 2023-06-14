import req from 'superagent'
// import { Book } from "../../../models/books"

const serverUrl = '/api/v1'

export function getBooks() {
  return req.get(`${serverUrl}/books`).then((res) => {
    return res.body
  })
}
