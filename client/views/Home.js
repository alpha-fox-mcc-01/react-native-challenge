import React from 'react';
import { StyleSheet, View } from 'react-native';
import MovieList from '../components/MovieList';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <MovieList navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    width: '100%',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default Home;
