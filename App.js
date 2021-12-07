import React, { useState } from 'react';
import {
  View, Text, Button, StyleSheet
} from 'react-native';

const App = () => {
  const [joke, setJoke] = useState('');

  const jokeHandler = () => {
    fetch('https://api.chucknorris.io/jokes/random')
      .then(res => res.json())
      .then(data => setJoke(data.value))
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{joke}</Text>
      <Button title="Press me" onPress={jokeHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 26,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20,
    padding: 10,
  },
});


export default App;