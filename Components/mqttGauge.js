import React, {useContext} from 'react';
import { View, StyleSheet } from 'react-native';
//import Speedometer from 'react-native-speedometer-chart';
import {DadosContext} from './mqttMessage.js';

import RNSpeedometer from 'react-native-speedometer'

const Gauge = () =>{
  const context = useContext(DadosContext)
  const {mensagem, setMensagem} = context
  return(
    <View style={styles.container}>
      <RNSpeedometer value={100} size={310} minValue={-20}/>
    </View>
  )
}
export default Gauge;

const styles = StyleSheet.create({
  container: {
    marginTop:60,
  },
});
/*
const Gauge = () =>{
    const context = useContext(DadosContext)
    const {mensagem, setMensagem} = context
    return(
      <View style={styles.container}>
        <Speedometer
      value={20}
      totalValue={100}
      size={350}
      innerColor="#2c3e50"
      outerColor="#d3d3d3"
      internalColor="#a11e03"
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
      marginTop:60,
    },
  });
  */