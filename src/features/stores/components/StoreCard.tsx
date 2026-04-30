import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import type { Store } from '../../../types'
import { COLORS, FONT_SIZE, FONT_WEIGHT, ICON_SIZE, RADIUS, SHADOWS, SPACING, TEXT } from '../../../theme'
import { STORE_CATEGORY } from '../../../types'
import { useFavorites } from '../../favorites/context/FavoritesContext'

type Props = {
  store: Store
  onPress: () => void
}

export default function StoreCard({ store, onPress }: Props) {
  const { isFavorite, toggleFavorite } = useFavorites()
  const favorited = isFavorite(store.id)

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={store.name}
    >
      <View style={styles.header}>
        <Text style={styles.icon}>{STORE_CATEGORY[store.category].icon}</Text>
        <View style={styles.name}>
          <Text style={TEXT.h4}>{store.name}</Text>
          <Text style={styles.category}>{STORE_CATEGORY[store.category].name}</Text>
        </View>
        <TouchableOpacity
          onPress={() => toggleFavorite(store)}
          accessibilityRole="button"
          accessibilityLabel={favorited ? 'Retirer des favoris' : 'Ajouter aux favoris'}
        >
          <Ionicons
            name={favorited ? 'heart' : 'heart-outline'}
            size={ICON_SIZE.lg}
            color={favorited ? COLORS.primary : COLORS.textTertiary}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={[TEXT.body, styles.location]} numberOfLines={1}>
          {store.address}, {store.city}
        </Text>
        {store.rating != null && (
          <View style={styles.rating}>
            <Text style={styles.star}>★</Text>
            <Text style={styles.ratingText}>
              {store.rating.toFixed(1)}
            </Text>
            <Text style={styles.reviewCount}>({store.reviewCount ?? 0})</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.lg,
    padding: SPACING.lg,
    marginHorizontal: SPACING.lg,
    marginBottom: SPACING.md,
    ...SHADOWS.md,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.md,
    marginBottom: SPACING.sm,
  },
  icon: {
    fontSize: 28,
  },
  name: {
    flex: 1,
  },
  category: {
    ...TEXT.label,
    color: COLORS.textTertiary,
    marginTop: 2,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  location: {
    flex: 1,
    color: COLORS.textSecondary,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  star: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.rating,
  },
  ratingText: {
    fontSize: FONT_SIZE.sm,
    fontWeight: FONT_WEIGHT.semibold,
    color: COLORS.textPrimary,
  },
  reviewCount: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.textTertiary,
  },
})
