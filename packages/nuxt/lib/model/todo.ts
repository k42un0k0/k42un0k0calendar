export type Project = {
  name: string
}
export type Board = {
  name: string
}

export interface Card {
  title: string
  /**
   * this accepts markdown notation.
   */
  detail: string
}
