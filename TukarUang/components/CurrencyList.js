import React from 'react'
import { View, Text, FlatList } from 'react-native'

import styles from '../styles/CurrencyList.style'
import RateCard from './RateCard'

import useInitialFetch from '../hooks/useInitialFetch'

export default function CurrencyList({ navigation, convertCurrency, amount }) {
  const currencyList = useInitialFetch()
  return (
    <>
      <FlatList
        data={currencyList}
        renderItem={({ item }) => (
          <RateCard amount={amount} convertCurrency={convertCurrency} navigation={navigation} rate={item} />
        )}
        keyExtractor={(item) => item.base_currency_code}
      />
    </>
  )
}
