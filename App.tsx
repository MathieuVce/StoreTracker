import React from 'react'
import RootNavigator from './src/navigation/RootNavigator'
import { StoresProvider } from './src/features/stores'

export default function App() {
  return (
    <StoresProvider>
      <RootNavigator />
    </StoresProvider>
  )
}
