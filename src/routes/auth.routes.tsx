import React from 'react';

import { SignIn } from '~/pages/SignIn';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Auth = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Auth.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Auth.Screen name="SignIn" component={SignIn} />
    </Auth.Navigator>
  )
}