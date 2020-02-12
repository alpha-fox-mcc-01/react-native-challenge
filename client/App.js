import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './views/Home';
import MovieDetail from './views/MovieDetails';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'gold',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{
            title: 'Indo XXI 2.0',
            headerTitleStyle: {
              fontFamily: 'serif',
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name='Detail'
          component={MovieDetail}
          options={({ route }) => ({
            title: route.params.title,
            headerTitleStyle: {
              fontSize: 15,
              fontFamily: 'serif',
              fontWeight: 'bold',
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
