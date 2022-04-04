/**
 * file:App.js
 * Author:Derek Brandvold
 * Version:1.0
 * date-created:03/01/2022
 * modified-last:04/11/2022
 * Dot Connect Game
 */
import * as React  from 'react';
import { View, Text, Button, TextInput, Image, StyleSheet, Alert, FlatList,StatusBar,SafeAreaView, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState, useEffect } from 'react'


  /**
 * Purpose:First screen of the game it will show the Game logo then havetwo buttons on disabled the other to go to the next page
 * Parameter(s):
 *  <1> navigation: the container for the screens
 * Precondition(s): none
 * Return: none
 * Side Effect(s):none
 */
function StartPage({navigation}){
  return(
  <View style={{backgroundColor: 'white',flex: 1, alignItems: 'center', justifyContent: 'center'}}>

// Game Logo 
  <Image source={require('./DotConnect Logo.png')} />

// button to the next screen
    <Button
      title="Start New Game"
      onPress={()=> navigation.navigate('PlayerPage')} />
      //bra1ke inbetween buttons
      <Text> </Text>
      //disabled button 
      <Button
      disabled={true}
      title="Continue Game"
      onPress={()=> navigation.navigate('PlayerPage')} />
    </View>
  );
}

  /**
 * Purpose:Second screen of the game, purose is to select how many players are playing then will ta1ke you to one of two screens 1 player would ta1ke you to screen PlayerName but wont have time to build for 1 player so button is disabled and the button 2 Player will go to screen PlayersName
 * Parameter(s):
 *  <1> navigation: the container for the screens
 * Precondition(s): start game button from startPage screen must be pushed
 * Return: none
 * Side Effect(s):none
 */
