import React from 'react'
import MovDiaria from '../pages/movDiaria'
import MovDiariaDetalhe from '../pages/movDiariaDetalhe'

import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

interface props{
    data: any
}

const AuthRoutesHome = () => (

    <Stack.Navigator>
        <Stack.Screen

            name="MovDiaria"

            component={MovDiaria}

            options={{ headerShown: false }}

        />

        <Stack.Screen

            name="MovDiariaDetalhe"

            component={MovDiariaDetalhe}

            initialParams={{ data: '' }}

            options={{ headerShown: false }}

        />

    </Stack.Navigator>

)

export default AuthRoutesHome
