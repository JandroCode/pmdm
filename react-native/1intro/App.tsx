import { StatusBar } from 'expo-status-bar';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import styles from './styles/Main';
import Boton from './components/Boton';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.texto}>Abre tu app y empieza a  trabajar!</Text>
        <StatusBar style="auto" />
      </View>

      <View style={styles.segundoContenedor}>
        {/* <Button title='Click'></Button> */}

        {/* <Pressable style={styles.botonSegundoContenedor}>
          <Text style={styles.textoBoton}>Click</Text>
        </Pressable> */}

        <Boton label='Guardar' colorBoton='#ecf312ff' colorTextoBoton='black' />
        <Boton label='Borrar' colorBoton='#c63013ff'  colorTextoBoton='#fff'/>
        
      </View>

      
    </>

  );
}

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 100,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   texto : {
//     fontSize: 50,
//     fontWeight: 200,
//     textAlign: 'center'
//   }
// });
