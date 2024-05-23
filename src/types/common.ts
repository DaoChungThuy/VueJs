export interface Course {
  id: number
  title: string
  name: string
  img: string
  price?: string
}

export interface MyCourse extends Course {
  watched?: number
  max?: number
  percent?: number
}

export interface Review {
  avatar: string
  username: string
  created_at: string
  comment: string
}
export interface Teacher {
  id: number
  img: string
  name: string
  description: string
}

export interface Category {
  id: number
  name: string
}

export interface Carousel {
  id: number
  bg: string
  name: string
  avatar: string
  description: string
}

export interface Svg {
  [key: string]: string
}
