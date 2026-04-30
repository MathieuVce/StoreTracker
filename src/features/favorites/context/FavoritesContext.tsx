import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import type { Store } from '../../../types'

const STORAGE_KEY = '@favorites'

type TFavoritesContext = {
  favorites: Store[]
  isFavorite: (storeId: string) => boolean
  toggleFavorite: (store: Store) => void
}

const FavoritesContext = createContext<TFavoritesContext | null>(null)

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<Store[]>([])
  const loaded = useRef(false)

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY).then((data) => {
      if (data) setFavorites(JSON.parse(data))
      loaded.current = true
    })
  }, [])

  // Guard avoids overwriting AsyncStorage before initial read completes
  useEffect(() => {
    if (!loaded.current) return
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(favorites))
  }, [favorites])

  const isFavorite = useCallback(
    (storeId: string) => favorites.some((s) => s.id === storeId),
    [favorites],
  )

  const toggleFavorite = useCallback((store: Store) => {
    setFavorites((prev) => {
      const exists = prev.some((s) => s.id === store.id)
      return exists
        ? prev.filter((s) => s.id !== store.id)
        : [...prev, store]
    })
  }, [])

  return (
    <FavoritesContext.Provider value={{ favorites, isFavorite, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  )
}

export function useFavorites(): TFavoritesContext {
  const context = useContext(FavoritesContext)
  if (!context) throw new Error('useFavorites must be used within FavoritesProvider')
  return context
}
