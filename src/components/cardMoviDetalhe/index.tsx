/* eslint-disable @typescript-eslint/no-explicit-any */
import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'

interface props {
  datas: any
}
const CardMoviDetalhe: React.FC<props> = ({ datas }: props) => {
  return (
    <View style={styles.card}>
      <View style={styles.areaText}>
        <Text style={styles.title}>Nome:</Text>
        <Text style={styles.description}>{datas.item.APCO_NOME}</Text>
      </View>
      <View style={styles.areaText}>
        <Text style={styles.title}>Credito:</Text>
        <Text style={styles.description}>{datas.item.MODI_CREDITO}</Text>
      </View>
      <View style={styles.areaText}>
        <Text style={styles.title}>Debito:</Text>
        <Text style={styles.description}>{datas.item.MODI_DEBITO}</Text>
      </View>
      <View style={styles.areaText}>
        <Text style={styles.title}>Saldo anterior:</Text>
        <Text style={styles.description}>{datas.item.MODI_SALDO_ANTES}</Text>
      </View>
      <View style={styles.areaText}>
        <Text style={styles.title}>Conta:</Text>
        <Text style={styles.description}>{datas.item.SUCC_DESC}</Text>
      </View>

    </View>
  )
}

export default CardMoviDetalhe
