
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Gauge from './Components/mqttGauge.js';
import Maps from './Components/mqttMaps.js';
import DadosProvider, {DadosContext} from './Components/mqttMessage.js';

import App2 from './Components/app2.js';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={{marginTop:20, fontSize:20, color:'white'}}>Aplicativo em construção</Text>
      <DadosProvider>
        <Gauge/>
        <Maps/>
        <App2/>
      </DadosProvider>

    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});


export default App;
