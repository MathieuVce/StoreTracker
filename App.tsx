import React from 'react'
import RootNavigator from './src/navigation/RootNavigator'
import { StoresProvider } from './src/features/stores'
import { FavoritesProvider } from './src/features/favorites'

export default function App() {
  return (
    <StoresProvider>
      <FavoritesProvider>
        <RootNavigator />
      </FavoritesProvider>
    </StoresProvider>
  )
}
