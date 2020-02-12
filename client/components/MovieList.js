import React, { useRef, useState } from 'react';
import { Text, FlatList, StyleSheet, TextInput } from 'react-native';
import MovieCard from './MovieCard';
import useRequest from '../hooks/useRequest';
import axios from 'axios';

const MovieList = props => {
  const [title, setTitle] = useState('');
  // const title = useRef('');
  const { movies, addMovieToDb } = useRequest();

  const onSubmit = () => {
    axios
      .get(
        `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/${title}`,
        {
          headers: {
            'content-type': 'application/octet-stream',
            'x-rapidapi-host':
              'imdb-internet-movie-database-unofficial.p.rapidapi.com',
            'x-rapidapi-key':
              '5b5732de93msh3cd2ea93eda46cap17bbc4jsn3de9c6dab431',
          },
        }
      )
      .then(({ data }) => {
        const { id, title, year, length, rating, poster, plot } = data;
        if (!year) {
          alert('Movie not found');
        } else {
          addMovieToDb({ id, title, year, length, rating, poster, plot });
        }
        setTitle('');
      })
      .catch(console.log);
  };

  const header = (
    <>
      <Text style={styles.welcome}>Welcome to Indo XXI 2.0!</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gold',
          borderWidth: 1,
          color: 'white',
        }}
        // ref={title}
        onChangeText={text => setTitle(text)}
        value={title}
        onSubmitEditing={() => onSubmit()}
        placeholder='Add Movie'
        placeholderTextColor='grey'
      />
    </>
  );

  return (
    <FlatList
      ListHeaderComponent={header}
      contentContainerStyle={styles.contentContainer}
      data={movies}
      renderItem={({ item }) => (
        <MovieCard movie={item} navigation={props.navigation} />
      )}
      keyExtractor={item => item.id}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    width: '100%',
  },
  welcome: {
    fontSize: 20,
    fontFamily: 'serif',
    textAlign: 'center',
    color: 'white',
    margin: 10,
  },
});

export default MovieList;
