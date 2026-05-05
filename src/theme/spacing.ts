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

export const SHADOWS = {
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 24,
    elevation: 8,
  },
} as const
