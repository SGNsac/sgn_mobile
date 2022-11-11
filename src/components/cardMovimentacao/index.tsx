import { TouchableOpacity, View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'

interface props {
  datas: any
}
const CardMovimentacao: React.FC<props> = ({ datas }: props) => {
  const date = new Date(datas.item.DATA)
  const month = date.getMonth() + 1
  const navigation = useNavigation()
  let monthFormat

  let dates

  month >= 10 ? monthFormat = month : monthFormat = '0' + month

  date.getDate() >= 10 ? dates = date.getDate() : dates = '0' + date.getDate()

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate('MovDiariaDetalhe', { data: datas.item.DATA })
      }}
    >
      <View style={styles.card}>
        <View style={styles.cardTop}>
          <View>
            <Text style={styles.debito}>Debito</Text>
            <Text style={styles.debito}>R$ {datas.item.DEBITO.toFixed(2)}</Text>
          </View>
          <View>
            <Text style={styles.credito}>Credito</Text>
            <Text style={styles.credito}>R$ {datas.item.CREDITO.toFixed(2)}</Text>
          </View>
        </View>
        <View style={styles.cardBottom}>
          <Text style={styles.data}>Data   </Text>
          <Text style={styles.data2}>{dates + ' / ' + monthFormat + ' / ' + date.getFullYear()}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default CardMovimentacao
