import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [name, setName] = useState('Thierry');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Root Component Header!</Text>
      </View>
      <View style={styles.body}>
        <Text>Hello, my name is {name}.</Text>
        <Text style={styles.boldText}>De kat krabt de krollen van de trap.
          <Text>TEST</Text>
        </Text>
        <Text>De kat krabt de krollen van de trap.</Text> 
        <Text>De kat krabt de krollen van de trap.</Text>
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
  header: {
    backgroundColor: 'pink',
    padding: 20,
  },
  boldText: {
    fontWeight: 'bold'
  },
  body: {
    backgroundColor: 'yellow',
    padding: 20
  }
});
