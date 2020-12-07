import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import Gauge from './mqttGauge.js';
import Maps from './mqttMaps.js';
import DadosProvider, { DadosContext } from './mqttMessage.js';



const Principal = ({navigation}) => {
    const context = useContext(DadosContext)
    const { mensagem, setMensagem } = context
    return (
        <View style={styles.container}>
                <Gauge/>
                <Maps />
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column-reverse',
        justifyContent:'flex-end',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    
});

export default Principal;
