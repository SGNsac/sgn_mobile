import React, { useState, useContext } from 'react'
import Button from '../../components/button'
import ButtonOnly from '../../components/buttonOnly'
import Container from '../../components/container'
import ImageLogo from '../../components/imageLogo'
import Input from '../../components/textInput'
import { AuthContext } from '../../contexts/contextApi'
import api from '../../services/axios'

interface Inavigation{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigation : any
}

const Login : React.FC<Inavigation> = ({ navigation } : Inavigation) => {
  const [user, setUser] = useState('')
  const {
    setLogin,
    setUsuaCod,
    usuaCod
  } = useContext(AuthContext)

  const [password, setPassword] = useState('')

  const login = () => {
    if (user === '' || password === '') {
      alert('Preencha todos os campos')
      return
    }
    api.post('usuario/login',
      {

        user,
        password

      }
    )

      .then(

        (response) => {
          setLogin(user)
          setUsuaCod(response.data.userCod)
          navigation.navigate('Home')
        }

      )

      .catch(

        (error) => {
          if (error.response) {
            alert(error.response.data.message)
          } else if (error.request) {
            alert(error.request.data.message)
          } else {
            alert(error.data.message)
          }
        }

      )
  }

  console.log(usuaCod)

  return (

    <Container>

      <ImageLogo/>

      <Input

        input={user}
        placeHolder={'Digite seu usuario'}
        setInput={setUser}
        placeHolderColor={'#999999'}
        name="user"
        secureTextEntry={false}

      />

      <Input

        input={password}
        placeHolder={'Digite sua senha'}
        setInput={setPassword}
        placeHolderColor={'#999999'}
        name="lock"
        secureTextEntry={true}

      />

      <Button

        functionOnpress={() => {
          login()
        }}
       textButton={'LOGIN'}

      />

      <ButtonOnly

        text={' Esqueceu a senha? clique aqui '}

        func={
          () => {
            navigation.navigate('SignUp')
          }
        }

      />

    </Container>

  )
}

export default Login
