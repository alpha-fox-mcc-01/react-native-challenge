import Constants from 'expo-constants'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  currencyContainer: {
    paddingTop: Constants.statusBarHeight * 2,
    paddingStart: Constants.statusBarHeight,
    paddingEnd: Constants.statusBarHeight,
  },

  fromRate: {
    fontSize: 24,
  },
})
