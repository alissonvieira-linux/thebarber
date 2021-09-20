import React from 'react';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';
import theme from '~/global/theme';

import { Routes } from '~/routes';

import { 
  useFonts, 
  Inter_300Light, 
  Inter_400Regular, 
  Inter_700Bold 
} from '@expo-google-fonts/inter';

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_300Light,
    Inter_400Regular,
    Inter_700Bold
  });

  if(!fontsLoaded) {
    return <AppLoading />
  } else {
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
}
