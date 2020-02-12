import React from 'react'
import { View, Text } from 'react-native'

import styles from '../styles/CurrencyDetails.style'
export default function DetailList({ rate, code }) {
  return (
    <View style={styles.row}>
      <View>
        <Text>{`${rate.currency_name} (${code})`}</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text>Rate: {rate.rate}</Text>
          <Text style={styles.textBig}>{rate.rate_for_amount}</Text>
        </View>
      </View>
    </View>
  )
}
