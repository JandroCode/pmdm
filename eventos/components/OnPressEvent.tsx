import React from 'react'
import { Alert, Pressable, Text } from 'react-native'
import styles from '../styles/Main'

export default function OnPressEvent() {

    const handlePress = () => {
        Alert.alert('Haciendo click !')
    }

    return (
        <Pressable style={styles.container} onPress={handlePress}>

            {/* <Text style={[styles.botonPressed, styles.colorBotonTexto]}>Click</Text> */}

            {({ pressed }) => (
                <Text style={[
                    styles.botonPressed, styles.colorBotonTexto,
                    pressed && { opacity: 0.5}  
                    // el "&&" indica que se ha evaluado como True
                ]}
                >Click
                </Text>
            )}

        </Pressable>
    )
}
