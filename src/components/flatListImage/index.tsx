/* eslint-disable import/no-absolute-path */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { View, ListRenderItemInfo } from 'react-native'
import React from 'react'
import styles from './styles'

import ItemImage from './imgItem'
import SwiperFlatList from 'react-native-swiper-flatlist'

const FlatListImage : React.FC = ({ navigation }:any) => {
  const data = [
    {
      id: 1,
      message: 'Movimentação diaria',
      path: require('C:/Users/Reinaldo/Documents/sgn_mobile/src/assets/img/man-gc96628522_640.jpg'),
      page: 'MovimentacaoDiaria',
      modulo: 'Bancario'
    },
    {
      id: 2,
      message: 'Aprove pedidos',
      path: require('C:/Users/Reinaldo/Documents/sgn_mobile/src/assets/img/movimentacao.jpg'),
      page: 'Pedidos',
      modulo: 'Estoque'
    },
    {
      id: 3,
      message: 'Faça solicitações',
      path: require('C:/Users/Reinaldo/Documents/sgn_mobile/src/assets/img/movimentacao.jpg'),
      page: 'FazerSolicitacoes',
      modulo: 'Bancario'

    }

  ]

  return (

    <View

        style={styles.container}

    >

        <SwiperFlatList

            autoplay
            autoplayLoop
            showsHorizontalScrollIndicator={false}
            data={data}
            renderItem={({ item }) => <ItemImage item={item} />}
            horizontal={true}
            keyExtractor={(item) => item.id.toString()}

        />

    </View>

  )
}

export default FlatListImage
