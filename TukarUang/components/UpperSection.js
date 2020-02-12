import React, { useState, useContext } from 'react'
import { View, Text, TextInput } from 'react-native'

import styles from '../styles/UpperSection.style'
import Context from '../Context'

export default function RateCard() {
  const [amount, setAmount] = useState(1)

  return (
    <View style={styles.walletContainer}>
      <Text style={styles.converterLabel}>{amount} Indonesian Rupiah (IDR)</Text>
      <TextInput
        onChangeText={(text) => setAmount(text)}
        value={amount}
        keyboardType={'number-pad'}
        style={styles.textInput}
      ></TextInput>
    </View>
  )
}
