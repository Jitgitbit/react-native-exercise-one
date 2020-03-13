import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  const [name, setName] = useState('Thierry');
  const [person, setPerson] = useState({name: 'Joachim', age: 41});

  const pressHandler = () => {
    setName('Ikki');
    setPerson({name:'Olivier', age: 45});
  };

  return (
    <View style={styles.container}>
        <Text>Hello, my name is {name}.</Text>
        <Text>And his name is {person.name}, age: {person.age}.</Text>
      <View style={styles.buttonContainer}>
        <Button title='update state' onPress={pressHandler}/>
      </View>
    </View>
  );
}

// STYLES ARE NOT AUTOMATICALLY INHERITED !!!
// One exception though: Text widgets within Text Widgets !!!

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 20
  }
});
