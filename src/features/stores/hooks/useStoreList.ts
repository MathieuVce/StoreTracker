import { useMemo } from 'react'
import { useStoresContext } from '../context/StoresContext'

export function useStoreList() {
  const { stores, isLoading, isRefreshing, refresh, searchQuery, selectedCategory } = useStoresContext()

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
