import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import MovDiaria from './movDiaria.routes'
import GerencialHome from '../pages/bancarioHome'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useContext } from 'react'
import { AuthContext } from '../contexts/contextApi'
const Drawer = createDrawerNavigator()

const Navigator = () => {
  const { modal, setModal, pageGerencial } = useContext(AuthContext)

  return (

    <NavigationContainer
      independent={true}
    >

      <Drawer.Navigator
        initialRouteName={pageGerencial}
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
            headerRight: () => (
              <TouchableOpacity
                onPress={() => {
                  modal === false ? setModal(true) : setModal(false)
                }}
              >
                <Icon
                  name='filter'
                  size={20}
                  color='#3474A4'
                  style={{ marginRight: 20 }}
                />
              </TouchableOpacity>
            ),
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
