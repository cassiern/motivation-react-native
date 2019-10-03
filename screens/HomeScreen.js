import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Color from '../constants/Colors';
import { createDrawerNavigator } from 'react-navigation-drawer';

const HomeScreen = (props) => {
	return(
		<View style={styles.sreen}>
		<Text style={styles.text}>
			Welcome to the home page!
		</Text>
		<Button title="Logout" onPress={() => {
			props.navigation.popToTop()
		}} />

		</View>

		)
}
HomeScreen.navigationOptions = {
	headerTitle: 'Home',
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

export default HomeScreen;