import React, { Component } from 'react';
import { 
	StyleSheet, 
	View, 
	Image,
	TouchableOpacity,
	Text,
	TextInput,
	Button
} from 'react-native';

import { StackNavigator } from 'react-navigation';


class LoginScreen extends Component { 

	static navigationOptions = ({navigation}) => ({
		header:null
	})

 
	render(){
		return(
			<View style={styles.container}>
				<Text style={[styles.buttonTitle, {color: this.props.color, textDecorationLine: this.props.line}]}>Login </Text>
		     	<TextInput 
			      	style={[styles.input, {height: this.props.height}]}
			      	underlineColorAndroid='transparent'
			      	placeholder="example@email" 
			      	placeholderTextColor='rgba(57,19,179,0.4)'
			      	onChangeText={this.enterEmail}			      	
			    	multiline={true}
		     	/>
		     	<Text style={[styles.buttonTitle, {color: this.props.color, textDecorationLine: this.props.line}]}>Login </Text>
		     	<TextInput 
			      	style={[styles.input, {height: this.props.height}]}
			      	underlineColorAndroid='transparent'
			      	placeholder="example@email" 
			      	placeholderTextColor='rgba(57,19,179,0.4)'
			      	onChangeText={this.enterEmail}			      	
			    	multiline={true}
		     	/>
		     	<Button title="ONG" onPress={() => this.props.navigation.navigate('Ong') } />
			</View>
		);
	}
}

const styles = StyleSheet.create ({
	container:{
		flex:1,
		paddingTop: 20,
	},
	imageArea:{
		justifyContent: 'center',
		alignItems: 'center',
		height: '28%',
	},
	image:{
		resizeMode:'contain',
		width: '60%',
		height: '31%'
	},
	label:{
		marginLeft: 26,
		fontSize: 12,
		color: '#FFF'
	},
	input:{
		margin:8,
		padding: 16,
		color:'#3913B3',
		fontSize: 16,
		backgroundColor:'#FFF',
		width:  '95%',
		borderRadius: 4,
	}
})

export default LoginScreen;