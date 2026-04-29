type TStoreTitle = { name: string; icon: string }

export const STORE_CATEGORY: Record<string, TStoreTitle> = {
  supermarket:  { name: 'Supermarché',  icon: '🛒' },
  bakery:       { name: 'Boulangerie',  icon: '🥐' },
  pharmacy:     { name: 'Pharmacie',    icon: '💊' },
  clothing:     { name: 'Vêtements',    icon: '👔' },
  electronics:  { name: 'Électronique', icon: '💻' },
  restaurant:   { name: 'Restaurant',   icon: '🍽️' },
} as const;

export type StoreCategory = keyof typeof STORE_CATEGORY

export const STORE_CATEGORIES = Object.keys(STORE_CATEGORY) as StoreCategory[]

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
