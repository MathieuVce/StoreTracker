import { useMemo } from 'react'
import type { StoreCategory } from '../../../types'
import { useStoresContext } from '../context/StoresContext'

export function useStoreList(searchQuery: string, selectedCategory: StoreCategory | null) {
  const { stores, isLoading, isRefreshing, refresh } = useStoresContext()

  const filteredStores = useMemo(() => {
    const query = searchQuery.toLowerCase().trim()

    return stores.filter((store) => {
      const matchesSearch =
        query === '' ||
        store.name.toLowerCase().includes(query) ||
        store.city.toLowerCase().includes(query)

      const matchesCategory =
        selectedCategory === null || store.category === selectedCategory

      return matchesSearch && matchesCategory
    })
  }, [stores, searchQuery, selectedCategory])

  return { stores: filteredStores, isLoading, isRefreshing, refresh }
}
