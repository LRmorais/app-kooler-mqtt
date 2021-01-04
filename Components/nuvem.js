import React, { useContext } from 'react'
import { DadosContext } from './mqttMessage.js';
import { View, Text, StyleSheet } from 'react-native';
//import { TextInput } from 'react-native-gesture-handler';
import { Button ,TextInput } from 'react-native-paper';
import { color } from 'react-native-reanimated';


const App2 = ({ navigation }) => {
    const context = useContext(DadosContext)
    const { mensagem, setMensagem } = context
    const { id, setId } = context
    const { name, setName } = context
    const { pass, setPass } = context

    return (
        <View style={styles.form}>
            <TextInput
            raised theme={{roundness:8}}
            style={{fontSize:20, paddingVertical:10}}
            mode="outlined"
            label="Client ID"
            placeholder="Digite o Client ID da nuvem"
            value={id}
            onChangeText={id => setId(id)}
            />

            <TextInput
            raised theme={{roundness:8}}
            style={{fontSize:20, paddingVertical:10}}
            mode="outlined"
            label="User Name"
            placeholder="Digite o User Name"
            value={name}
            onChangeText={name => setName(name)}
            />

            <TextInput
            raised theme={{roundness:8}}
            style={{fontSize:20, paddingVertical:10}}
            mode="outlined"
            label="Password"
            placeholder="Digite o password"
            value={pass}
            onChangeText={pass => setPass(pass)}
            />          

            <Button 
            raised theme={{roundness:8}}
            style={{backgroundColor: '#1f65ff', marginTop: 20}} 
            icon="send" mode="contained" 
            onPress={() => navigation.goBack("Home")}>
                Salvar
            </Button>

            <Text>{id}</Text>
            <Text>{name}</Text>
            <Text>{pass}</Text>
        </View>
    )
}

export default App2;

const styles = StyleSheet.create({
    form: {
        padding: 12,
    },
    input: {
        height: 40,
        borderColor: '#2c3e50',
        borderWidth: 1,
        marginBottom: 10,
    }
});