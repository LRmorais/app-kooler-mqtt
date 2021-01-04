import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import Maps from './mqttMaps.js';
import DadosProvider, { DadosContext } from './mqttMessage.js';
import { List } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';



const Principal = () => {
    const context = useContext(DadosContext)
    const { mensagem, setMensagem } = context
    return (
        <View style={styles.container}>
            <View>
                <List.Section>
                    <List.Subheader style={{ fontSize: 20 }}>Percurso das Vacinas </List.Subheader>
                    <List.Item
                        titleStyle={{ fontSize: 20, color: "white" }}
                        title="Partida: UFPA"
                        onPress={() => navigation.goBack("Home")}
                        left={() => <Icon name="navigate" style={{ fontSize: 30, paddingLeft: 20, marginRight: 20 }} />} />

                    <List.Item
                        titleStyle={{ fontSize: 20, color: "white" }}
                        title="Destino: COMBÚ"
                        onPress={() => navigation.goBack("Home")}
                        left={() => <Icon name="navigate" style={{ fontSize: 30, paddingLeft: 20, marginRight: 20 }} />}
                    />
                </List.Section>
            </View>
            <Maps />
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column-reverse',
        justifyContent: 'flex-end',
        backgroundColor: '#2c3e50',
    },
    text: {
        fontSize: 20,
        color: 'white',
        margin: 10,
        fontFamily: 'verdana'
    }

});

export default Principal;
