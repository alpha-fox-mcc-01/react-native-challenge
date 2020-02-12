import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import styles from '../styles/RateCard.style'

export default function RateCard({ convertCurrency, rate, navigation, amount }) {
  const conversionRate = rate.rates.IDR.rate

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('CurrencyDetails', {
          code: rate.base_currency_code,
          amount: amount,
        })
      }}
    >
      <View style={styles.card}>
        <View>
          {amount <= 9999 ? (
            <Text style={styles.currencyId}>{rate.base_currency_code}</Text>
          ) : amount.length == 0 ? (
            amount == 1
          ) : (
            <Text style={styles.rate}>{amount}</Text>
          )}
          <Text style={styles.currencyName}>{rate.base_currency_name}</Text>
        </View>
        <View style={styles.conversionRate}>
          <Text style={styles.rateSymbol}>= Rp</Text>
          <Text style={styles.rate}>{(Number(conversionRate.slice(0, -2)) * amount).toFixed(2)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}
