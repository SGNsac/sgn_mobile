/* eslint-disable @typescript-eslint/no-explicit-any */
import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import styles from './styles'
import api from '../../services/axios'
import { AuthContext } from '../../contexts/contextApi'
import CardMoviDetalhe from '../../components/cardMoviDetalhe'

const MovDiariaDetalhe: React.FC = ({ route }: any) => {
  const { login } = useContext(AuthContext)
  const [date, setDate] = useState()
  const [dateFormat, setDateFormat] = useState('')
  const [response, setResponse] = useState([])
  const [loading, setLoading] = useState(false)

  const dates = new Date(route.params.data)
  useEffect(() => {
    let data: any
    setDate(route.params.data)
    dates.getDate() > 10 ? data = dates.getDate() : data = '0' + dates.getDate()

    let month: any = dates.getMonth() + 1

    month < 10 ? month = '0' + (dates.getMonth() + 1) : month = (dates.getMonth() + 1)

    setDateFormat(data + ' / ' + month + ' / ' + dates.getFullYear())

    api.get(`usuario/movimentoDiario/${login}/${date}`)
      .then(
        (resp) => {
          setResponse(resp.data.message)
          setLoading(true)
          console.log(`usuario/movimentoDiario/${login}/${dates.getFullYear() + '-' + dates.getMonth() + '-' + dates.getDate()}`)
        }
      )
      .catch(erro => console.log(erro))
  }, [])

  console.log(dates)

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Resumo {dateFormat}</Text>
      {loading === false ? <ActivityIndicator /> : ''}
      <FlatList
        style={styles.flatList}
        renderItem={(item) => {
          return <CardMoviDetalhe datas={item} />
        }}
        data={response}
      />
    </View>
  )
}

export default MovDiariaDetalhe
