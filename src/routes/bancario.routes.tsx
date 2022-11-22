import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import MovDiaria from './movDiaria.routes'
import GerencialHome from '../pages/bancarioHome'
import { useContext } from 'react'
import { AuthContext } from '../contexts/contextApi'
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

          name='Gerencial'

          component={GerencialHome}

          options={{
            headerTitleAlign: 'center',
            headerTitle: 'Bancário',
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

          name="MovimentacaoDiaria"

          component={MovDiaria}

          options={{
            headerTitleAlign: 'center',
            headerTitle: 'Movimentação diária',
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
