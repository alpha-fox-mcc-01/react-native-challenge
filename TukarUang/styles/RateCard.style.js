import Constants from 'expo-constants'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  card: {
    marginStart: Constants.statusBarHeight,
    marginEnd: Constants.statusBarHeight,
    marginBottom: Constants.statusBarHeight,
    padding: 26,
    backgroundColor: '#544666',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 18,
  },

  currencyId: {
    fontSize: 50,
    color: 'white',
  },

  currencyName: {
    fontSize: 20,
    color: 'white',
  },

  conversionRate: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  rateSymbol: {
    marginEnd: 10,
    color: 'white',
  },

  rate: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },
})
