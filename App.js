import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './components/LoginScreen';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import StackNav from './navigation/navigation';



const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),  
  })
}

//if login clicked from child, pass up to here and toggle [true false] to time screen
//else if register is clicked show regi component
//else show login screen



export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false)

  if(!fontLoaded){
    return <AppLoading 
    startAsync={fetchFonts} 
    onFinish={() => setFontLoaded(true)}
    onError={(err) => console.log(err)}/>
  
}


  return <StackNav />
}

const styles = StyleSheet.create({
  container: {
  },
});
