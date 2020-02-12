import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
  detailsContainer: {
    backgroundColor: 'gold',
  },

  baseCurrencyWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  baseCurrency: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
  },
  textWhite: {
    color: 'white',
  },
  upperSection: {
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight * 2,
    paddingBottom: Constants.statusBarHeight * 2,

    borderBottomEndRadius: Constants.statusBarHeight * 2,
    borderBottomStartRadius: Constants.statusBarHeight * 2,
    marginBottom: Constants.statusBarHeight,
    backgroundColor: '#544666',
  },
  row: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: Constants.statusBarHeight,
    paddingRight: Constants.statusBarHeight,
    borderRadius: 20,
    marginVertical: 4,
    marginHorizontal: Constants.statusBarHeight,
    backgroundColor: 'white',
  },
  textBig: {
    fontSize: 28,
  },
})
