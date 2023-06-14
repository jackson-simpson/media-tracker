export interface BookData {
  title: string
  author: string
}

export interface Book extends BookData {
  id: number
  // data_added: number
}
