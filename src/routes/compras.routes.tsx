import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { useContext } from 'react'
import { AuthContext } from '../contexts/contextApi'
import ComprasHome from '../pages/comprasHome'
import EstoqueHome from '../pages/estoqueHome'
import Pedidos from './pedido.routes'
const Drawer = createDrawerNavigator()

const Navigator = () => {
  const { page } = useContext(AuthContext)

  return (

    <NavigationContainer
      independent={true}
    >

      <Drawer.Navigator
        initialRouteName={page}
      >

        <Drawer.Screen

          name='Compras'

          component={ComprasHome}

          options={{
            headerTitleAlign: 'center',
            headerTitle: 'Compras',
            headerTintColor: '#3474A4',
            headerTitleStyle: {
              fontWeight: 'bold'
            },
            headerStyle: {
              borderBottomColor: '#3474A4',
              borderBottomWidth: 1

            }
          }}
        />

        <Drawer.Screen

          name="Pedidos"

          component={Pedidos}

          options={{
            headerTitleAlign: 'center',
            headerTitle: 'Pedidos',
            headerTintColor: '#3474A4',
            headerTitleStyle: {
              fontWeight: 'bold'
            },
            headerStyle: {
              borderBottomColor: '#3474A4',
              borderBottomWidth: 1

            }
          }}

        />

      </Drawer.Navigator>

    </NavigationContainer>

  )
}

export default Navigator
