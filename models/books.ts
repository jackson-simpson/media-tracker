export interface BookData {
  title: string
  author: string
  read: boolean
}

export interface UpdateBookData extends BookData {
  id: number
  title: string
  author: string
  read: boolean
}

export interface Book extends UpdateBookData {
  date_added: number //Back-End only
}
