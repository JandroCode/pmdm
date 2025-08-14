import { Pressable, View, Text } from "react-native";
import styles from "../styles/Main";


interface BotonProps{
    label : string,
    colorBoton: string,
    colorTextoBoton : string

    
}

export default function Boton({label, colorBoton, colorTextoBoton} : BotonProps){

    return <View>

         <Pressable style={[ styles.botonSegundoContenedor , {backgroundColor:colorBoton}]}>
          <Text style={[styles.textoBoton , {color: colorTextoBoton}]}>{label}</Text>
        </Pressable>


    </View>



}