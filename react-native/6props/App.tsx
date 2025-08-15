import { StatusBar } from 'expo-status-bar';

import HijoComponent, { ContactoType } from './components/Contacto';
import Contacto from './components/Contacto';
import { ScrollView, View } from 'react-native';

import { StyleSheet } from 'react-native';

const contactos: ContactoType[] = [
  { nombre: "Ana Torres", telefono: "+34 600 123 456" },
  { nombre: "Pedro Sánchez", telefono: "+34 611 234 567" },
  { nombre: "María López", telefono: "+34 622 345 678" },
  { nombre: "Luis Fernández", telefono: "+34 633 456 789" },
  { nombre: "Carmen Ruiz", telefono: "+34 644 567 890" },
  { nombre: "José Martínez", telefono: "+34 655 678 901" },
  { nombre: "Lucía Gómez", telefono: "+34 666 789 012" },
  { nombre: "Carlos Ramírez", telefono: "+34 677 890 123" },
  { nombre: "Isabel Morales", telefono: "+34 688 901 234" },
  { nombre: "Francisco Ortega", telefono: "+34 699 012 345" },
  { nombre: "Rosa Herrera", telefono: "+34 610 123 678" },
  { nombre: "Javier Castro", telefono: "+34 621 234 789" },
  { nombre: "Marta Iglesias", telefono: "+34 632 345 890" },
  { nombre: "Sergio Navarro", telefono: "+34 643 456 901" },
  { nombre: "Beatriz Domínguez", telefono: "+34 654 567 012" },
  { nombre: "Alberto Jiménez", telefono: "+34 665 678 123" },
  { nombre: "Patricia Vega", telefono: "+34 676 789 234" },
  { nombre: "Raúl Serrano", telefono: "+34 687 890 345" },
  { nombre: "Teresa Márquez", telefono: "+34 698 901 456" },
  { nombre: "Adrián Cordero", telefono: "+34 610 012 567" },
  { nombre: "Silvia Campos", telefono: "+34 621 123 678" },
  { nombre: "Manuel Peña", telefono: "+34 632 234 789" },
  { nombre: "Gloria Fuentes", telefono: "+34 643 345 890" },
  { nombre: "Óscar Paredes", telefono: "+34 654 456 901" },
  { nombre: "Pilar Estrada", telefono: "+34 665 567 012" },
  { nombre: "Andrés Cortés", telefono: "+34 676 678 123" },
  { nombre: "Elena Duarte", telefono: "+34 687 789 234" },
  { nombre: "Héctor Bravo", telefono: "+34 698 890 345" },
  { nombre: "Verónica Lozano", telefono: "+34 610 901 456" }
];


export default function App() {
  return (
    <ScrollView style={styles.container}>
      {/* <Contacto
        nombre='Juan'
        telefono='654543214'
      />
      <Contacto
        nombre='Marta'
        telefono='981877654'
      />
      <Contacto
        nombre='Juan'
        telefono='654543214'
      />
      <Contacto
        nombre='Marta'
        telefono='981877654'
      />

      <Contacto
        nombre='Juan'
        telefono='654543214'
      />
      <Contacto
        nombre='Marta'
        telefono='981877654'
      />

      <Contacto
        nombre='Juan'
        telefono='654543214'
      />
      <Contacto
        nombre='Marta'
        telefono='981877654'
      />

      <Contacto
        nombre='Juan'
        telefono='654543214'
      />
      <Contacto
        nombre='Marta'
        telefono='981877654'
      />

      <Contacto
        nombre='Juan'
        telefono='654543214'
      />
      <Contacto
        nombre='Marta'
        telefono='981877654'
      />

      <Contacto
        nombre='Juan'
        telefono='654543214'
      />
      <Contacto
        nombre='Marta'
        telefono='9
        81877654'
      /> */}


      {contactos.map((contacto,index)=>(
        <Contacto
          key={index} nombre={contacto.nombre} telefono={contacto.telefono}
         />

      ))}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:80
  }

});

