import React from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'
import { TTabScreenProps } from '../../../types'
import { ROUTES } from '../../../navigation/routes'
import { COLORS, SPACING, TEXT } from '../../../theme'

type Props = TTabScreenProps<typeof ROUTES.SCREEN_STORE_LIST>

export default function StoreListScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enseignes</Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate(ROUTES.SCREEN_STORE_DETAIL, { storeId: '1' })}
      >
        <Text style={styles.buttonText}>Voir le détail</Text>
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
  title: {
    ...TEXT.h2,
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.lg,
  },
  buttonText: {
    ...TEXT.label,
  },
})
