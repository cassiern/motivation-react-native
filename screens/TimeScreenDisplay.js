import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Color from '../constants/Colors';

const TimeScreen = (props) => {
	return(
		<View style={styles.sreen}>
		<View style={styles.}>
		<Button style={styles.text} title="Morning" />
		</View>
		
		<View>
		<Button style={styles.text} title="Afternoon" />
		</View>
		
		<View>
		<Button style={styles.text} title="Evening" />
		</View>
		
		<Button title="NEXT" onPress={() => {
						props.navigation.navigate({routeName: 'SetCategories'})
					}} />
		</View>

		)
}

TimeScreen.navigationOptions = {
	headerTitle: 'Select Time',
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
		fontSize: 16,
		padding: 20
	}
})

export default TimeScreen;