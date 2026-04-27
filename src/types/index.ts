export interface Coordinates {
  latitude: number
  longitude: number
}

export interface OpeningHours {
  day: 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun'
  open: string
  close: string
  closed: boolean
}

export type StoreCategory =
  | 'supermarket'
  | 'bakery'
  | 'pharmacy'
  | 'clothing'
  | 'electronics'
  | 'restaurant'

export interface Store {
  id: string
  name: string
  address: string
  city: string
  postalCode: string
  phone: string
  coordinates: Coordinates
  openingHours: OpeningHours[]
  category: StoreCategory
  rating?: number
  reviewCount?: number
}

export interface Review {
  id: string
  author: string
  avatar: string
  rating: number
  comment: string
  date: string
}

export type RootStackParamList = {
  Tabs: undefined
  StoreDetail: { storeId: string }
}

export type TabParamList = {
  StoreList: undefined
  Favorites: undefined
}
