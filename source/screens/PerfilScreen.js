import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { TabNavigator } from 'react-navigation';

class PerfilScreen extends Component {

	
	
	render(){
		return(
			<View  style={{margin: 20}}>
				<Text>Perfil </Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	icone:{
		width:20,
		height:20
	},
})

export default PerfilScreen;