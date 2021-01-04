import React from 'react';
import { View, StyleSheet } from 'react-native';
import { List } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';


const Info = ({ navigation }) => {

  const partida = "Vacina 1"
  return (
    <View style={styles.container}>

      <List.Section>
        <List.Subheader style={{ fontSize: 20 }}>Vacinas </List.Subheader>
        <List.Item
          titleStyle={{ fontSize: 20 }}
          title="First Item"
          onPress={() => navigation.goBack("Home")}
          left={() => <Icon name="desktop-outline" style={{ fontSize: 30, paddingLeft: 20, marginRight: 20 }} />} />

        <List.Item
          titleStyle={{ fontSize: 20 }}
          title={partida}
          onPress={() => navigation.goBack("Home")}
          left={() => <Icon name="desktop-outline" style={{ fontSize: 30, paddingLeft: 20, marginRight: 20 }} />}
        />

        <List.Item
          titleStyle={{ fontSize: 20 }}
          title="Second Item"
          onPress={() => navigation.goBack("Home")}
          left={() => <Icon name="desktop-outline" style={{ fontSize: 30, paddingLeft: 20, marginRight: 20 }} />}
        />

        <List.Item
          titleStyle={{ fontSize: 20 }}
          title="Second Item"
          onPress={() => navigation.goBack("Home")}
          left={() => <Icon name="desktop-outline" style={{ fontSize: 30, paddingLeft: 20, marginRight: 20 }} />}
        />

        <List.Item
          titleStyle={{ fontSize: 20 }}
          title="Second Item"
          onPress={() => navigation.goBack("Home")}
          left={() => <Icon name="desktop-outline" style={{ fontSize: 30, paddingLeft: 20, marginRight: 20 }} />}
        />
      </List.Section>
    </View>
  );
};
export default Info;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#009387'

  },
});