import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import type { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native'
import { ROUTES } from '../navigation/routes'

export type TRootStackParamList = {
  [k in typeof ROUTES.STACK_BOTTOM_TABS]: NavigatorScreenParams<TTabParamList>
} & {
  [k in typeof ROUTES.SCREEN_STORE_DETAIL]: { storeId: string }
}

export type TTabParamList = {
  [k in typeof ROUTES.SCREEN_STORE_LIST]: undefined
} & {
  [k in typeof ROUTES.SCREEN_FAVORITES]: undefined
}

export type TRootStackScreenProps<T extends keyof TRootStackParamList> =
  NativeStackScreenProps<TRootStackParamList, T>

export type TTabScreenProps<T extends keyof TTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<TTabParamList, T>,
  NativeStackScreenProps<TRootStackParamList>
>
