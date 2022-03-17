
import * as React  from 'react';
import { View, Text, Button, TextInput, Image, StyleSheet, Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react'



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

  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    
    <Text>How many players</Text>
    
    <Button
      title="1 player"
      onPress={() =>navigation.push('PlayerName')}/>


    <Button 
      title="2 player"
      onPress={()=>navigation.navigate('PlayersNames')} />


    </View>
  
  )
}

function PlayerName({navigation}){

    const [player1, setplayer1] = useState("");

    const showAlert = () =>
      Alert.alert(
      "For your name there needs to be atleast one character",
      
      [
        {text: "OK", onPress: () => console.log("OK PRESSED!")}
      ]
    );

    const CheckName = (player1) =>{

      if (player1 == ""){
        {showAlert}
      }
      else{
        navigation.navigate('MainPage')
        }


    };
   
    return(
  
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    
    
    <Text>Enter Player Name</Text>

    <TextInput
      style={styles.input}
      onChangeText={setplayer1}
      value={player1}
      />

    <Button
      title="Ready"
      onPress={()=> CheckName(player1)} />
      
      



    </View>
  
  )
}

function PlayersNames({navigation}){

    const [player1, setplayer1] = useState("");
    const [player2, setplayer2] = useState("");

    const showAlert = () =>
      Alert.alert(
      "For both Names there needs to be atleast one character",
      
      [
        {text: "OK", onPress: () => console.log("OK PRESSED!")}
      ]
    );

    const CheckNames = (player1,player2) =>{

      if (player1 == "" || player2 == ""){
          {showAlert} 
      }
      else{
        navigation.navigate('MainPage')
        }


    };

    return(
  
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    
    
    <Text>Enter Players Names</Text>

    <TextInput
      style={styles.input}
      onChangeText={setplayer1}
      value={player1}
      />

  

    <TextInput
      style={styles.input}
      onChangeText={setplayer2}
      value={player2}
      />

   

    <Button
      title="Ready"
      onPress={()=> CheckNames(player1,player2)} />
   


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
        <Stack.Screen name="PlayersNames" component={PlayersNames}/>
        <Stack.Screen name="PlayerName" component={PlayerName}/>
        <Stack.Screen name="MainPage" component={MainPage}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default App;
