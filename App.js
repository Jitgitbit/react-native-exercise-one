import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

export default function App() {

  const [people, setPeople] = useState([
    {name: 'Thierry', id: '1'},
    {name: 'Joachim', id: '2'},
    {name: 'Olivier', id: '3'},
    {name: 'Jan', id: '4'},
    {name: 'Jend', id: '5'},
    {name: 'Dilip', id: '6'},
    {name: 'Ram', id: '7'},
    {name: 'Alex', id: '8'},
    {name: 'Luke', id: '9'},
  ]);

  return (
    <View style={styles.container}>
      <FlatList
      numColumns={2}
      keyExtractor={(item) => item.id}
      data={people}
      renderItem={({item}) => (
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
