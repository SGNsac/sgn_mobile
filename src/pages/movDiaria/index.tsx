import { View, FlatList } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import api from '../../services/axios'
import { AuthContext } from '../../contexts/contextApi'
import CardMovimentacao from '../../components/cardMovimentacao'
const MovDiaria: React.FC = () => {
  const { login } = useContext(AuthContext)
  const [response, setResponse] = useState([])
  useEffect(() => {
    api.get(`usuario/movimentoDiario/${login}`)
      .then((json) => {
        setResponse(json.data.message)
      })
      .catch((err) => {
        alert(err.message)
        console.log(err)
      })
  }, [])

  return (
    <View>
      <FlatList
        style={{ backgroundColor: '#FFF', minHeight: '100%' }}
        renderItem={(item) => {
          return <CardMovimentacao datas={item} />
        }}
        data={response}
      />
    </View>
  )
}

export default MovDiaria
