import React, { useEffect, useState } from 'react'
import { Text, View, ScrollView, StatusBar } from 'react-native'
import { NavigationContainer, TabActions } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import axios from './api/Axios'

import styles from './styles/MainScreen.style'
import MainScreen from './views/MainScreen'
import CalculatorScreen from './views/CalculatorScreen'

const Tab = createBottomTabNavigator()

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          showIcon: false,
          style: {
            backgroundColor: 'gold',
          },
          activeTintColor: 'purple',
        }}
      >
        <Tab.Screen name='Home' component={MainScreen} />
        <Tab.Screen name='Calculator' component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
