import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome'

const AreaSearch: React.FC = () => {
  const [input, setInput] = useState('')
  const placeHolder = 'Digite o numero do pedido'
  const placeHolderColor = '#999999'
  return (
    <View style={styles.areaInput}>
      <TextInput

        onChangeText={setInput}
        value={input}
        placeholder={placeHolder}
        placeholderTextColor={placeHolderColor}
        style={styles.input}

      />
      <TouchableOpacity>

      <Icon

        name={'search'}
        size={25}
        color="#fff"
        style={styles.icon}

      />

      </TouchableOpacity>

    </View>
  )
}

export default AreaSearch
