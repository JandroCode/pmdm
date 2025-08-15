
import React from 'react'
import { StyleSheet, Text, View } from 'react-native';


export interface ContactoType {
  nombre : string,
  telefono: string
}

export default function Contacto({nombre,telefono} : ContactoType) {
  return (
    <View style={styles.card}>
      <Text style={styles.nombre}>{nombre}</Text>
      <Text  style={styles.telefono}> {telefono}</Text>
    </View>
  )
}

const styles = StyleSheet.create({

  card:{
    paddingHorizontal:80,
    paddingVertical:10,
    backgroundColor:'#e3f2fd',
    borderRadius: 10,
    alignItems: 'center',
    margin:5
  },

  nombre:{
    fontSize:20,
    fontWeight:'bold'
  },

   telefono:{
    fontSize:16,
  }
 
});
