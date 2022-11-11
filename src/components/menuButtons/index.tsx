/* eslint-disable @typescript-eslint/no-explicit-any */
import { TouchableOpacity, Text, Image } from 'react-native'
import React from 'react'
import styles from './styles'

interface Ibtn {
  image: any;
  text: string;
  onPress:any;
}

const MenuButton : React.FC<Ibtn> = ({ image, text, onPress } : Ibtn) => {
  return (
    <TouchableOpacity style={styles.areaBtn}
      onPress={() => {
        onPress()
      }}
    >

        <Image

          source={image}

          style={styles.img}

        />

        <Text

          style={styles.text}

        >

          {text}

        </Text>

    </TouchableOpacity>
  )
}

export default MenuButton
