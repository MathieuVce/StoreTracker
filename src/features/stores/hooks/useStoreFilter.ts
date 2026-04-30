import { useState } from 'react'
import type { StoreCategory } from '../../../types'

export type TStoreFilter = {
  searchQuery: string
  setSearchQuery: (q: string) => void
  selectedCategory: StoreCategory | null
  setSelectedCategory: (c: StoreCategory | null) => void
}

export function useStoreFilter(): TStoreFilter {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<StoreCategory | null>(null)
  return { searchQuery, setSearchQuery, selectedCategory, setSelectedCategory }
}
