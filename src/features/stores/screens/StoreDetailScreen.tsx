import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TRootStackScreenProps } from '../../../types'
import { ROUTES } from '../../../navigation/routes'
import { COLORS, TEXT } from '../../../theme'

type TStoreDetailProps = TRootStackScreenProps<typeof ROUTES.SCREEN_STORE_DETAIL>

export default function StoreDetailScreen({ route }: TStoreDetailProps) {
  const { storeId } = route.params
  return (
    <View style={styles.container}>
      <Text style={TEXT.h2}>Détail</Text>
      <Text style={[TEXT.body, styles.subtitle]}>Store {storeId}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
  },
  subtitle: {
    marginTop: 8,
  },
})
