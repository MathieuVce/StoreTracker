import { Dimensions, PixelRatio } from 'react-native'

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')

// Based on iPhone 14 Pro
const BASE_WIDTH = 393

const scale = (size: number) => (SCREEN_WIDTH / BASE_WIDTH) * size

const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor

export const rs = moderateScale

export const SCREEN = {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
  isSmall: SCREEN_WIDTH <= 375,   // iPhone SE, 8
  isMedium: SCREEN_WIDTH > 375 && SCREEN_WIDTH <= 393, // iPhone 14, 15
  isLarge: SCREEN_WIDTH > 393,    // Plus, Pro Max
}

export const fontScale = (size: number) =>
  Math.round(PixelRatio.roundToNearestPixel(moderateScale(size)))
