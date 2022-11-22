/* eslint-disable @typescript-eslint/no-explicit-any */
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome'

interface Iprops {
    func: any,
    funcSearch:any,
    inputNum : string,
    setInputNum : any,
    inputForn : string,
    setInputForn : any,
    inputFunc:string,
    setInputFunc :any,
}

const ModalFilter: React.FC<Iprops> = ({ inputFunc, setInputFunc, inputNum, setInputNum, inputForn, setInputForn, func, funcSearch } : Iprops) => {
  return (
        <View style={styles.modalArea}>
            <TouchableOpacity
                style={styles.icon}
                onPress={() => {
                  func()
                }}
            >
                <Icon
                    name='close'
                    size={40}
                    color='#fff'
                />

            </TouchableOpacity>

            <View style={styles.modalAreaInterna}>

                <View>

                    <TextInput

                        onChangeText={setInputNum}

                        value={inputNum}

                        style={styles.textInput}

                        placeholder='Digite o numero do pedido'

                        keyboardType={'numeric'}

                    />

                </View>

                <View>

                    <TextInput

                        onChangeText={setInputForn}

                        value={inputForn}

                        style={styles.textInput}

                        placeholder='Digite o nome fornecedor'

                    />

                </View>

                <View>

                    <TextInput

                        onChangeText={setInputFunc}

                        value={inputFunc}

                        style={styles.textInput}

                        placeholder='Digite o nome funcionario'

                    />

                </View>

                <TouchableOpacity style={styles.btnSearch}

                    onPress={() => {
                      funcSearch()
                    }}

                >

                    <Text

                        style={styles.textSearch}

                    >

                        PESQUISAR

                    </Text>

                    <Icon

                        style={styles.iconSearch}

                        name='search'

                        size={20}

                        color='#fff'

                    />

                </TouchableOpacity>

            </View>

        </View>
  )
}

export default ModalFilter
