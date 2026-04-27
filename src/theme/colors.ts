export const COLORS = {
  // Orange
  primary: '#F38E36',
  primaryLight: '#FFF4E6',
  primaryDark: '#C96E1A',

  // Semantic
  opened: '#059669',
  rating: '#F59E0B',
  closed: '#EF4444',

  // Neutrals
  white: '#FFFFFF',
  black: '#0F0F0F',
  background: '#FAFAF8',
  surface: '#FFFFFF',
  border: '#EDE8E0',
  borderLight: '#F5F2EE',

  // Text
  textPrimary: '#1C1109',
  textSecondary: '#4A3F2F',
  textTertiary: '#8C7B66',
  textDisabled: '#C4B8A8',
} as const

export type ColorKey = keyof typeof COLORS
