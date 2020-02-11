import React from 'react';
import { TouchableOpacity, StyleSheet, Text, Image, View, FlatList } from 'react-native';
import useFetcher from '../useFetcher'
import Constants from 'expo-constants'

export default function HomePage({ navigation }) {
  const { characters, loading, error} = useFetcher('/character')

  if (error) return <Text>Error</Text>

  return (
    <View style={styles.container}>
    <Text style={styles.header}>The Rick and Morty Encyclopedia</Text>
    <FlatList data={characters} renderItem={({item}) => (
      <TouchableOpacity onPress={ () => navigation.navigate('Details', 
        item
      )}>
        <View style={styles.card}>
          <View>
          <Image style={styles.image} source={{ uri: item.image}} resizeMode="cover" />
          </View>
          <View style={styles.textMargin}>
          <Text style={{color: 'white'}}> {item.name}</Text>   
          <Text style={{color: '#FF9900'}}>Origin: {item.origin.name}</Text> 
          <Text style={{color: '#FF9900'}}>Species: {item.species}</Text> 
          </View>
        </View>
      </TouchableOpacity>
    )} keyExtractor={ item => item.id.toString() }/>
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#202329'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  header: {
    margin: Constants.statusBarHeight,
    color: 'grey',
    fontWeight: 'bold'
  },
  card: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderWidth: 1,
    borderColor: '#d6d7da',
    borderRadius: 8,
    padding: 15,
    margin: 2,
    backgroundColor: '#4f4b4b'

  },
  textMargin: {
    marginLeft: 4
  },
  container: { 
    padding: 15,
    alignItems: 'center'
  }
});
