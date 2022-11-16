import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { useContext } from 'react'
import { AuthContext } from '../contexts/contextApi'
import EstoqueHome from '../pages/EstoqueHome'
import Pedidos from '../pages/pedidos'
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

          name='Estoque'

          component={EstoqueHome}

          options={{
            headerTitleAlign: 'center',
            headerTitle: 'Estoque',
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
            headerTitle: 'Estoque',
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
