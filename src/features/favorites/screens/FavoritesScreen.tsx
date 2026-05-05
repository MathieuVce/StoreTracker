import React, { useMemo } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import type { TTabScreenProps } from '../../../types'
import { ROUTES } from '../../../navigation/routes'
import { COLORS, SPACING, TEXT } from '../../../theme'
import { useFavorites } from '../context/FavoritesContext'
import { useStoreFilter } from '../../stores/hooks/useStoreFilter'
import StoreCard from '../../stores/components/StoreCard'
import StoreFilters from '../../stores/components/StoreFilters'

type Props = TTabScreenProps<typeof ROUTES.SCREEN_FAVORITES>

export default function FavoritesScreen({ navigation }: Props) {
  const { favorites } = useFavorites()
  const { searchQuery, setSearchQuery, selectedCategory, setSelectedCategory } = useStoreFilter()

  const filtered = useMemo(() => {
    const query = searchQuery.toLowerCase().trim()
    return favorites.filter((store) => {
      const matchesSearch =
        query === '' ||
        store.name.toLowerCase().includes(query) ||
        store.city.toLowerCase().includes(query)
      const matchesCategory =
        selectedCategory === null || store.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [favorites, searchQuery, selectedCategory])

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {favorites.length === 0 ? (
        <View style={styles.emptylist}>
          <Text style={TEXT.h4}>Aucun favori pour l'instant</Text>
        </View>
      ) : (
        <>
          <StoreFilters
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
          <FlatList
            data={filtered}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <StoreCard
                store={item}
                onPress={() =>
                  navigation.navigate(ROUTES.SCREEN_STORE_DETAIL, { storeId: item.id })
                }
              />
            )}
            contentContainerStyle={styles.list}
            ListEmptyComponent={
              <View style={styles.empty}>
                <Text style={[TEXT.body, styles.text]}>Aucun résultat pour ces filtres.</Text>
              </View>
            }
          />
        </>
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  list: {
    paddingBottom: SPACING.xxxl,
  },
  emptylist: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: COLORS.textTertiary,
    textAlign: 'center',
  },
  empty: {
    paddingTop: SPACING.xxxl,
    alignItems: 'center',
  },
})
