import React from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import type { StoreCategory } from '../../../types'
import { COLORS, FONT_SIZE, FONT_WEIGHT, RADIUS, SPACING } from '../../../theme'
import { STORE_CATEGORIES, STORE_CATEGORY } from '../../../types'
import { useStoresContext } from '../context/StoresContext'

export default function StoreFilters() {
  const { searchQuery, setSearchQuery, selectedCategory, setSelectedCategory } = useStoresContext()

  function toggleCategory(category: StoreCategory) {
    setSelectedCategory(selectedCategory === category ? null : category)
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Rechercher un magasin..."
        placeholderTextColor={COLORS.textTertiary}
        value={searchQuery}
        onChangeText={setSearchQuery}
        returnKeyType="search"
      />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.filterList}
      >
        <TouchableOpacity
          style={[styles.filter, selectedCategory === null && styles.filterSelected]}
          onPress={() => setSelectedCategory(null)}
          accessibilityRole="button"
          accessibilityState={{ selected: selectedCategory === null }}
        >
          <Text style={[styles.filterText, selectedCategory === null && styles.filterTextSelected]}>
            Tous
          </Text>
        </TouchableOpacity>
        {STORE_CATEGORIES.map((category) => {
          const { name, icon } = STORE_CATEGORY[category]
          const active = selectedCategory === category
          return (
            <TouchableOpacity
              key={category}
              style={[styles.filter, active && styles.filterSelected]}
              onPress={() => toggleCategory(category)}
              accessibilityRole="button"
              accessibilityState={{ selected: active }}
            >
              <Text style={styles.filterIcon}>{icon}</Text>
              <Text style={[styles.filterText, active && styles.filterTextSelected]}>
                {name}
              </Text>
            </TouchableOpacity>
          )
        })}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    paddingTop: SPACING.md,
  },
  input: {
    marginHorizontal: SPACING.lg,
    marginBottom: SPACING.md,
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: RADIUS.md,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    fontSize: FONT_SIZE.md,
    color: COLORS.textPrimary,
  },
  filterList: {
    paddingHorizontal: SPACING.lg,
    paddingBottom: SPACING.md,
    gap: SPACING.sm,
  },
  filter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.xs,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    borderRadius: RADIUS.full,
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.background,
  },
  filterSelected: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  filterIcon: {
    fontSize: FONT_SIZE.md,
  },
  filterText: {
    fontSize: FONT_SIZE.sm,
    fontWeight: FONT_WEIGHT.medium,
    color: COLORS.textSecondary,
  },
  filterTextSelected: {
    color: COLORS.white,
    fontWeight: FONT_WEIGHT.semibold,
  },
})
