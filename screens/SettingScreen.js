import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Color from '../constants/Colors';


const SettingScreen = (props) => {
	return(
		<View style={styles.sreen}>
		<Text style={styles.text}>
			This is your settings!
		</Text>
		</View>

		)
}
SettingScreen.navigationOptions = {
	headerTitle: 'Settings',
	headerStyle: {
		backgroundColor: Color.secondary
	},
	fontFamily: 'open-sans-bold'
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: Color.primary,
		height: '100%',
		alignItems: 'center'
	},
	text: {
		color: 'black',
		fontSize: 16
	}
})

export default SettingScreen;