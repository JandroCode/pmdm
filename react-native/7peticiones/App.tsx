import axios from 'axios';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View, Image, ActivityIndicator} from 'react-native';

export default function App() {

  type Character = {
    id:number,
    name:string,
    status:string,
    species:string,
    image:string
  }

  const [personajes, setPersonajes] = useState<Character[]>([])

  // Con async - await
  useEffect(() => {
  const obtenerPersonajes = async () => {
    try {
      const res = await axios.get("https://rickandmortyapi.com/api/character");
      setPersonajes(res.data.results);
    } catch (err) {
      console.log(err);
    } 
  }

  obtenerPersonajes();
}, []);


  // Con promesas (then)
  // useEffect(() => {
  //   axios.get("https://rickandmortyapi.com/api/character")
  //     .then(res => {
  //         setPersonajes(res.data.results);
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }, [])


  return (
    <FlatList
        data={personajes}
        keyExtractor={ (item) => item.id.toString()}
        renderItem={ ( { item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image}} style={styles.image}/>

            <View>
              <Text>{item.name}</Text>
              <Text>{item.species}</Text>
              <Text>{item.status}</Text>

            </View>
          </View>
        )}

        contentContainerStyle={styles.container}
     />
  
  );
}

const styles = StyleSheet.create({

  card:{
    flexDirection: 'row',
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#eee',
    alignItems: 'center',
    borderRadius: 5

  },
  container:{
    marginTop: 80,
    padding: 10
  },

  image:{
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    marginRight: 15
  }

});
