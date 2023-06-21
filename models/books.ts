export interface BookData {
  title: string
  author: string
  read: boolean
}

export interface Book extends BookData {
  id: number
  dataAdded: number
}
