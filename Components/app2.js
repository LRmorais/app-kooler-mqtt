import React, {useContext} from 'react'
import {DadosContext} from './mqttMessage.js';
import { View, Text} from 'react-native';


const App2 = () => {
    const context = useContext(DadosContext)
    const {mensagem, setMensagem} = context
    return(
        <View>
            <Text>
                {mensagem}
            </Text>
        </View>
    )
}

export default App2;