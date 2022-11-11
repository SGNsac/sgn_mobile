import React, { useState } from 'react'
import { Alert } from 'react-native'
import Button from '../../components/button'
import Container from '../../components/container'
import ImageLogo from '../../components/imageLogo'
import Input from '../../components/textInput'
import api from '../../services/axios'

interface Inavigation{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigation : any
}

const SignUp : React.FC<Inavigation> = ({ navigation } : Inavigation) => {
  const [user, setUser] = useState('')

  const [password, setPassword] = useState('')

  const showAlertSucess = () => {
    Alert.alert(
      '',
      'Senha trocada com sucesso',
      [
        {
          text: 'Ok',
          onPress: () => navigation.navigate('Login')
        }
      ]
    )
  }

  const update = () => {
    api.post('usuario/changePassword',
      {

        user,
        password

      }
    )

      .then(

        () => {
          showAlertSucess()
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
          update()
        }}
       textButton={'Trocar senha'}

      />

    </Container>

  )
}

export default SignUp
