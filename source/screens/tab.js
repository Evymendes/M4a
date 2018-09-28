import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, FlatList } from 'react-native';

import { TabNavigator} from 'react-navigation';

import PerfilScreen from './PerfilScreen'
import MsgScreen from './MsgScreen'
import PesquisaScreen from './PesquisaScreen'
import EditProfile from './editProfile'
import ConfigOrg from '../components/ConfigOrg'
import OngScreen from './ongScreen'

const Navegador = TabNavigator({
  OngScreen:{
    screen:OngScreen
  },
  PesquisaScreen:{
    screen:PesquisaScreen
  },
  EditProfile:{
    screen:EditProfile
  }
}, {
  tabBarPosition:'top',
  animationEnable: true,
  tabBarOptions:{
    showIcon:false
  }
});


export default class Tab extends React.Component {
  static navigationOptions = {
    title:'Receita',
    header:null
  };

  render() {
    
    return (
        <View style={styles.container}>
          <Navegador />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    width:'100%',
    backgroundColor: '#fff',
    paddingTop: 20,
  },
});




