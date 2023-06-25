export interface BookData {
  title: string
  author: string
  read: boolean
}

export interface Book extends BookData {
  id: number
  date_added: number //Back-End only
}
