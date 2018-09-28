import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { TabNavigator } from 'react-navigation';


import DescriptionOng from '../components/DescriptionOng'

class ConfigOrg extends Component {

  constructor(props){
    super(props);
    this.state = {};
    this.ong = this.ong.bind(this);
  }

  ong(item) {
   // this.props.navigation.navigate('DescriptionOng', item)
  }
  
  render(){
    return(
      <View style={styles.area}>
        <View style={styles.photoDogs}>
            <Image source={this.props.data.img} style={styles.photoDogsImg}  />
        </View>
        <View style={styles.text}>
          <View style={styles.data}>
            <Text style={styles.data1}>{this.props.data.data}</Text>
          </View>
          <View style={styles.subTitle}>
            <Text style={styles.text1}>{this.props.data.title}</Text>
            <Text style={styles.text1}>{this.props.data.rua}</Text>
            <Text style={styles.text1}>{this.props.data.horario}</Text>
            <Button title='oioi' onPress={()=> this.ong(item)}/>
          </View>
          <Text> jskdj</Text>
        </View>
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
  corpo:{
    width: '100%',
  },
  photoDogs:{
    width:'90%',
    height:'55%',
    margin:20 ,
    justifyContent: 'center',
    alignItems: 'center',   
  },
  text:{
    height: '30%',
    flexDirection:'row'
  },
  text1:{
    fontSize: 20,
    alignItems: 'flex-start',
  },
  data1:{
    fontSize: 30,
    textAlign: 'center',
  },
  data:{
    width:'30%',
    marginLeft: 20,
    backgroundColor:'#f1921e',
  }
})

export default ConfigOrg;



{/*<View style={styles.photoDogs}>
            <Image source={item.img} style={styles.photoDogsImg}  />
        </View>
        <View style={styles.text}>
          <View style={styles.data}>
            <Text style={styles.data1}>{this.props.data.data}</Text>
          </View>
          <View style={styles.subTitle}>
            <Text style={styles.text1}>{this.props.data.nome} {item.title}</Text>
            <Text style={styles.text1}>{this.props.data.nome}{item.rua}</Text>
            <Text style={styles.text1}>{this.props.data.nome}{item.horario}</Text>
          </View>
        </View>  
         <View style={styles.photoDogs}>
            <Image source={require('../assets/m4a.png')} style={styles.navItenPerfil}  />
        </View>*/}