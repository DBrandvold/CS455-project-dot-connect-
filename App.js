import * as React from 'react';
import { View, Text, Button, TextInput, Image, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function StartPage({navigation}){
  return(
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>

  <Image source={require('./DotConnect Logo.png')} />

    <Button
      title="Start New Game"
      onPress={()=> navigation.navigate('PlayerPage')} />
      <Button
      title="Continue Game"
      onPress={()=> navigation.navigate('MainPage')} />
    </View>
  );
}

function PlayerPage({navigation}){

  const[text, setText] = React.useState("");
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Text>Details Screen</Text>
    
  
  

    <TextInput
    label ="input"
    value = {text}
    onChangeText = {text => setText(text)}
    />

    <Button
      title="Go to Details... again"
      onPress={() =>navigation.push('Details')}/>


    <Button 
      title="Go to Home"
      onPress={()=>navigation.navigate('Home')} />

    <Button 
      title="Go Back"
      onPress={()=>navigation.goBack()} />

    <Button 
      title="Go back to first screen in stack"
      onPress={() => navigation.popToTop()}/>


    </View>
  
  )
}

function PlayerNames({navigation}){
    return(
  
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Text>Details Screen</Text>
    
  
  

  

    <Button
      title="Go to Details... again"
      onPress={() =>navigation.push('Details')}/>


    <Button 
      title="Go to Home"
      onPress={()=>navigation.navigate('Home')} />

    <Button 
      title="Go Back"
      onPress={()=>navigation.goBack()} />

    <Button 
      title="Go back to first screen in stack"
      onPress={() => navigation.popToTop()}/>


    </View>
  
  )
}

function MainPage({navigation}){
   return(
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Text>Home Screen</Text>
    <Button
      title="Go to Details"
      onPress={()=> navigation.navigate('Details')} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StartPage">
        <Stack.Screen name="PlayerPage" component={PlayerPage}/>
        <Stack.Screen name="StartPage" component ={StartPage} />
        <Stack.Screen name="PlayerNames" component={PlayerNames}/>
        <Stack.Screen name="MainPage" component={MainPage}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;
