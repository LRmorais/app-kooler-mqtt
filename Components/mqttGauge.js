import React, {useContext} from 'react';
import { View, StyleSheet } from 'react-native';
import Speedometer from 'react-native-speedometer-chart';
import {DadosContext} from './mqttMessage.js';

const Gauge = () =>{
    const context = useContext(DadosContext)
    const {mensagem, setMensagem} = context
    return(
      <View style={styles.container}>
        <Speedometer
      value={40}
      totalValue={100}
      size={250}
      innerColor="#2c3e50"
      outerColor="#d3d3d3"
      internalColor="#2f6642"
      showText
      text="Temperatura"
      textStyle={{ color: 'white' }}
      showLabels
      labelStyle={{ color: 'blue' }}
      labelFormatter={number => `${number}°`}
      showPercent
      percentStyle={{ color: 'white' }}
    />
    </View>
    )
  }
  export default Gauge;
  const styles = StyleSheet.create({
    container: {
      marginTop:100,
    },
  });