import React, { useEffect } from 'react'
import { View, Text, FlatList, ScrollView } from 'react-native'

import styles from '../styles/CurrencyDetails.style'
import DetailList from '../components/DetailsList'

import useFetchRate from '../hooks/useFetchRate'

export default function CurrencyDetails({ route }) {
  const { code, amount } = route.params
  const rates = useFetchRate(code, amount)

  return (
    <ScrollView style={styles.detailsContainer}>
      <View style={styles.upperSection}>
        <View style={styles.baseCurrencyWrapper}>
          <Text style={styles.baseCurrency}>{amount}</Text>
          <Text style={styles.textWhite}>({rates.base_currency_code})</Text>
        </View>
        <Text style={styles.textWhite}>Updated: {rates.updated_date}</Text>
      </View>
      {/* <Text>{JSON.stringify(rates.rates)}</Text> */}

      {Object.keys(rates.rates).map((row) => (
        // <Text>{JSON.stringify(row)}</Text>
        <DetailList code={row} rate={rates.rates[row]} />
      ))}
    </ScrollView>
  )
}
