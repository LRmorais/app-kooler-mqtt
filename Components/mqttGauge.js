import React, {useContext} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {DadosContext} from './mqttMessage.js';
import RNSpeedometer from 'react-native-speedometer'
import { List } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

const Gauge = () =>{
  const context = useContext(DadosContext)
  const {mensagem, setMensagem} = context
  return(
    <View style={styles.container}>
      <Text style={{fontSize:30,color:'white',textAlign:'center',margin:10}}>Temperatura:</Text>
      <RNSpeedometer 
      value={30}
      minValue={0}
      maxValue={100} 
      size={310} 
      labels={
        [
          {
            name: 'Too Slow',
            labelColor: '#ff2900',
            activeBarColor: '#ff2900',
          },
          {
            name: 'Very Slow',
            labelColor: '#ff5400',
            activeBarColor: '#ff5400',
          },
          {
            name: 'Slow',
            labelColor: '#f4ab44',
            activeBarColor: '#f4ab44',
          },
          {
            name: 'Normal',
            labelColor: '#f2cf1f',
            activeBarColor: '#f2cf1f',
          },
          {
            name: 'Fast',
            labelColor: '#14eb6e',
            activeBarColor: '#14eb6e',
          },
          {
            name: 'Unbelievably Fast',
            labelColor: '#00ff6b',
            activeBarColor: '#00ff6b',
          },
        ]
      }
      />
      <View style={styles.text}></View>
      <List.Item
          titleStyle={{ fontSize: 20 }}
          descriptionStyle={{fontSize: 20}}
          title="Temperatura Ideal"
          description="A temperatura ideal deve estar em torno de - 16°"
          onPress={() => navigation.goBack("Home")}
          left={() => <Icon name="thermometer-outline" style={{ fontSize: 30, marginRight: 15 }} />}
        />
    </View>
  )
}
export default Gauge;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#694fad',
    padding: 10
  },
  text:{
    color:'white',
    marginTop: 50,
    fontSize: 20
  }
});
