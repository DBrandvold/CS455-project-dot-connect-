
import * as React  from 'react';
import { View, Text, Button, TextInput, Image, StyleSheet, Alert, FlatList,StatusBar,SafeAreaView, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState, useEffect } from 'react'


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
        navigation.navigate('MainPage',{paramKey:player1, paramKey2:player2
} )
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

function MainPage({route,navigation}){
  const [Score1, setScore1] = useState(0);
  const [Score2, setScore2] = useState(0);
  const [turn, setTurn] = useState(0);
  const [count, setCount] = useState(0);
  const player1N = route.params.paramKey;
  const player2N = route.params.paramKey2;
  const vertic = 5;


  const [grid, setgrid] = useState(
  [
    {id:'0', num: '1', bool: 'false'},{id:'1', num: '2', bool: 'false'},{id:'2', num: '1', bool: 'false'},{id:'3', num: '2', bool: 'false'},{id:'4', num: '1', bool: 'false'},{id:'5', num: '3', bool: 'false'},{id:'6', num: '5',char: '', bool: 'false'},{id:'7', num: '3', bool: 'false'},{id:'8', num: '5', char: '',bool: 'false'},{id:'9', num: '3', bool: 'false'},{id:'10', num: '1', bool: 'false'},{id:'11', num: '2', bool: 'false'},{id:'12', num: '1', bool: 'false'},{id:'13', num: '2', bool: 'false'},{id:'14', num: '1', bool: 'false'},{id:'15', num: '3', bool: 'false'},{id:'16', num: '5',char: '', bool: 'false'},{id:'17', num: '3', bool: 'false'},{id:'18', num: '5',char: '', bool: 'false'},{id:'19', num: '3', bool: 'false'},{id:'20', num: '1', bool: 'false'},{id:'21', num: '2', bool: 'false'},{id:'22', num: '1', bool: 'false'},{id:'23', num: '2', bool: 'false'},{id:'24', num: '1', bool: 'false'}
  ]);

  const pressedButton = (item) => {
      if(item.num == 2)
      {
        changeBool(item.id);
        checkSquareV(item);
      }

      if(item.num == 3)
      {
        changeBool(item.id);
        checkSquareH(item);
      }
  };

  const checkSquareV = (item) =>{
    var temp = 0;
    if(item.id > 4)
    {
      if(grid[item.id - vertic + 1].bool == 'true' && grid[item.id - vertic - 1].bool == 'true' && grid[item.id - vertic * 2 ].bool == 'true')
      {
        if(turn % 2 == 0)
          {
            temp = Score1 + 1;
            changeChar(item.id-vertic,player1N.charAt(0));
            changeBool(item.id - vertic);
            setScore1(temp);
            temp = count + 1;
            setCount(temp);
          }
        if(turn % 2 == 1)
          {
            temp = Score2 + 1;
            changeChar(item.id-vertic,player2N.charAt(0));
            changeBool(item.id - vertic);
            setScore1(temp);
            temp = count + 1;
            setCount(temp);
          }

      }
      else{
        temp = turn + 1;
        setTurn(temp);
        temp = count + 1;
        setCount(temp);
      }
    }

    if(item.id < 20)
    {
      if(grid[item.id + vertic + 1].bool == 'true' && grid[item.id + vertic - 1 ].bool == 'true' && grid[item.id + vertic * 2 ].bool == 'true')
        {
          if(turn % 2 == 0)
            {
              temp = Score1 + 1;
              changeChar(item.id+vertic,player1N.charAt(0));
              changeBool(item.id + vertic);
              setScore1(temp);
              temp = count + 1;
              setCount(temp);
            }
          if(turn % 2 == 1)
            {
              temp = Score2 + 1;
              changeChar(item.id+vertic,player2N.charAt(0));
              changeBool(item.id + vertic);
              setScore1(temp);
              temp = count + 1;
              setCount(temp);
            }
          }  
        else{
          temp = turn + 1;
          setTurn(temp);
          temp = count + 1;
          setCount(temp);
        }  
      }
    }

const checkSquareH = (item) =>{
  var temp = 0;
  if(item.id != 5 && item.id != 15)
    {
      if(grid[item.id - 2].bool == 'true' && grid[item.id + vertic - 1].bool == 'true' && grid[item.id - 1 - vertic].bool == 'true')
        {
          if(turn % 2 == 0)
            {
              temp = Score1 + 1;
              changeChar(item.id-1,player1N.charAt(0));
              changeBool(item.id-1);
              setScore1(temp);
              temp = count + 1;
              setCount(temp);
            }
          if(turn % 2 == 1)
            {
              temp = Score2 + 1;
              changeChar(item.id-1,player2N.charAt(0));
              changeBool(item.id-1);
              setScore1(temp);
              temp = count + 1;
              setCount(temp);
            }
        }
        else{
          temp = turn + 1;
          setTurn(temp);
          temp = count + 1;
          setCount(temp);
        }
    }
    
  if(item.id != 9 && item.id != 19)
  {
    if(grid[item.id + vertic + 1 ].bool == 'true' && grid[item.id - vertic + 1 ].bool == 'true' && grid[item.id + 2].bool == 'true')
        {
            

          if(turn % 2 == 0)
            {
              temp = Score1 + 1;
              changeChar(item.id+1,player1N.charAt(0));
              changeBool(item.id+1);
              setScore1(temp);
              temp = count + 1;
              setCount(temp);
            }
          if(turn % 2 == 1)
            {
              temp = Score2 + 1;
              changeChar(item.id+1,player2N.charAt(0));
              changeBool(item.id+1);
              setScore1(temp);
              temp = count + 1;
              setCount(temp);
            }
          } 
      else{
          temp = turn + 1;
          setTurn(temp);
          temp = count + 1;
          setCount(temp);
      }   
    }
  
  }

  const renderGrid = ({item}) => {
          if(item.num == '2')
          {
            if(item.bool == 'false')
            {
             return( 
               <TouchableOpacity onPress={() => pressedButton(item)}>
                <Text style={styles.item}>  </Text>
                </TouchableOpacity>
             )
            }
            else{
             return( <Text>-</Text>)
            }
          }
          if(item.num == '3')
          {
            if(item.bool == 'false')
            {
             return( 
               <TouchableOpacity onPress={() => pressedButton(item)}>
                <Text style={styles.item}>  </Text>
                </TouchableOpacity>
             )
            }
            else{
             return( <Text>|</Text>)
            }
          }
          if(item.num == '1')
          {
            return(<Text> dot </Text>)
          }
          if(item.num == '5')
          {
            if(item.bool == false)
            {
            return(<Text>   </Text>)
            }
             if(item.bool == true)
            {
            return(<Text>{item.char}</Text>)
            }
            
          }
  };

  const changeBool = (id) => {
    
    setgrid(prevValue => 
      [...prevValue].map(el => 
          el.id === id ? ({...el, bool:'true'}) : el)
      )
  }
  const changeChar = (id,item) => {
    
    setgrid(prevValue => 
      [...prevValue].map(el => 
          el.id === id ? ({...el, char:item}) : el)
      )
  }

  const getTurn = () =>{
    if(turn % 2 == 0)
    {
      return({player1N});
    }
    if(turn % 2 == 1)
    {
      return({player2N});
    }

  }

   return(
    <SafeAreaView style={styles.container}>
    <Text>Dot Connect</Text>

    <Text> {player1N}: {Score1} </Text>
    <Text> {player2N}: {Score2} </Text>
    <Text> {grid.length} </Text>
    <Text> {turn} </Text>
    <Text> {count} </Text>
    


    
      <FlatList
        numColumns={5}
        keyExtractor={item => item.id}
        data={grid}
        renderItem={({item}) =>
          renderGrid({item})
        }
        />
   




    </SafeAreaView>
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
 container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },

  item: {
    backgroundColor: '#f9c2ff',
    padding: 10,
    marginVertical: 4,
    marginHorizontal: 8,
  },
  num: {
    fontSize: 20,
  },
});

export default App;
