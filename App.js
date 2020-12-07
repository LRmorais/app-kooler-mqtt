import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Principal from './Components/principal.js';
import Nuvem from './Components/nuvem.js';
import { Button, Icon } from 'react-native-elements';
import DadosProvider, { DadosContext } from './Components/mqttMessage.js';

const Stack = createStackNavigator();

const App = () => {
  return (
    <DadosProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Kooler"
          screenOptions={screenOptions}>
          <Stack.Screen
            name="Kooler"
            component={Principal}
            options={({ navigation }) => {
              return {
                title: "Kooler",
                headerRight: () => (
                  <Button
                    onPress={() => navigation.navigate("Nuvem")}
                    type="clear"
                    icon={<Icon name="add" size={28} color="white" />}
                  />
                )
              }
            }}
          />
          <Stack.Screen
            name="Nuvem"
            component={Nuvem}
            options={{
              title: "Dados da Nuvem"
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </DadosProvider>
  );
};
export default App;

const screenOptions = {
  headerStyle: {
    backgroundColor: '#2c3e50'
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold'
  }
};