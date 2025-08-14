

import { Tabs } from 'expo-router'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

export default function TabsLayout () {
  return (

    <Tabs

    // En función de la ruta carga unas cosas u otras
    screenOptions={  ({ route }) => ({

        tabBarIcon : ({ focused, color, size}) => {

            let iconName : any

            if(route.name === 'home'){
                iconName = focused ? 'home' : 'home-outline'
            } else if(route.name === 'perfil'){
                iconName = focused ? 'person-circle' : 'person-circle-outline'
            }else{
                iconName = focused ? 'speedometer' : 'speedometer-outline'
            }

            return <Ionicons name= {iconName} size = {size} color={color} />
        },

        tabBarActiveTintColor : 'tomato',
        tabBarInactiveTintColor : 'gray'
    })}
        
    >
        <Tabs.Screen name='home' options={ {title :  'home'}} />
        <Tabs.Screen name='perfil' options={ {title :  'Perfil'}} />
        <Tabs.Screen name='panel' options={ {title :  'Panel'}} />
    </Tabs>
   
  )
}
