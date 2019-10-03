import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';
import Color from '../constants/Colors';
import { createStackNavigator } from 'react-navigation-stack';

import {CATEGORIES} from '../data/categoryData';

	const renderGridItem = (itemData) => {
		return(
		<TouchableOpacity onPress={() => {}} style={styles.girdItems}> 
		<View style={styles.screen}>
			<View >
				<Text style={styles.text}>{itemData.item.title}</Text>
			</View>
		</View>
		</TouchableOpacity>
		)
	}

const CategoriesScreen = (props) => {
	



	return(
		<FlatList keyExtractor={(item, index) => item.id} data={CATEGORIES} renderItem={renderGridItem} numColumns={2}/>

		)
}

CategoriesScreen.navigationOptions = {
	headerTitle: 'Select Categories',
	headerStyle: {
		backgroundColor: Color.secondary
	},
	fontFamily: 'open-sans-bold'
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	girdItems: {
		flex: 1,
		margin: 15,
		height: 150,
		justifyContent: 'center'
	},
	text: {
		color: 'black',
		fontSize: 16,
		padding: 20,
		fontFamily: 'open-sans'
	}
})

export default CategoriesScreen;