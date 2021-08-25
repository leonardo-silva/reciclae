import React from 'react';
import { useFonts } from 'expo-font';
import { WorkSans_400Regular } from '@expo-google-fonts/work-sans';

import { SignIn } from './src/screens/SignIn';

import AppLoading from 'expo-app-loading';

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
    <SignIn />
  );
}
