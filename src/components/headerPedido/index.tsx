/* eslint-disable @typescript-eslint/no-explicit-any */
import { View, Text } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import changeReal from '../../utils/chanceReal'
interface props{
  datas : any;
}

const HeaderPedido : React.FC<props> = ({ datas }) => {
  const dates = new Date(datas.PEDI_DATA)

  let data

  dates.getDate() > 10 ? data = dates.getDate() : data = '0' + dates.getDate()

  let month: any = dates.getMonth() + 1

  month < 10 ? month = '0' + (dates.getMonth() + 1) : month = (dates.getMonth() + 1)

  const formartData = (data + ' / ' + month + ' / ' + dates.getFullYear())

  let obs

  datas.PEDI_OBS === null ? obs = 'Sem valor' : obs = datas.PEDI_OBS

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}><Text style={styles.title}>Fornecedor: </Text>{datas.FORN_NOME}</Text>
        <Text style={styles.text}><Text style={styles.title}>Data de pedido: </Text>{formartData}</Text>
        <Text style={styles.text}><Text style={styles.title}>Empresa: </Text>{datas.EMPR_NOME}</Text>
        <Text style={styles.text}><Text style={styles.title}>Desconto: </Text>{changeReal(datas.PEDI_DESCONTO)}</Text>
        <Text style={styles.text}><Text style={styles.title}>Frete: </Text>{changeReal(datas.PEDI_FRETE)}</Text>
        <Text style={styles.text}><Text style={styles.title}>Número do pedido: </Text>{datas.PEDI_NUMERO}</Text>
        <Text style={styles.text}><Text style={styles.title}>Observação: </Text>{obs}</Text>
        <Text style={styles.text}><Text style={styles.title}>Total mercadoria: </Text>{changeReal(datas.PEDI_TOTAL_MERC)}</Text>
        <Text style={styles.text}><Text style={styles.title}>Valor aprovado: </Text>{changeReal(datas.PEDI_VALOR_APROVADO)}</Text>
        <Text style={styles.text}><Text style={styles.title}>Valor total: </Text>{changeReal(datas.PEDI_VALOR_TOTAL)}</Text>
      </View>
    </View>
  )
}

export default HeaderPedido
