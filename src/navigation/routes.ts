export const ROUTES = {
  STACK_BOTTOM_TABS: 'BottomTabs',
  SCREEN_STORE_LIST: 'StoreList',
  SCREEN_STORE_DETAIL: 'StoreDetail',
  SCREEN_FAVORITES: 'Favorites',
} as const

export const TAB_ICONS: Record<string, string> = {
  [ROUTES.SCREEN_STORE_LIST]: 'storefront',
  [ROUTES.SCREEN_FAVORITES]: 'heart',
}
