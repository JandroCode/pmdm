import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  texto : {
    fontSize: 50,
    fontWeight: 200,
    textAlign: 'center'
  },

  segundoContenedor:{
    marginTop : 30
  },

  botonSegundoContenedor : {
    width: 100,
    backgroundColor: 'green',
    marginLeft : 'auto',
    marginRight : 'auto',
    marginTop : 5,
    borderRadius : 5,
    padding: 10
  },

  textoBoton : {
    color : '#fff',
    textAlign : 'center'
  }

});

export default styles