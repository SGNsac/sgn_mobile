import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Pedido from '../pages/pedidos'
import DetalhePedido from '../pages/detalhePedido'

const Stack = createStackNavigator()

const AuthRoutesHome = () => (

    <Stack.Navigator>
        <Stack.Screen

            name="Pedido"

            component={Pedido}

            options={{ headerShown: false }}

        />

        <Stack.Screen

            name="DetalhePedido"

            component={DetalhePedido}

            options={{ headerShown: false }}

        />

    </Stack.Navigator>

)

export default AuthRoutesHome
