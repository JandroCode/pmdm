import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [contador, setContador] = useState(0)

  const incrementar = () => {
    setContador(contador +1)
  }

  const decrementar = () => {
    setContador(contador -1)
  }

  const reset = () => {
    setContador(0)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contador</Text>
      <Text style={styles.contador}>{contador}</Text>

      {/* <View>

        <View style={styles.boton}>
          <Button title='Incrementar' color='green' onPress={incrementar}></Button>
        </View>

        <View style={styles.boton}>
          <Button title='Decrementar' color='#d3163cff' onPress={decrementar}></Button>
        </View>


        <View style={styles.boton}>
          <Button title='Reset' color='#879924ff' onPress={reset}></Button>
        </View>

      </View> */}

       {/* Segunda versión */}
      <View>

        <View style={styles.boton}>
          <Button title='Incrementar' color='green' onPress={() => setContador(contador+1)}></Button>
        </View>

        <View style={styles.boton}>
          <Button title='Decrementar' color='#d3163cff' onPress={() => setContador(contador-1)}></Button>
        </View>


        <View style={styles.boton}>
          <Button title='Reset' color='#879924ff' onPress={() => setContador(0)}></Button>
        </View>

      </View>

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

  titulo: {
    fontSize: 32,
    marginBottom: 20,
    fontWeight: 'bold'
  },

  contador: {
    fontSize: 48,
    marginBottom: 20,
    fontWeight: 200
  },

  boton: {
    marginVertical: 6,
    width: 200
  }

});
