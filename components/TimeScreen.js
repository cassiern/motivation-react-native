import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Color from '../constants/Colors';


const TimeScreen = (props) => {
	return(
		<View style={styles.sreen}>
		<Text style={styles.text}>
			First TimeScreen thing!
		</Text>
		</View>

		)
}

const styles = StyleSheet.create({
	screen: {
		backgroundColor: Color.primary,
		height: '100%',
		alignItems: 'center'
	},
	text: {
		color: 'white',
		fontSize: 16
	}
})

export default TimeScreen;