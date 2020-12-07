import React, { useContext } from 'react'
import { DadosContext } from './mqttMessage.js';
import { View, Text, StyleSheet, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


const App2 = ({ navigation }) => {
    const context = useContext(DadosContext)
    const { mensagem, setMensagem } = context
    const {id, setId} = context
    const {name, setName} = context
    const {pass,setPass} = context


    const click = () => {
        setId('Client ID')
        setName('User Name')
        setPass('senha')
    }
    return (
        <View style={styles.form}>
            <Text>Client ID</Text>
            <TextInput
                // onChangeText passa os dados inseridos um a um na variavel de estado
                onChangeText = {client => setId(client)}
                style={styles.input}
                placeholder="Informe o ID"
            />
            <Text>Username</Text>
            <TextInput
                onChangeText = {nome => setName(nome)}
                style={styles.input}
                placeholder="Informe o name"
            />
            <Text>Password</Text>
            <TextInput
                onChangeText = {senha => setPass(senha)}
                style={styles.input}
                placeholder="Informe a senha"
            />
            <Text>{mensagem}</Text>
            <Text>{id}</Text>
            <Text>{name}</Text>
            <Text>{pass}</Text>
            <Button
                onPress={() => {
                    navigation.goBack()
                }}
                title="Salvar"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
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