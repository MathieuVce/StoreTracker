import React from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'
import { TTabScreenProps } from '../../../types'
import { ROUTES } from '../../../navigation/routes'
import { COLORS, TEXT, SPACING } from '../../../theme'

type Props = TTabScreenProps<typeof ROUTES.SCREEN_FAVORITES>

export default function FavoritesScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={TEXT.h2}>Favoris</Text>
      <Pressable
        style={styles.button}
      onPress={() => navigation.navigate(ROUTES.SCREEN_STORE_DETAIL, { storeId: '1' })}
      >
        <Text style={TEXT.label}>Voir le détail</Text>
      </Pressable>
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
  button: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.lg,
  },
})
