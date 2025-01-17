import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginFlow from './src/components/navHelpers/authNav';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
        < LoginFlow />
    </NavigationContainer>
  );
}

export default App;