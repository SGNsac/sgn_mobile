import { FlatList, Text } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import api from '../../services/axios'
import { AuthContext } from '../../contexts/contextApi'
// import CardPedido from '../../components/cardPedido'
import Container from '../../components/container'
import CardPedido from '../../components/cardPedido'

const Pedidos: React.FC = () => {
  const { usuaCod } = useContext(AuthContext)
  const [response, setResponse] = useState([])
  const [dados, setDados] = useState([])
  useEffect(() => {
    api.get(`pedido/${usuaCod}`)
      .then((json) => {
        setResponse(json.data.message)
        console.log(`pedido/${usuaCod}`)
      })
      .catch((err) => {
        alert(err.message)
      })
  }, [dados])

  console.log(response)

  return (
    <Container>
      <FlatList
        style={{ width: '100%' }}
        renderItem={(item) => {
          return <CardPedido datas={item} />
        }}
        data={response}
      />
    </Container>
  )
}

export default Pedidos
