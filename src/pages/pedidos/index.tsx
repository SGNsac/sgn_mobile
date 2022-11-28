import { ActivityIndicator, FlatList, Modal } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import api from '../../services/axios'
import { AuthContext } from '../../contexts/contextApi'
// import CardPedido from '../../components/cardPedido'
import Container from '../../components/container'
import CardPedido from '../../components/cardPedido'
import BtnFilter from '../../components/btnFilter'
import ModalFilter from '../../components/modalFilter'

const Pedidos: React.FC = () => {
  const search = () => {
    setLoading(false)
    setModal(!modal)
    if (inputNum !== '') {
      api.get(`pedido/searchNum/${usuaCod}/${inputNum}`)
        .then((json) => {
          setResponse(json.data.message)
          setLoading(true)
          console.log(`pedido/searchNum/${usuaCod}/${inputNum}`)
        })
        .catch((err) => {
          alert(err.message)
        })
    } else if (inputForn !== '') {
      api.get(`pedido/searchForn/${usuaCod}/${inputForn}`)
        .then((json) => {
          setResponse(json.data.message)
          setLoading(true)
        })
        .catch((err) => {
          alert(err.message)
        })
    } else if (inputFunc !== '') {
      api.get(`pedido/searchFunc/${usuaCod}/${inputFunc}`)
        .then((json) => {
          setResponse(json.data.message)
          setLoading(true)
        })
        .catch((err) => {
          alert(err.message)
        })
    } else {
      api.get(`pedido/${usuaCod}`)
        .then((json) => {
          setResponse(json.data.message)
          setLoading(true)
        })
        .catch((err) => {
          alert(err.message)
        })
    }
  }
  const { usuaCod } = useContext(AuthContext)
  const [response, setResponse] = useState([])
  const [dados] = useState([])
  const [modal, setModal] = useState(false)
  const [inputNum, setInputNum] = useState('')
  const [inputForn, setInputForn] = useState('')
  const [inputFunc, setInputFunc] = useState('')
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    api.get(`pedido/${usuaCod}`)
      .then((json) => {
        setResponse(json.data.message)
        setLoading(true)
        console.log(`pedido/${usuaCod}`)
      })
      .catch((err) => {
        alert(err.message)
      })
  }, [dados])

  console.log(inputNum)

  return (
    <Container>
      {loading === false ? <ActivityIndicator /> : ''}
      <BtnFilter

        func={() => {
          setModal(!modal)
        }}

      />
      <FlatList
        style={{ width: '100%' }}
        renderItem={(item) => {
          return <CardPedido datas={item} />
        }}
        data={response}
      />
      <Modal
        animationType="fade"
        transparent={true}
        visible={modal}
        onRequestClose={() => {
          setModal(!modal)
        }}
      >
        <ModalFilter

          funcSearch={() => {
            search()
          } }

          func={() => {
            return setModal(!modal)
          } }

          inputNum={inputNum}

          setInputNum={setInputNum}

          inputForn={inputForn}

          setInputForn={setInputForn}

          inputFunc={inputFunc}

          setInputFunc={setInputFunc}
        />
      </Modal>
    </Container>
  )
}

export default Pedidos
