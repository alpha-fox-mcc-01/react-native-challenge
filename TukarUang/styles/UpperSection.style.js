import Constants from 'expo-constants'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  walletContainer: {
    paddingBottom: Constants.statusBarHeight,
    paddingStart: Constants.statusBarHeight,
    paddingEnd: Constants.statusBarHeight,
    alignItems: 'center',
  },

  textInput: {
    borderWidth: 1,
    padding: 10,
    width: '100%',
    textAlign: 'center',
    fontSize: 60,
    fontWeight: 'bold',
    borderRadius: 10,
    borderColor: 'white',
  },
})
