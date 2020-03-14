import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

export default function App() {

  const [people, setPeople] = useState([
    {name: 'Thierry', key: '1'},
    {name: 'Joachim', key: '2'},
    {name: 'Olivier', key: '3'},
    {name: 'Jan', key: '4'},
    {name: 'Jend', key: '5'},
    {name: 'Dilip', key: '6'},
    {name: 'Ram', key: '7'},
    {name: 'Alex', key: '8'},
    {name: 'Luke', key: '9'},
  ]);

  return (
    <View style={styles.container}>
      <FlatList
      data={people}
      renderItem={({item})=>(
        <Text style={styles.item}>{item.name}</Text>
      )}/>
      {/* <ScrollView>
      {people.map(item => (
            <View key={item.key}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
      ))}
      </ScrollView> */}
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
