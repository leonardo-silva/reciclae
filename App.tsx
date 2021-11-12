import React from 'react';
import { registerRootComponent } from 'expo';
import { StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import { WorkSans_400Regular } from '@expo-google-fonts/work-sans';

import AppLoading from 'expo-app-loading';

import { AuthProvider } from "./src/hooks/auth";
import { Background } from './src/components/Background';
import { Routes } from './src/routes';

export default function App() {
  /**
   To install font Work Sans: 
      expo install expo-font @expo-google-fonts/work-sans
   To be able to know if fontsLoaded before opening the application:
      expo install expo-app-loading   
  */
  const [fontsLoaded] = useFonts({ WorkSans_400Regular });

  if (! fontsLoaded) {
    return <AppLoading/>
  }
  
  return (
    <Background>
      <StatusBar 
        barStyle='dark-content'
        backgroundColor="transparent"
        translucent
      />

      <AuthProvider>
        <Routes />
      </AuthProvider>  
    </Background>
  );
}

registerRootComponent(App);