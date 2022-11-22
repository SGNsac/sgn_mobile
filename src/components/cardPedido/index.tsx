/* eslint-disable @typescript-eslint/no-explicit-any */
import { TouchableOpacity, Text, View } from 'react-native'
import React from 'react'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import changeReal from '../../utils/chanceReal'

interface props{
  datas:any
}

const CardPedido : React.FC<props> = ({ datas }: props) => {
  const fornecedor = datas.item.FORN_NOME
  const date = new Date(datas.item.PEDI_DATA)
  const month = date.getMonth() + 1
  const navigation = useNavigation()

  let monthFormat

  let dates

  month >= 10 ? monthFormat = month : monthFormat = '0' + month

  date.getDate() >= 10 ? dates = date.getDate() : dates = '0' + date.getDate()

  let fornecedorFormated

  fornecedor.length > 18 ? fornecedorFormated = fornecedor.slice(0, 18) + '...' : fornecedorFormated = fornecedor

  return (

    <TouchableOpacity
      style={styles.card}
      onPress={() => {
        navigation.navigate('DetalhePedido', { dados: datas.item })
      }}
    >

      <View style={styles.cardTopTextArea}>

        <Text style={styles.cardTopTextLeft}>{datas.item.PEDI_NUMERO}</
        Text>
        <Text style={styles.cardTopTextRight}>{dates + ' / ' + monthFormat + ' / ' + date.getFullYear()}</Text>

      </View>

      <View style={styles.cardTextArea}>
        <Text style={styles.cardTextTitle}>Valor : </Text>
        <Text style={styles.cardTextBody}>{changeReal(datas.item.PEDI_VALOR_TOTAL)}</Text>
      </View>

      <View style={styles.cardTextArea}>
        <Text style={styles.cardTextTitle}>Fornecedor : </Text>
        <Text style={styles.cardTextBody}>{fornecedorFormated}</Text>
      </View>

    </TouchableOpacity>
  )
}

export default CardPedido
