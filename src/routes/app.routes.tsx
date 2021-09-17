import React from 'react';

import { Home } from '~/pages/Home';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const App = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <App.Navigator
      screenOptions={{ headerShown: false }}
    >
      <App.Screen name="Home" component={Home} />
    </App.Navigator>
  )
}