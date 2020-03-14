import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {

  const [people, setPeople] = useState([
    {name: 'Thierry', key: '1'},
    {name: 'Joachim', key: '2'},
    {name: 'Olivier', key: '3'},
    {name: 'Jan', key: '4'},
    {name: 'Jend', key: '5'},
    {name: 'Dilip', key: '6'},
    {name: 'Ram', key: '7'},
  ]);

  return (
    <View style={styles.container}>
      {people.map(item => {
        return(
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        )
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:40,
    paddingHorizontal:20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item:{
    marginTop:24,
    padding:30,
    backgroundColor:'pink',
    fontSize:24,
  }
});
