import React, { useState } from 'react'
import { TextInput, View, Text } from 'react-native'
import styles from '../styles/Main'


export default function OnChangeTextEvent() {

  // Creación del hook de useState para manejar el estado
  const [nombre, setNombre] = useState("")

  return (
       <View style={styles.container}>
          <TextInput
            placeholder='Nombre'
            onChangeText={setNombre}
            style={{ borderWidth:1, padding: 10, width : '80%'}}
           />
    
           <Text>Hola , {nombre}</Text>
        
        </View>
  )
}
