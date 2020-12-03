import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';


const pub = () => {
    const [mensagem, setMensagem] = useState();
    const options = {
        clientId: 'mqtt-board-panel-aa63a758',
        username: 'xp0NIKLjt1BTbB9paRlUJmg5wt3TmqQKFFlbfWkwLKgKbdXcS9Wpl0kHhcqtq71T',
        password: '',
    }
    var mqtt = require('@taoqf/react-native-mqtt')
    var client = mqtt.connect('wss://mqtt.flespi.io:443', options)
    var topic = 'test'
    

        client.on('message', (topic, message)=> {
            message = message.toString()
            console.log(message)
            setMensagem(message)
        })
        client.on('connect', ()=>{
            client.subscribe(topic)
        })
        //console.log(mensagem)
        return(
            <View>
                <Text style={styles.txt}>{mensagem}</Text>
            </View>
        )
};
const styles = StyleSheet.create({
    txt: {
        fontSize: 30
    },
  });

export default pub;