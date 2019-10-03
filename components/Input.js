import React from 'react';
import { TextInput, Text, StyleSheet, View } from 'react-native';


const Input = props => {
	return(
		<Text style={styles.input}></Text>

		)
}

const styles = StyleSheet.create({
	input: {
		fontSize: 20,
		color: 'white'
	}
})

export default Input;