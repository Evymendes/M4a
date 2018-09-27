import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Button } from 'react-native';
import {Tacreate, createStackNavigator} from 'react-navigation'

import OngScreen from './source/screens/ongScreen';
import EditProfile from './source/screens/editProfile';

class App extends Component {

  static navigationOptions = ({navigation}) => ({
    title:'bem vindo',
    header: null
  })

  render() {
    
    return (
      <OngScreen />
    );
  }
}


const Navegador = createStackNavigator({
  Home:{
    screen: App
  },
  Ong:{
    screen: OngScreen
  },
})

export default Navegador;


// <Button title="ONG" onPress={() => this.props.navigation.navigate('Ong') } />