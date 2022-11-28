/* eslint-disable @typescript-eslint/no-explicit-any */
import { ActivityIndicator, FlatList, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import api from '../../services/axios'
import CardPedidoDetalhe from '../../components/cardPedidoDetalhe'
import Button from '../../components/buttonConfAction'
import HeaderPedido from '../../components/headerPedido'

const DetalhePedido: React.FC = ({ route }: any) => {
  const { dados } = route.params
  const pediCod = dados.PEDI_COD
  const ass = dados.ASS
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(
    () => {
      api.get(`pedido/detalhe/${pediCod}`)
        .then((response) => {
          setData(response.data.message)
          setLoading(true)
        })
        .catch((error) => {
          alert(error)
        })
    }, [])

  const aprovarPedido = () => {
    api.put(`pedido/${ass}/${pediCod}`)
      .then((response) => {
        alert('Pedido atualizado')
      })
      .catch((error) => {
        alert(error)
      })
  }

  return (
    <View
      style={{ height: '100%', backgroundColor: '#FFF' }}
    >
      {loading === false ? <ActivityIndicator/> : ''}
      <Button
        functionOnpress={() => {
          aprovarPedido()
        }}
        textButton={'Aprove pedidos'}
      />
      <HeaderPedido
        datas={dados}
      />
      <FlatList
        style={{ width: '100%', flex: 1 }}
        renderItem={(item) => {
          return <CardPedidoDetalhe datas={item} />
        }}
        data={data}
      />

    </View>
  )
}

export default DetalhePedido
