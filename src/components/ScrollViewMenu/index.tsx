/* eslint-disable @typescript-eslint/no-explicit-any */
import { View, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import styles from './styles'
import AreaMenu from '../areaMenu'
import MenuButtons from '../menuButtons'
import { AuthContext } from '../../contexts/contextApi'
import { useNavigation } from '@react-navigation/native'

const ScrollViewMenu : React.FC = () => {
  const { setPage } = useContext(AuthContext)

  const navigation = useNavigation()

  return (

    <View

      style={styles.linear}

    >
      <ScrollView

        style={styles.container}

        showsVerticalScrollIndicator={false}

      >

        <AreaMenu>

          <MenuButtons

            image={require('../../assets/img/modulos_novos/gerencial.png')}

            text={'Gerencial'} onPress={undefined}
          />

          <MenuButtons

            image={require('../../assets/img/modulos_novos/pagar.png')}

            text={'Pagar'} onPress={undefined}
          />

          <MenuButtons

            image={require('../../assets/img/modulos_novos/receber.png')}

            text={'Receber'} onPress={undefined}
          />

        </AreaMenu>

        <AreaMenu>

          <MenuButtons

            image={require('../../assets/img/modulos_novos/bancario.png')}

            text={'Bancario'}

            onPress={() => {
              setPage('GerencialHome')
              navigation.navigate('Bancario')
            }}

          />

          <MenuButtons

            image={require('../../assets/img/modulos_novos/orcamento.png')}

            text={'Orçamento'} onPress={undefined}
          />

          <MenuButtons

            image={require('../../assets/img/modulos_novos/fluxo_de_caixa.png')}

            text={'Fluxo Caixa'} onPress={undefined}
          />

        </AreaMenu>

        <AreaMenu>

          <MenuButtons

            image={require('../../assets/img/modulos_novos/imobiliario.png')}

            text={'Imobiliario'} onPress={undefined}
          />

          <MenuButtons

            image={require('../../assets/img/modulos_novos/contrato-obra.png')}

            text={'Cont. obra'} onPress={undefined}
          />

          <MenuButtons

            image={require('../../assets/img/modulos_novos/compras.png')}

            text={'Compras'} onPress={undefined}
          />

        </AreaMenu>

        <AreaMenu>

          <MenuButtons

            image={require('../../assets/img/modulos_novos/estoque.png')}

            text={'Estoque'}

            onPress={() => {
              setPage('EstoqueHome')
              navigation.navigate('Estoque')
            }}

          />

          <MenuButtons

            image={require('../../assets/img/modulos_novos/locacao.png')}

            text={'Locação'} onPress={undefined}
          />

          <MenuButtons

            image={require('../../assets/img/modulos_novos/comercial.png')}

            text={'Comercial'} onPress={undefined}
          />

        </AreaMenu>

        <AreaMenu>

          <MenuButtons

            image={require('../../assets/img/modulos_novos/interface_contabil.png')}

            text={'Int. Contabil'} onPress={undefined}
          />

          <MenuButtons

            image={require('../../assets/img/modulos_novos/pessoal.png')}

            text={'Pessoal'} onPress={undefined}
          />

          <MenuButtons

            image={require('../../assets/img/modulos_novos/fiscal.png')}

            text={'Fiscal'} onPress={undefined}
          />

        </AreaMenu>

      </ScrollView>

    </View>
  )
}

export default ScrollViewMenu
