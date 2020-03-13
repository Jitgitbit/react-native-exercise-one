import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {

  const [name, setName] = useState('Thierry');
  const [age, setAge] = useState('40');

  const pressHandler = () => {
    setName('Ikki');
    setAge('39');
  };

  return (
    <View style={styles.container}>

      <Text>Enter name:</Text>
      <TextInput
      multiline
      style={styles.input}
      onChangeText={(value)=> setName(value)}
      placeholder={'enter your name here'} />
      <TextInput 
      keyboardType='numeric'
      style={styles.input}
      onChangeText={(val)=> setAge(val)}
      placeholder={'age 99?'} />

      <Text>Hello, my name is {name}, age: {age}</Text>
1
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 20
  },
  input: {
    margin: 10,
    borderWidth: 1,
    borderColor:'#777',
    padding:8,
    width:200
  }
});
