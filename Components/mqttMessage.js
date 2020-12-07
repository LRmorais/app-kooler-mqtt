import React, { useState } from 'react';

export const DadosContext = React.createContext({})
const DadosProvider = ({children}) =>{

    const [mensagem, setMensagem] = useState([]);
    const [id, setId] = useState('');
    const [name, setName] = useState('')
    const [pass, setPass] = useState('')

    const options = {
        clientId: 'mqtt-board-panel-7e94a82b',
        username: 'xp0NIKLjt1BTbB9paRlUJmg5wt3TmqQKFFlbfWkwLKgKbdXcS9Wpl0kHhcqtq71T',
        password: '',
    }
    var mqtt = require('@taoqf/react-native-mqtt')
    var client = mqtt.connect('wss://mqtt.flespi.io:443', options)
    var topic = 'test'

    client.on('message', (topic, message)=> {
        message = message.toString()
        setMensagem(message)
    })
    client.on('connect', ()=>{
        client.subscribe(topic)
    })
    //console.log(mensagem)
    return(
        <DadosContext.Provider value={{mensagem,id,name,pass,setMensagem,setId,setName,setPass}}>
            {children}
        </DadosContext.Provider>
        )
    }

export default DadosProvider;