
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Pub from './Components/mqttMessage.js';
import Gauge from './Components/mqttGauge.js';
import Maps from './Components/mqttMaps.js';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={{marginTop:20, fontSize:20, color:'white'}}>Aplicativo em construção</Text>
      <Gauge/>
      <Pub/>
      <Maps/>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});


export default App;
