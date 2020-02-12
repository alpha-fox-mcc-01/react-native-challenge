import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const MovieCard = props => {
  const { poster, rating } = props.movie;
  return (
    <View style={{ width: '50%' }}>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('Detail', props.movie)}
      >
        <Image
          source={{ uri: poster }}
          style={{ width: '100%', height: 300 }}
        />
      </TouchableOpacity>
      <Text style={styles.textRating}>{rating}</Text>
    </View>
  );
};

const styles = {
  textRating: {
    textAlign: 'center',
    fontFamily: 'serif',
    fontWeight: 'bold',
    position: 'absolute',
    color: 'black',
    fontSize: 18,
    bottom: 12,
    left: 12,
    backgroundColor: 'gold',
    padding: 5,
    borderRadius: 10,
    elevation: 1,
  },
};

export default MovieCard;
