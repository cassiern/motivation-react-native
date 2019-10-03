import React, {useState} from 'react';
import { 
	View, Text, TextInput, 
	StyleSheet, Button, 
	TouchableWithoutFeedback, 
	Keyboard, ScrollView, 
	} from 'react-native';
import Color from '../constants/Colors';
import DefaultStyles from '../constants/DefaultStyles';
import Input from './Input';
import TimeScreen from './TimeScreen';



const LoginScreen = props => {

	const [emailInput, setEamilInput] = useState('');
	const [passwordInput, setPasswordInput] = useState('')
	const [loggedIn, setLoggedIn] = useState(false)
	const changeEmailInput = inputText => {
		setEamilInput(inputText)
	}
	const changePasswordInput = inputPwd => {
		setPasswordInput(inputPwd)
	}

	const showTimeScreen = () => {
		setLoggedIn(true)
	}

	let confirmedLogIn;
	if(loggedIn){
		confirmedLogIn = <TimeScreen />	
	}
	

	return(
		<TouchableWithoutFeedback onPress={() => {
			Keyboard.dismiss();
		}}>
		<View style={styles.screen}>
		
			<Text style={styles.header}>
			<Text style={styles.specialLetter}>M</Text>otivation{"\n"}
			<Text style={styles.specialLetter}> =</Text>
			{"\n"}<Text style={styles.specialLetter}>M</Text>
			ovement</Text>

			<View style={styles.inputContainer}>
			<Text style={styles.headerText}>Login with your email</Text>
			<Input />
			<View>
				<TextInput placeholder="Email" 
				  fontWeight= 'bold'
		          fontSize= '16' 
		          style={styles.textInputbox}
		          onChangeText={changeEmailInput}
		          KeyboardType="email"
		          textContentType="emailAddress"
		          />
				<TextInput 
				  multiline={true} 
		          fontWeight= 'bold'
		          fontSize= '16'
		          placeholder="Password"
		          style={styles.textInputbox}
		          onChangeText={changePasswordInput}
		          secureTextEntry={true}
		          />
			</View>				
					<Button title="Login" color="#cc5500" onPress={() => {
						props.navigation.navigate({routeName: 'SetTime'})
					}}/>
					<Text style={styles.smallText}>or</Text>
					<Button title="Register" color="#cc5500"/>				
			</View>
			{confirmedLogIn}
		</View>	
		</TouchableWithoutFeedback>
		
		)
}

const styles = StyleSheet.create({
	screen: {
		backgroundColor: Color.primary,
		height: '100%',
		alignItems: 'center'
	},
	specialLetter: {
		fontFamily: DefaultStyles.bodyText.fontFamily,
		color: Color.burntOrange
	},
	header: {
		color: 'white',
		fontSize: 24,
		fontWeight: 'bold',
		padding: 40,
		fontFamily: DefaultStyles.headerText.fontFamily
	},
	// inputs: {
	// 	borderBottomColor: 'white',
	// 	borderBottomWidth: 1,
	// 	paddingBottom: 10
	// },
	headerText: {
		color: 'white',
		paddingTop: 20,
		fontSize: 18,
		fontFamily: DefaultStyles.bodyText.fontFamily
	},
	smallText: {
		color: 'white',
		fontFamily: DefaultStyles.bodyText.fontFamily
	},
	inputContainer: {
		backgroundColor: Color.secondary,
		width: '90%',
		borderRadius: 10,
		alignItems: 'center',
		shadowColor: 'black',
		shadowOffset: {
			height: 4,
			width: 3
		},
		shadowRadius: 3,
		shadowOpacity: 0.5,
		elevation: 3
	},
	 textInputbox: {
	    color: '#5B616B',
	    backgroundColor: 'white',
	    paddingTop: '6%',
	    padding: '6%',
	    marginTop: '5%',
	    width: 320,
	    borderRadius: 10,
	    shadowColor: 'black',
	    shadowOffset: {
	    	height: 4,
	    	width: 0
	    },
	    shadowRadius: 3,
	    shadowOpacity: 0.3,
	    elevation: 3
  }
})

export default LoginScreen;