import { View, ImageBackground, Text, TouchableOpacity, Dimensions } from 'react-native'
import React, { useContext } from 'react'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import { AuthContext } from '../../../contexts/contextApi'

const itemImage = ({ item } : any) => {
  const screen = Dimensions.get('screen')

  const { setPageGerencial } = useContext(AuthContext)

  const width = (screen.width / 100) * 80

  const navigation = useNavigation()

  const attPage = () => {
    setPageGerencial(item.page)
  }

  return (
        <TouchableOpacity

            style={styles.containerImage}
            onPress={ async () => {
              attPage()

              navigation.navigate(item.modulo)
            }}

        >

            <ImageBackground

                source={item.path}
                style={[styles.image, { width }]}
                imageStyle={{ borderRadius: 30 }}

            >

                <View

                    style={styles.overlay}

                >

                </View>

                <Text

                    style={styles.text}

                >

                    {item.message}

                </Text>

            </ImageBackground>

        </TouchableOpacity>
  )
}

export default itemImage
