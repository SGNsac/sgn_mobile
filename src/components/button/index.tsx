/* eslint-disable @typescript-eslint/no-explicit-any */
import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import { LinearGradient } from 'expo-linear-gradient'

interface buttonProps {

  functionOnpress:any;
  textButton:string

}

const Button : React.FC<buttonProps> = ({ functionOnpress, textButton }) => {
  const onPressFunction = () => {
    functionOnpress()
  }

  return (
    <TouchableOpacity

        onPress={
          () => onPressFunction()
        }

        style={styles.areaButton}

    >
      <LinearGradient

        colors={['#3DA393', '#3470A4']}
        style={styles.Gradient}

      >

        <Text style={styles.textButton}>

            {textButton}

        </Text>

      </LinearGradient>

    </TouchableOpacity>

  )
}

export default Button
