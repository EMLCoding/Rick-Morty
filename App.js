import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CharactersStore from './app/store/CharactersStore'
import Characters from './app/screens/Characters'
import CharacterInfo from './app/screens/CharacterInfo'

const store = window.store = new CharactersStore() // ELIMINAR

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content"/>
      <Stack.Navigator initialRouteName="Characters">
        <Stack.Screen name="Characters" component={Characters} options={{headerShown: false}}/>
        <Stack.Screen name="CharacterInfo" component={CharacterInfo}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
