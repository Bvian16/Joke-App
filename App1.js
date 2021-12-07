import React, { useState } from "react";
import { 
  StyleSheet,
  View,
  Text,
  Button,
} from "react-native";

const App = () => {
  const [count, setCount] = useState(0);
  const [times, setTimes] = useState(0);
  
  const change = () => {
    setCount(count+5);
    setTimes(times+1);
  };

  return (
    <View style = {styles.body}>
      <Text style = {styles.text}>{count}</Text>
      <Button title = 'button' onPress={change}></Button>
      <Text style = {styles.text}> you clicked {times} times</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#0000ff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 20,
    margin: 10,
    color: '#fff',
  },
})

export default App;