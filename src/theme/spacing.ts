import { rs } from './responsive'

export const SPACING = {
  xs: rs(4),
  sm: rs(8),
  md: rs(12),
  lg: rs(16),
  xl: rs(20),
  xxxl: rs(32),
  section: rs(48),
} as const

export const RADIUS = {
  sm: rs(8),
  md: rs(10),
  lg: rs(14),
  xl: rs(20),
  full: 9999,
} as const

export const ICON_SIZE = {
  sm: rs(16),
  md: rs(20),
  lg: rs(24),
  xl: rs(32),
} as const
