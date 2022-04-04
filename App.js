
import * as React  from 'react';
import { View, Text, Button, TextInput, Image, StyleSheet, Alert, FlatList,StatusBar,SafeAreaView, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState, useEffect } from 'react'


function StartPage({navigation}){
  return(
  <View style={{backgroundColor: 'white',flex: 1, alignItems: 'center', justifyContent: 'center'}}>

  <Image source={require('./DotConnect Logo.png')} />


    <Button
      title="Start New Game"
      onPress={()=> navigation.navigate('PlayerPage')} />
      <Text> </Text>
      <Button
      disabled={true}
      title="Continue Game"
      onPress={()=> navigation.navigate('PlayerPage')} />
    </View>
  );
}

function PlayerPage({navigation}){

  return(
    <View style={{ backgroundColor: 'white',flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    
    <Text>How many players</Text>
    
    <Button
      disabled={true}
      title="1 player"
      onPress={() =>navigation.push('PlayerName')}/>

    <Text> </Text>

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
  
    <View style={{ backgroundColor: 'white', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    
    
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
  
    <View style={{ backgroundColor: 'white',flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    
    
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
  // holds player 1 score
  const [Score1, setScore1] = useState(0);
  // holds player 2 score
  const [Score2, setScore2] = useState(0);
  // holds the turn count which dictates who's turn it is
  const [turn, setTurn] = useState(1);
  // holds the count which will tell us when the game is done
  const [count, setCount] = useState(1);
  // holds player 1 name that was entered in the prevous screen
  const player1N = route.params.paramKey;
  // holds player 2 name that was entered in the prevous screen
  const player2N = route.params.paramKey2;
  // holds the varaible that will give you the object either above or below in the grid
  const vertic = 9;

// the grid for The game should have 9 rows with 9 objects in each row
  const [grid, setgrid] = useState(
  [
    //Row 1 with dots and horizontal lines
{id:'0', num: '1', bool: 'false'},{id:'1', num: '2', bool: 'false'},{id:'2', num: '1', bool: 'false'},{id:'3', num: '2', bool: 'false'},{id:'4', num: '1', bool: 'false'},{id:'5', num: '2', bool: 'false'},{id:'6', num: '1', bool: 'false'},{id:'7', num: '2', bool: 'false'},{id:'8', num: '1', bool: 'false'},
//Row 2 vertical lines and the char box when scored
{id:'9', num: '3', bool: 'false'},{id:'10', num: '5',char: '', bool: 'false'},{id:'11', num: '3', bool: 'false'},{id:'12', num: '5', char: '',bool: 'false'},{id:'13', num: '3', bool: 'false'},{id:'14', num: '5',char: '', bool: 'false'},{id:'15', num: '3', bool: 'false'},{id:'16', num: '5',char: '', bool: 'false'},{id:'17', num: '3', bool: 'false'},
//Row 3 with dots and horizontal lines
{id:'18', num: '1', bool: 'false'},{id:'19', num: '2', bool: 'false'},{id:'20', num: '1', bool: 'false'},{id:'21', num: '2', bool: 'false'},{id:'22', num: '1', bool: 'false'},{id:'23', num: '2', bool: 'false'},{id:'24', num: '1', bool: 'false'},{id:'25', num: '2', bool: 'false'},{id:'26', num: '1', bool: 'false'},
//Row 4 vertical lines and the char box when scored
{id:'27', num: '3', bool: 'false'},{id:'28', num: '5',char: '', bool: 'false'},{id:'29', num: '3', bool: 'false'},{id:'30', num: '5', char: '',bool: 'false'},{id:'31', num: '3', bool: 'false'},{id:'32', num: '5',char: '', bool: 'false'},{id:'33', num: '3', bool: 'false'},{id:'34', num: '5',char: '', bool: 'false'},{id:'35', num: '3', bool: 'false'},
//Row 5 with dots and horizontal lines
{id:'36', num: '1', bool: 'false'},{id:'37', num: '2', bool: 'false'},{id:'38', num: '1', bool: 'false'},{id:'39', num: '2', bool: 'false'},{id:'40', num: '1', bool: 'false'},{id:'41', num: '2', bool: 'false'},{id:'42', num: '1', bool: 'false'},{id:'43', num: '2', bool: 'false'},{id:'44', num: '1', bool: 'false'},
//Row 6 vertical lines and the char box when scored
{id:'45', num: '3', bool: 'false'},{id:'46', num: '5',char: '', bool: 'false'},{id:'47', num: '3', bool: 'false'},{id:'48', num: '5', char: '',bool: 'false'},{id:'49', num: '3', bool: 'false'},{id:'50', num: '5',char: '', bool: 'false'},{id:'51', num: '3', bool: 'false'},{id:'52', num: '5',char: '', bool: 'false'},{id:'53', num: '3', bool: 'false'},
//Row 7 with dots and horizontal lines
{id:'54', num: '1', bool: 'false'},{id:'55', num: '2', bool: 'false'},{id:'56', num: '1', bool: 'false'},{id:'57', num: '2', bool: 'false'},{id:'58', num: '1', bool: 'false'},{id:'59', num: '2', bool: 'false'},{id:'60', num: '1', bool: 'false'},{id:'61', num: '2', bool: 'false'},{id:'62', num: '1', bool: 'false'},
//Row 8 vertical lines and the char box when scored
{id:'63', num: '3', bool: 'false'},{id:'64', num: '5',char: '', bool: 'false'},{id:'65', num: '3', bool: 'false'},{id:'66', num: '5', char: '',bool: 'false'},{id:'67', num: '3', bool: 'false'},{id:'68', num: '5',char: '', bool: 'false'},{id:'69', num: '3', bool: 'false'},{id:'70', num: '5',char: '', bool: 'false'},{id:'71', num: '3', bool: 'false'},
//Row 9 with dots and horizontal lines
{id:'72', num: '1', bool: 'false'},{id:'73', num: '2', bool: 'false'},{id:'74', num: '1', bool: 'false'},{id:'75', num: '2', bool: 'false'},{id:'76', num: '1', bool: 'false'},{id:'77', num: '2', bool: 'false'},{id:'78', num: '1', bool: 'false'},{id:'79', num: '2', bool: 'false'},{id:'80', num: '1', bool: 'false'}
  ]);

  const pressedButton = (id, num ) => {


      if(num == 2)
      {
        changeBool(id)
        if(checkSquaresVUp(id) == true || checkSquaresVDown(id) == true)
        {
          setCount(count + 1)
        }
        else{
          setCount(count + 1)
          setTurn(turn + 1)
        }
        

      }

      if(num == 3)
      {
        changeBool(id);
        if(checkSquaresHLeft(id) == true || checkSquaresHRight(id) == true)
        {
          setCount(count + 1)
        }
        else{
        setTurn(turn + 1)
        setCount(count + 1)
        }
      }
     
  };


  const checkSquaresVUp = (id) =>{
    console.log("1: " +id)
    if(id > 8)
    {console.log('made it')
      if(grid[id - (vertic * 2)].bool == 'true' && grid[id-(vertic - 1)].bool == 'true' && grid[id-(vertic + 1)].bool == 'true')
      {console.log('made it true')
        if(turn % 2 == 1)
        {
        changeChar(id - vertic, player1N.charAt(0));
        changeBool(id - vertic);
        setScore1(Score1 + 1);
        return(true);
        
        }
        if(turn % 2 == 0)
        {
        changeChar(id - vertic, player2N.charAt(0));
        changeBool(id - vertic);
        setScore2(Score2 + 1);
        return(true);
        }
      }
      if(grid[id - (vertic * 2)].bool == 'false' || grid[id-(vertic - 1)].bool == 'false' || grid[id-(vertic + 1)].bool == 'false')
      {console.log('made it false1')
        return(false);
      }
    }
    if(id < 4)
    {console.log('made it false2')
      return(false);
    }
  }
  const checkSquaresVDown = (id) =>{
      console.log("2: " +id)
    if(id < 71)
    {console.log('made it')
      if(grid[id + (vertic * 2)].bool == 'true' && grid[id + (vertic + 1)].bool == 'true' && grid[id + (vertic - 1)].bool == 'true')
      {console.log('made it true')
        if(turn % 2 == 1)
        {
        changeChar(id + vertic, player1N.charAt(0));
        changeBool(id + vertic);
        setScore1(Score1 + 1);
        return(true);
        }
        if(turn % 2 == 0)
        {
        changeChar(id + vertic, player2N.charAt(0));
        changeBool(id + vertic);
        setScore2(Score2 + 1);
        return(true);
        }
      }
    
      if(grid[id + (vertic * 2)].bool == 'false' || grid[id + (vertic + 1)].bool == 'false' || grid[id + (vertic - 1)].bool == 'false')
      {console.log('made it false1')
    
        return(false);
      }
    }
    if(id>20)
    {console.log('made it false2')
      return(false);
    }
  }

const checkSquaresHLeft = (id) =>{
      console.log("3: " +id)
    if(id == 9 || id == 27 || id == 45 || id == 63)
    {console.log('made it false2')
     return(false);
    }
    else
    {console.log('made it')
      if(grid[id - (vertic + 1)].bool == 'true' && grid[id + (vertic - 1)].bool == 'true' && grid[id - 2].bool == 'true')
      {console.log('made it true')
        if(turn % 2 == 1)
        {
        changeChar(id - 1, player1N.charAt(0));
        changeBool(id - 1);
        setScore1(Score1 + 1)
        return(true);
        }
        if(turn % 2 == 0)
        {
        changeChar(id - 1, player2N.charAt(0));
        changeBool(id - 1);
        setScore2(Score2 + 1)
        return(true);
        }
      }
      if(grid[id - (vertic + 1)].bool == 'false' || grid[id + (vertic - 1)].bool == 'false' || grid[id - 2].bool == 'false')
      {console.log('made it false1')
      return(false);
      }
    }
    
  }
  const checkSquaresHRight = (id) =>{
      console.log("4: " +id)
    if(id == 17 || id == 35 || id == 53 || id == 71)
    {console.log('made it')
      if(grid[id - (vertic + 1)].bool == 'true' && grid[id + (vertic + 1)].bool == 'true' && grid[id + 2].bool == 'true')
      {console.log('made it true')
        if(turn % 2 == 1)
        {
        changeChar(id + 1, player1N.charAt(0));
        changeBool(id + 1);
        setScore1(Score1 + 1)
        return(true);
        }
        if(turn % 2 == 0)
        {
        changeChar(id + 1, player2N.charAt(0));
        changeBool(id + 1);
        setScore2(Score2 + 1)
        return(true);
        }
      }
      if(grid[id - (vertic + 1)].bool == 'false' || grid[id + (vertic + 1)].bool == 'false' || grid[id + 2].bool == 'false')
      {console.log('made it false1')
      console.log(grid[id - (vertic + 1)].bool + " " + grid[id + (vertic + 1)].bool + " " + grid[id + 2].bool)
      return(false);
      }
    }

  }
  
  const renderGrid = ({item}) => {
          if(item.num == '2')
          {
            if(item.bool == 'false')
            {
             return( 
               <TouchableOpacity onPress={() => pressedButton(item.id, item.num)}>
                <Text style={styles.item}>  </Text>
                </TouchableOpacity>
             )
            }
            else{
             return(<Image style={{ width: 25, height: 25 }} source={require('./horizontalline.png')} />)
            }
          }
          if(item.num == '3')
          {
            if(item.bool == 'false')
            {
             return( 
               <TouchableOpacity onPress={() => pressedButton(item.id, item.num)}>
                <Text style={styles.item}>  </Text>
                </TouchableOpacity>
              
             )
            }
            else{
             return(<Image style={{ width: 25, height: 25 }} source={require('./verticalline.png')} />)
            }
          }
          if(item.num == '1')
          {
            return(<Image style={{ width: 25, height: 25 }} source={require('./circle.png')} />)
          }
          if(item.num == '5')
          {
            if(item.bool == 'false')
            {
            return(<Text style={{ width: 25, height: 25,backgroundColor: 'white' }}>   </Text>)
            }
             if(item.bool == 'true')
            {
            return(<Text style={{ width: 25, height: 25,backgroundColor: 'white', fontSize: 25}}>{item.char}</Text>)
            }  
          }
  };



  const changeBool = (id) => {
    
    setgrid(grid => 
      [...grid].map(el => 
          el.id == id ? ({...el, bool:'true'}) : el)
      )
  }
  const changeChar = (id,item) => {
    
    setgrid(grid => 
      [...grid].map(el => 
          el.id == id ? ({...el, char:item}) : el)
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
      <View style={styles.title}>
        <Text style={{fontSize:35, alignItems:'center'}}>Dot Connect</Text>
      </View>

      <View style={styles.score}>
          <Text style={styles.player1}> {player1N}: {Score1} </Text>
          <Text style={styles.player2}> {player2N}: {Score2} </Text>
      </View>


   
 
    


      <View style={styles.grid}>
        <FlatList
          numColumns={9}
          keyExtractor={item => item.id}
          data={grid}
          renderItem={({item}) =>
            renderGrid({item})
          }
          />
      </View>



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
    backgroundColor: 'white'

  },
 container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'white'
  },

  item: {
    backgroundColor: `#f0f8ff`,
    padding: 10,
    width: 25,
    height: 25,
  },

  title: {
      flex: 1,
      fontSize: 100,
      alignItems: 'center'
    
  },
  grid: {
      flex: 8,
      alignItems: 'center',
      justifyContent: 'center',
   
  },

  score: {
    
      flexDirection:'row',
      flex:1,
      
  },

  player1: {
    flex:1,
    fontSize:20, 
    color:'blue'
  },

  player2: {
    flex:1, 
    fontSize:20, 
    color:'red', 
    textAlign:'right'
  },


});

export default App;