function PlayerPage({navigation}){

  return(
    <View style={{ backgroundColor: 'white',flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    
    <Text>How many players</Text>

  // button for 1 player disabled
    <Button
      disabled={true}
      title="1 player"
      onPress={() =>navigation.push('PlayerName')}/>

    <Text> </Text>
  //button for 2 player that leads to next screen
    <Button 
      title="2 player"
      onPress={()=>navigation.navigate('PlayersNames')} />


    </View>
  
  )
}

  /**
 * Purpose:1 player  name screen this is were 1 player game will enter name but wont have time to make game for one player
 * Parameter(s):
 *  <1> navigation: the container for the screens
 * Precondition(s): none
 * Return: none
 * Side Effect(s):none
 */
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
  /**
 * Purpose:2 player screen name, this is where the users enter there names then click ready for to ta1ke them to the next screen and send the to variables with the players names that were entered in
 * Parameter(s):
 *  <1> navigation: the container for the screens
 * Precondition(s): button from playerpage function is clicked
 * Return: none
 * Side Effect(s):none
 */
function PlayersNames({navigation}){

// containers to hold the players entered names in
    const [player1, setplayer1] = useState("");
    const [player2, setplayer2] = useState("");

  /**
 * Purpose:create an alert if the names are not entered in before the Ready button is pushed
 * Parameter(s):
 *  <1> navigation: none
 * Precondition(s): variables player1 or player2 are empty and ready button is pushed
 * Return: none
 * Side Effect(s):will create an alert from the phone
 */
    const showAlert = () =>
      Alert.alert(
      "For both Names there needs to be atleast one character",
      
      [
        {text: "OK", onPress: () => console.log("OK PRESSED!")}
      ]
    );

  /**
 * Purpose:to chec1k if variables player1 and player 2 have anything in them
 * Parameter(s):
 *  <1> player1:strings
 *  <2>player2:strings
 * Precondition(s): button called ready must be pushed
 * Return: either show alert or sends the names and the user to the next screen
 * Side Effect(s):none
 */
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
  // enter player1 string
    <TextInput
      style={styles.input}
      onChangeText={setplayer1}
      value={player1}
      />


  //enter player2 string
    <TextInput
      style={styles.input}
      onChangeText={setplayer2}
      value={player2}
      />

  // button to call the function checkNames
    <Button
      title="Ready"
      onPress={()=> CheckNames(player1,player2)} />
   


    </View>
  
  )
}
  /**
 * Purpose:Main page this is where the game is played it will display the games name the players and there scores and the grid itself
 * Parameter(s):
 *  <1> navigation: the container for the screens
 *  <2> route: allows the screen to get the two variables from the previous page 
 * Precondition(s): ready button must be pushed from the PlayersNames screen
 * Return: none
 * Side Effect(s):none
 */
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

  /**
 * Purpose:when a grid button is pushed it changes that grid objects boolean value to true, checks if a square was formed and adds to the count and/or the turn
 * Parameter(s):
 *  <1> id: key for the specific object selected
 *  <2> num: num variable for the specific object selected
 * Precondition(s): the button for the object grid would need to be pushed
 * Return: none
 * Side Effect(s):
 * <1> add 1 to count and/or turn
 * <2> change boolean value for grid object
 * <3> calls functions checkSquareVUp,checkSquareVDown, checkSquareHLeft or checkSquareHRight
 */
  const pressedButton = (id, num ) => {


      if(num == 2)
      {
        //function to change boolean variable in grid object
        changeBool(id)
        // if one of the values is true the player 1keeps going so only count gos up
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
      //function to change boolean variable in grid object
        changeBool(id);
      // if one of the values is true the player 1keeps going so only count gos up
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


  /**
 * Purpose:checks to see if the square above has been fully connected if so it sends true
 * Parameter(s):
 *  <1> id: key for the specific object selected
 * Precondition(s): function pressedButton is called and num variable = 2
 * Return: true or false
 * Side Effect(s):
 * <1>change squares char to players first char
 * <2>change squares bool to true
 * <3> add 1 to the score of the players whos turn it is
 */
  const checkSquaresVUp = (id) =>{
// make sure that its none of the top row buttons
    if(id > 8)
    {
      // check if the square is complete
      if(grid[id - (vertic * 2)].bool == 'true' && grid[id-(vertic - 1)].bool == 'true' && grid[id-(vertic + 1)].bool == 'true')
      {
        //whos turn is it check
        if(turn % 2 == 1)
        {
          // change char and bool of square and add to player1 score
          changeChar(id - vertic, player1N.charAt(0));
          changeBool(id - vertic);
          setScore1(Score1 + 1);
          return(true);
        
        }
        //whos turn is it check
        if(turn % 2 == 0)
        {
          // change char and bool of square and add to player2 score
          changeChar(id - vertic, player2N.charAt(0));
          changeBool(id - vertic);
          setScore2(Score2 + 1);
          return(true);
        }
      }
      // if the square is not complete
      if(grid[id - (vertic * 2)].bool == 'false' || grid[id-(vertic - 1)].bool == 'false' || grid[id-(vertic + 1)].bool == 'false')
      {
        return(false);
      }
    }
    //if it is the top row buttons
    if(id < 8)
    {
      return(false);
    }
  }

   /**
 * Purpose:checks to see if the square below has been fully connected if so it sends true
 * Parameter(s):
 *  <1> id: key for the specific object selected
 * Precondition(s): function pressedButton is called and num variable = 2
 * Return: true or false
 * Side Effect(s):
 * <1>change squares char to players first char
 * <2>change squares bool to true
 * <3> add 1 to the score of the players whos turn it is
 */
  const checkSquaresVDown = (id) =>{
    // make sure that its none of the bottom row buttons
    if(id < 71)
    {
      // check if the square is complete
      if(grid[id + (vertic * 2)].bool == 'true' && grid[id + (vertic + 1)].bool == 'true' && grid[id + (vertic - 1)].bool == 'true')
      {
        //whos turn is it check
        if(turn % 2 == 1)
        {
          // change char and bool of square and add to player1 score
          changeChar(id + vertic, player1N.charAt(0));
          changeBool(id + vertic);
          setScore1(Score1 + 1);
          return(true);
        }
        //whos turn is it check
        if(turn % 2 == 0)
        {
          // change char and bool of square and add to player2 score
          changeChar(id + vertic, player2N.charAt(0));
          changeBool(id + vertic);
          setScore2(Score2 + 1);
          return(true);
        }
      }
    // if the square is not complete
      if(grid[id + (vertic * 2)].bool == 'false' || grid[id + (vertic + 1)].bool == 'false' || grid[id + (vertic - 1)].bool == 'false')
      {
    
        return(false);
      }
    }
    // if it is the bottom row buttons
    if(id>71)
    {
      return(false);
    }
  }

/**
 * Purpose:checks to see if the square to the left has been fully connected if so it sends true
 * Parameter(s):
 *  <1> id: key for the specific object selected
 * Precondition(s): function pressedButton is called and num variable = 3
 * Return: true or false
 * Side Effect(s):
 * <1>change squares char to players first char
 * <2>change squares bool to true
 * <3> add 1 to the score of the players whos turn it is
 */
const checkSquaresHLeft = (id) =>{
    // make sure that its none of the left column buttons
    if(id == 9 || id == 27 || id == 45 || id == 63)
    {
     return(false);
    }
    else
    {// check if the square is complete
      if(grid[id - (vertic + 1)].bool == 'true' && grid[id + (vertic - 1)].bool == 'true' && grid[id - 2].bool == 'true')
      {
        //whos turn is it check
        if(turn % 2 == 1)
        {
          // change char and bool of square and add to player1 score
          changeChar(id - 1, player1N.charAt(0));
          changeBool(id - 1);
          setScore1(Score1 + 1)
          return(true);
        }
        //whos turn is it check
        if(turn % 2 == 0)
        {
          // change char and bool of square and add to player2 score
          changeChar(id - 1, player2N.charAt(0));
          changeBool(id - 1);
          setScore2(Score2 + 1)
          return(true);
        }
      }
      // if the square is not complete
      if(grid[id - (vertic + 1)].bool == 'false' || grid[id + (vertic - 1)].bool == 'false' || grid[id - 2].bool == 'false')
      {
      return(false);
      }
    }
    
  }

  /**
 * Purpose:checks to see if the square to the Right has been fully connected if so it sends true
 * Parameter(s):
 *  <1> id: key for the specific object selected
 * Precondition(s): function pressedButton is called and num variable = 3
 * Return: true or false
 * Side Effect(s):
 * <1>change squares char to players first char
 * <2>change squares bool to true
 * <3> add 1 to the score of the players whos turn it is
 */
  const checkSquaresHRight = (id) =>{
    // make sure that its none of the Right column buttons
    if(id == 17 || id == 35 || id == 53 || id == 71)
    {// check if the square is complete
      if(grid[id - (vertic + 1)].bool == 'true' && grid[id + (vertic + 1)].bool == 'true' && grid[id + 2].bool == 'true')
      {
        //whos turn is it check
        if(turn % 2 == 1)
        {
          // change char and bool of square and add to player1 score
          changeChar(id + 1, player1N.charAt(0));
          changeBool(id + 1);
          setScore1(Score1 + 1)
          return(true);
        }
        //whos turn is it check
        if(turn % 2 == 0)
        {
          // change char and bool of square and add to player2 score
          changeChar(id + 1, player2N.charAt(0));
          changeBool(id + 1);
          setScore2(Score2 + 1)
          return(true);
        }
      }
      // if the square is not complete
      if(grid[id - (vertic + 1)].bool == 'false' || grid[id + (vertic + 1)].bool == 'false' || grid[id + 2].bool == 'false')
      {
      return(false);
      }
    }

  }
  
/**
 * Purpose:this is where the flat list renders, so the grid of images and buttons
 * Parameter(s):
 *  <1> item: the object in the grid that it is on at the time
 * Precondition(s): flatlist calls it
 * Return: either image or button depending on the objects boolean value
 * Side Effect(s):none
 */
  const renderGrid = ({item}) => {
          // if item.num = 2 and boolean is false create button if true create horizontal line image
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
          // if item.num = 3 and boolean is false create button if true create verticalline image
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
          // if item.num = 1 create circle image
          if(item.num == '1')
          {
            return(<Image style={{ width: 25, height: 25 }} source={require('./circle.png')} />)
          }
          // if item.num = 5 and boolean is false it sends a blan1k text if true it sends a char of the the item
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


/**
 * Purpose:changes a boolean in the grid
 * Parameter(s):
 *  <1> id: the object key number in the grid
 * Precondition(s): none
 * Return: none
 * Side Effect(s):
 * <1> changes object boolean to true by creating a new grid with the new variable change
 */
  const changeBool = (id) => {
    
    setgrid(grid => 
      [...grid].map(el => 
          el.id == id ? ({...el, bool:'true'}) : el)
      )
  }

  /**
 * Purpose:changes a char in the grid
 * Parameter(s):
 *  <1> id: the object key number in the grid
 * Precondition(s): none
 * Return: none
 * Side Effect(s):
 * <1> changes object char to true by creating a new grid with the new variable change
 */
  const changeChar = (id,item) => {
    
    setgrid(grid => 
      [...grid].map(el => 
          el.id == id ? ({...el, char:item}) : el)
      )
  }


   return(
    <SafeAreaView style={styles.container}>
    //Title Dot Connect
      <View style={styles.title}>
        <Text style={{fontSize:35, alignItems:'center'}}>Dot Connect</Text>
      </View>
    // scoreboard
      <View style={styles.score}>
          <Text style={styles.player1}> {player1N}: {Score1} </Text>
          <Text style={styles.player2}> {player2N}: {Score2} </Text>
      </View>


   
 
    

    // the grid 
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

// navigation stac1k created
const Stack = createNativeStackNavigator();

/**
 * Purpose:the many function where all the screens are added to the stac1k
 * Parameter(s):none
 * Precondition(s): none
 * Return: none
 * Side Effect(s):
 * <1> adds, creates and holds the screens
 */
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

// style sheet for some of the parts
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
