import React, { useContext, useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import styles from '../styles/MainScreen.style'
import UpperSection from '../components/UpperSection'
import CurrencyList from '../components/CurrencyList'

import CurrencyDetails from '../views/CurrencyDetails'

const Stack = createStackNavigator()

function convertCurrency(amount, rate) {
  return amount * rate
}

function Home({ navigation }) {
  const [amount, setAmount] = useState(1)

  return (
    <View style={styles.mainContainer}>
      <View style={styles.walletContainer}>
        <TextInput
          onChangeText={(text) => setAmount(text)}
          value={amount}
          keyboardType={'number-pad'}
          style={styles.textInput}
        ></TextInput>
      </View>

      <CurrencyList
        convertCurrency={convertCurrency}
        amount={amount}
        navigation={navigation}
        convertCurrency={convertCurrency}
      />
    </View>
  )
}

export default function MainScreen() {
  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='CurrencyDetails' component={CurrencyDetails} options={{ tabBarLabel: 'Home!' }} />
    </Stack.Navigator>
  )
}
