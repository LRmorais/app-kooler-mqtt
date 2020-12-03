import React, { useState } from 'react';

export const DadosContext = React.createContext({})
const DadosProvider = ({children}) =>{
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
        <DadosContext.Provider value={{mensagem, setMensagem}}>
            {children}
        </DadosContext.Provider>
        )
    }

export default DadosProvider;