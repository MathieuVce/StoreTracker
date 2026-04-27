import { StyleSheet } from 'react-native'
import { fontScale } from './responsive'
import { COLORS } from './colors'

export const FONT_SIZE = {
  xs: fontScale(11),
  sm: fontScale(13),
  md: fontScale(15),
  lg: fontScale(17),
  xl: fontScale(20),
  xxl: fontScale(24),
  xxxl: fontScale(30),
} as const

export const FONT_WEIGHT = {
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
} as const

export const TEXT = StyleSheet.create({
  h2: {
    fontSize: FONT_SIZE.xxl,
    fontWeight: FONT_WEIGHT.bold,
    color: COLORS.textPrimary,
    lineHeight: fontScale(32),
  },
  h3: {
    fontSize: FONT_SIZE.xl,
    fontWeight: FONT_WEIGHT.semibold,
    color: COLORS.textPrimary,
    lineHeight: fontScale(28),
  },
  h4: {
    fontSize: FONT_SIZE.lg,
    fontWeight: FONT_WEIGHT.semibold,
    color: COLORS.textPrimary,
    lineHeight: fontScale(24),
  },
  body: {
    fontSize: FONT_SIZE.md,
    fontWeight: FONT_WEIGHT.regular,
    color: COLORS.textSecondary,
    lineHeight: fontScale(22),
  },
  label: {
    fontSize: FONT_SIZE.sm,
    fontWeight: FONT_WEIGHT.medium,
    color: COLORS.textPrimary,
  },
})
