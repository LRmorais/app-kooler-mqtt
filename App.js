import React from 'react';

// importação do Provider do material ui para customizações
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

// importação do React Navigator v5, bottom tabs e stack para criar um header dinamico header
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// importação de icones do Ionicons
import Icon from 'react-native-vector-icons/Ionicons';

// importação dos dados pelo context API
import DadosProvider, { DadosContext } from './Components/mqttMessage.js';

// importação dos componentes
import Nuvem from './Components/nuvem.js';
import Principal from './Components/principal.js';
import Temp from './Components/mqttGauge.js';
import DetailsScreen from './Components/info.js';

const Tab = createMaterialBottomTabNavigator();
// usado só para criar headers dinamicos
const DetailsStack = createStackNavigator();
const NuvemStack = createStackNavigator();
const PrincipalStack = createStackNavigator();
const TempStack = createStackNavigator();

// customizãçoes do material ui
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#1f65ff',
  },
  
}

function App() {
  return (
    <DadosProvider>
      <PaperProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          activeColor="white"
          shifting={true}
        >
          <Tab.Screen
            name="Home"
            component={PrincipalStackScreen}
            options={{
              tabBarLabel: 'Localização',
              tabBarColor: '#2c3e50',
              tabBarIcon: ({ color }) => (
                <Icon name="navigate-outline" color={color} size={26} />

              ),
            }} />
          <Tab.Screen
            name="Dados"
            component={TempStackScreen}
            options={{
              tabBarLabel: 'Temperatura',
              tabBarColor: '#694fad',
              tabBarIcon: ({ color }) => (
                <Icon name="thermometer-outline" color={color} size={26} />
              ),
            }}
          />

          <Tab.Screen
            name="Info"
            component={DetailsStackScreen}
            options={{
              tabBarLabel: 'Info',
              tabBarColor: '#009387',
              tabBarIcon: ({ color }) => (
                <Icon name="document-text-outline" color={color} size={26} />
              ),
            }}
          />

          <Tab.Screen
            name="Nuvem"
            component={NuvemStacksScreen}
            options={{
              tabBarLabel: 'Cloud',
              tabBarColor: '#1f65ff',
              tabBarIcon: ({ color }) => (
                <Icon name="cloud-outline"color={color} size={26} />
              ),
            }}
          />
          
        </Tab.Navigator>
      </NavigationContainer>
      </PaperProvider>
    </DadosProvider>
  );
}
export default App;

const PrincipalStackScreen = () => (
  <PrincipalStack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: '#2c3e50',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'normal'
          }
      }}>
          <PrincipalStack.Screen name="Localização" component={Principal} 
          />
  </PrincipalStack.Navigator>
  );

  const TempStackScreen = () => (
    <TempStack.Navigator screenOptions={{
            headerStyle: {
            backgroundColor: '#694fad',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'normal'
            }
        }}>
            <TempStack.Screen name="Localização" component={Temp} 
            />
    </TempStack.Navigator>
    );

const NuvemStacksScreen = () => (
  <NuvemStack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: '#1f65ff',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'normal'
          }
      }}>
          <NuvemStack.Screen name="Cloud" component={Nuvem} 
          />
  </NuvemStack.Navigator>
  );

  const DetailsStackScreen = () => (
    <DetailsStack.Navigator screenOptions={{
            headerStyle: {
            backgroundColor: '#009387',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'normal'
            }
        }}>
            <DetailsStack.Screen name="Informações" component={DetailsScreen} 
            />
    </DetailsStack.Navigator>
    );

    