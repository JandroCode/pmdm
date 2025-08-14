import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

// rnfs (Atajo par que genere estilos también)

export default function IMCEvaluador() {

    const [peso, setPeso] = useState<string>('')
    const [altura, setAltura] = useState<string>('')
    const [resultado, setResultado] = useState<string>('')


    const calcularIMC = (pesoNum: number, alturaNum: number) : number => {
        return pesoNum / (alturaNum * alturaNum)
    }

    const evaluarIMC = (imc:number) : string => {

        if(imc < 18.5) return 'Peso bajo'
        if(imc >=18.5 && imc <25) return 'Peso normal'
        if(imc >= 25 && imc <30) return 'Sobrepeso'

        return 'Obesidad'

    }

    const handleCalcular = () => {
        const pesoNum = parseFloat(peso.replace(',' , '.'))
        const alturaNum = parseFloat(altura.replace(',' , '.'))

        if(
            !isNaN(pesoNum) && pesoNum > 0 
            && !isNaN(alturaNum) && alturaNum > 0 
            && alturaNum > 0 && alturaNum < 3
        ){
            const imc = calcularIMC(pesoNum, alturaNum)
            const estado = evaluarIMC(imc)
            setResultado(`Tu IMC es de ${imc.toFixed(2)} y estás en estado de ${estado}`)
        }else{
            setResultado('Por favor introduce valores válidos para peso y altura')
        }


    }



  return (
    <View style={styles.container}>
        <Text style={styles.label}>Altura (m)</Text>

        <TextInput
            style={styles.input}
            keyboardType='decimal-pad'
            value={altura}
            onChangeText={setAltura}
            placeholder='Ej.- 1.79m'

        />

        <Text style={styles.label}>Peso (kg)</Text>

        <TextInput
            style={styles.input}
            keyboardType='decimal-pad'
            value={peso}
            onChangeText={setPeso}
            placeholder='Ej.- 60kg'

        />

        <Button title='Calcular' onPress={handleCalcular} />

        {
            resultado != '' && <Text>{resultado}</Text>
        }


    </View>
  )
}

const styles = StyleSheet.create({
    input : {
        borderBottomWidth: 1,
        marginBottom: 15,
        paddingVertical: 6
    },

    container:{
        marginTop:50,
        padding: 40
    },

    label:{
        fontWeight: 'bold',
        marginTop: 10
    }
})