import { Button, KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { calculadoraPesoIdeal } from '../utils/imcCalculadora'

export default function ImcForm() {

    const [altura, setAltura] = useState<string>('')
    const [imcObjetivo, setImcObjetivo] = useState<string>('22')
    const [pesoIdeal, setPesoIdeal] = useState<number | null>(null)

    const handleCalcular = () => {
        const alturaMetros = parseFloat(altura.replace(',', '.'))
        const imc = parseFloat(imcObjetivo)

        if (!isNaN(alturaMetros) && !isNaN(imc)) {
            const peso = calculadoraPesoIdeal(alturaMetros, imc)
            setPesoIdeal(peso)
        } else {
            setPesoIdeal(null)
        }

    }


    return (
        <KeyboardAvoidingView>
            <View style={styles.container}>
                <Text>Altura (m)</Text>


                <TextInput style={styles.input}
                    keyboardType='decimal-pad'
                    placeholder='Ej.- 1.70'
                    value={altura}
                    onChangeText={setAltura}

                />

                <View style={styles.botonContainer}>
                    <Button title='Calcular' onPress={handleCalcular} />
                </View>

                {
                    pesoIdeal !== null && (
                        <Text>Peso ideal: {pesoIdeal.toFixed(2)} kg</Text>
                    )
                }

            </View>

        </KeyboardAvoidingView>

    )
}



const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        justifyContent: 'center',
        padding: 40

    },

    input: {
        marginTop: 10,
        borderBottomWidth: 1,
        paddingVertical: 6,
        marginBottom: 10
    },
    
    botonContainer :{
        marginBottom: 10
    }
})