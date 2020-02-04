import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';

export default class TextFun extends Component {
	constructor(props) {
		super(props);
		this.state = {text: ''};
	}

	_onPressButton() {
    	alert('You tapped the button! What a cool kid!')
  	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.blue}>G
				<Text style={styles.red}>o
				<Text style={styles.yellow}>o
				<Text style={styles.blue}>g
				<Text style={styles.green}>l
				<Text style={styles.red}>e
				</Text></Text></Text></Text></Text></Text>
				<Text style={styles.black}>Pixel 4 XL</Text>
				<TextInput
		        	style={{height: 40}}
		        	placeholder="Enter your name!"
		        	onChangeText={(text) => this.setState({text})}
		        	value={this.state.text}
		        />
		        <Text style={{padding: 10, fontSize: 42}}>
		        	{this.state.text.split(' ').map((word) => "Hi " + word + "!").join(' ')}
		        </Text>
		        <Button
		            onPress={this._onPressButton}
		            title="Click me to be a cool kid!"
		            color="#841584"
	            />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	blue: {
		color: 'blue',
		fontWeight: 'bold',
		fontSize: 30
	},
	red: {
		color: 'red',
		fontWeight: 'bold',
		fontSize: 30
	},
	yellow: {
		color: 'gold',
		fontWeight: 'bold',
		fontSize: 30
	},
	green: {
		color: 'green',
		fontWeight: 'bold',
		fontSize: 30
	},
	black: {
		color: 'black',
		fontWeight: 'bold',
		fontSize: 30
	},
});