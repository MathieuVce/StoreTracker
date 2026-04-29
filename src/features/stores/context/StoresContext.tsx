import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'
import type { Store, StoreCategory } from '../../../types'
import { MOCK_STORES } from '../../../api/mocks/storeMocks'

type TStoresContext = {
  stores: Store[]
  isLoading: boolean
  isRefreshing: boolean
  refresh: () => void
  searchQuery: string
  setSearchQuery: (query: string) => void
  selectedCategory: StoreCategory | null
  setSelectedCategory: (category: StoreCategory | null) => void
}

const StoresContext = createContext<TStoresContext | null>(null)

export function StoresProvider({ children }: { children: React.ReactNode }) {
  const [stores, setStores] = useState<Store[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<StoreCategory | null>(null)

  const fetchStores = useCallback((refreshing = false) => {
    if (refreshing) {
      setIsRefreshing(true)
    } else {
      setIsLoading(true)
    }

    const timeout = setTimeout(() => {
      setStores(MOCK_STORES)
      setIsLoading(false)
      setIsRefreshing(false)
    }, 500)

    return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {
    return fetchStores()
  }, [fetchStores])

  const refresh = useCallback(() => {
    fetchStores(true)
  }, [fetchStores])

  return (
    <StoresContext.Provider
      value={{ stores, isLoading, isRefreshing, refresh, searchQuery, setSearchQuery, selectedCategory, setSelectedCategory }}
    >
      {children}
    </StoresContext.Provider>
  )
}

export function useStoresContext(): TStoresContext {
  const context = useContext(StoresContext)
  if (!context) throw new Error('useStoresContext must be used within StoresProvider')
  return context
}
