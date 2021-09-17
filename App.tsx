import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from '~/routes';
import theme from '~/global/theme';
import { ThemeProvider } from 'styled-components/native';

export default function App() {
  return (
    <ThemeProvider theme={theme}>  
      <NavigationContainer>  
        <SafeAreaView
          style={{ flex: 1, backgroundColor: theme.colors.primary }}
        >
          <StatusBar backgroundColor="transparent" style="light" />

          <Routes />
        </SafeAreaView>
      </NavigationContainer>
    </ThemeProvider>
  );
}
