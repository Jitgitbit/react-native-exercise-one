import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Root Component Header!</Text>
      </View>
      <View style={styles.body}>
        <Text>De kat krabt de krollen van de trap.</Text>
        <Text>De kat krabt de krollen van de trap.</Text>
        <Text>De kat krabt de krollen van de trap.</Text> 
        <Text>De kat krabt de krollen van de trap.</Text>
      </View>
    </View>
  );
}

// STYLES ARE NOT AUTOMATICALLY INHERITED !!!

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
