import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { TabNavigator } from 'react-navigation';

class DescriptionOng extends Component {

  
  render(){
    return(
      <View style={styles.area}>
        <Text>Description Ong</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // area:{
  //   height: 80,
  //   color:  'red',
  //   height:20
  // },
  area:{
    flex:1,
    height: 300,
  },
})

export default DescriptionOng;
