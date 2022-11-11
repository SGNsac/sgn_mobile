/* eslint-disable @typescript-eslint/no-explicit-any */
import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'

interface props{

    text: string,
    func:any

}

const ButtonOnly : React.FC<props> = ({ text, func } : props) => (

    <View

        style={styles.area}

    >

        <TouchableOpacity

            style={styles.areaBtn}
            onPress={() => {
              func()
            } }

        >

            <Text

                style={styles.text}

            >

                {text}

            </Text>

        </TouchableOpacity>

    </View>

)

export default ButtonOnly
