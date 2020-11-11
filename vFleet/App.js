import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper'
import AppNavigator from './src/navigation'

const App = () => { 
  return (
    <PaperProvider>
      <AppNavigator />
    </PaperProvider>
  );
}

export default App
