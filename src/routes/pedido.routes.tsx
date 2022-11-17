import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Pedido from '../pages/pedidos'
import PedidoDetalhe from '../pages/detalhePedido'

const Stack = createStackNavigator()

interface props{
    id: any
}

const AuthRoutesHome = () => (

    <Stack.Navigator>
        <Stack.Screen

            name="Pedido"

            component={Pedido}

            options={{ headerShown: false }}

        />

        <Stack.Screen

            name="PedidoDetalhe"

            component={PedidoDetalhe}

            initialParams={{ id: '' }}

            options={{ headerShown: false }}

        />

    </Stack.Navigator>

)

export default AuthRoutesHome
