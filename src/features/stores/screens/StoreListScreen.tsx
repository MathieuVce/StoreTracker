import React from 'react'
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import type { TTabScreenProps } from '../../../types'
import { ROUTES } from '../../../navigation/routes'
import { COLORS, SPACING } from '../../../theme'
import { useStoreList } from '../hooks/useStoreList'
import StoreCard from '../components/StoreCard'
import StoreFilters from '../components/StoreFilters'

type Props = TTabScreenProps<typeof ROUTES.SCREEN_STORE_LIST>

export default function StoreListScreen({ navigation }: Props) {
  const { stores, isLoading, isRefreshing, refresh } = useStoreList()

  return (
    <SafeAreaView style={styles.screen} edges={['top']}>
      <StoreFilters />
      {isLoading ? (
        <View style={styles.loaderBox}>
          <ActivityIndicator size="large" color={COLORS.primary} />
        </View>
      ) : (
        <FlatList
          data={stores}
          keyExtractor={(item) => item.id}
          refreshing={isRefreshing}
          onRefresh={refresh}
          renderItem={({ item }) => (
            <StoreCard
              store={item}
              onPress={() => navigation.navigate(ROUTES.SCREEN_STORE_DETAIL, { storeId: item.id })}
            />
          )}
          contentContainerStyle={styles.list}
        />
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  loaderBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    paddingBottom: SPACING.xxxl,
  },
})
