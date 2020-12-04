import React, {useContext} from 'react'
import {DadosContext} from './mqttMessage.js';
import { View, Text, StyleSheet} from 'react-native';


const App2 = () => {
    const context = useContext(DadosContext)
    const {mensagem, setMensagem} = context
    return(
        <View style={styles.container}>
            <Text style={styles.txt}>Latitude</Text>
            <Text>
                {/* {mensagem} */}
                
            </Text>
            <Text style={styles.txt}>Longitude</Text>
            <Text>
                {mensagem}
            </Text>
        </View>
    )
}

export default App2;

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      
    },
    txt: {    
        color:'white',
        margin:10,
        
    }
  });