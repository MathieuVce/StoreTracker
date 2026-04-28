import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { COLORS, FONT_SIZE, FONT_WEIGHT, ICON_SIZE, SPACING } from '../theme'
import { ROUTES, TAB_ICONS } from './routes'
import type { TRootStackParamList, TTabParamList } from '../types'
import StoreListScreen from '../features/stores/screens/StoreListScreen'
import StoreDetailScreen from '../features/stores/screens/StoreDetailScreen'
import FavoritesScreen from '../features/favorites/screens/FavoritesScreen'

const Stack = createNativeStackNavigator<TRootStackParamList>()
const Tab = createBottomTabNavigator<TTabParamList>()


type TabBarIconProps = { routeName: keyof TTabParamList; color: string; focused: boolean }

function TabBarIcon({ routeName, color }: TabBarIconProps) {
  const base = TAB_ICONS[routeName]
  return <Ionicons name={base} size={ICON_SIZE.lg} color={color} />
}

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.textTertiary,
        tabBarIcon: ({ color, focused }) => (
          <TabBarIcon routeName={route.name} color={color} focused={focused} />
        ),
        tabBarStyle: {
          backgroundColor: COLORS.white,
          borderTopColor: COLORS.border,
          borderTopWidth: 1,
          paddingBottom: SPACING.sm,
          paddingTop: SPACING.xs,
          height: 80,
        },
        tabBarLabelStyle: {
          fontSize: FONT_SIZE.xs,
          fontWeight: FONT_WEIGHT.medium,
        },
      })}
    >
      <Tab.Screen
        name={ROUTES.SCREEN_STORE_LIST}
        component={StoreListScreen}
        options={{ title: 'Enseignes' }}
      />
      <Tab.Screen
        name={ROUTES.SCREEN_FAVORITES}
        component={FavoritesScreen}
        options={{ title: 'Favoris' }}
      />
    </Tab.Navigator>
  )
}

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: COLORS.primary },
          headerTitleStyle: {
            fontSize: FONT_SIZE.lg,
            fontWeight: FONT_WEIGHT.bold,
            color: COLORS.white,
          },
          headerTintColor: COLORS.white,
          headerShadowVisible: false,
          headerBackButtonDisplayMode: 'minimal',
        }}
      >
        <Stack.Screen
          name={ROUTES.STACK_BOTTOM_TABS}
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ROUTES.SCREEN_STORE_DETAIL}
          component={StoreDetailScreen}
          options={{ title: 'Détail' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
