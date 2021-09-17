import React from 'react';

import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';
import { Preload } from '~/pages/Preload';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Preload" component={Preload} />
      <Stack.Screen name="Auth" component={AuthRoutes} />
      <Stack.Screen name="App" component={AppRoutes} />
    </Stack.Navigator>
  )
}