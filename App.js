import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Button } from 'react-native';
import { createStackNavigator} from 'react-navigation'

import OngScreen from './source/screens/ongScreen';
import LoginScreen from './source/screens/LoginScreen';
import Tab from './source/screens/tab';




/*class App extends Component {

  static navigationOptions = ({navigation}) => ({
    title:'bem vindo',
    header: null
  })

  render() {
    
    return (

      <PesquisaScreen />
    );
  }
}*/


const Navegador = createStackNavigator({
  Login:{
    screen: LoginScreen
  },
  Ong:{
    screen: Tab
  },
})

export default Navegador;


// <Button title="ONG" onPress={() => this.props.navigation.navigate('Ong') } />