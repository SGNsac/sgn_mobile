/* eslint-disable @typescript-eslint/no-explicit-any */
import { Text, TouchableOpacity, View } from 'react-native'
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
    <View

      style={styles.area}

    >
      <TouchableOpacity

          onPress={
            () => onPressFunction()
          }

          style={styles.areaButton}

      >
          <Text style={styles.textButton}>

              {textButton}

          </Text>

      </TouchableOpacity>
    </View>
  )
}

export default Button
