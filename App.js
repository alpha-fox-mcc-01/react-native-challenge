import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomePage from './views/Home'
import DetailsPage from './views/Details'

export default function App() {
  const Stack = createStackNavigator()

  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Details" component={DetailsPage} />
        </Stack.Navigator>
      </NavigationContainer>
  );
  
};
