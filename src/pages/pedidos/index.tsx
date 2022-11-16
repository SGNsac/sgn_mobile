import { FlatList } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import api from '../../services/axios'
import { AuthContext } from '../../contexts/contextApi'
// import CardPedido from '../../components/cardPedido'
import Container from '../../components/container'
import AreaSearch from '../../components/areaSearch'
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
      <AreaSearch/>
      {/* <FlatList
        renderItem={(item) => {
          return <CardPedido datas={item} />
        }}
        data={response}
      /> */}
    </Container>
  )
}

export default Pedidos
