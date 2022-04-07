
# CS455-project-dot-connect



Table of contents
-----------------

* [Introduction](#introduction)
* [Manifest](#Manifest)
* [Installation](#installation)
* [Usage](#usage)
* [Planned features](#Planned-features)
* [Known issues and limitations](#known-issues-and-limitations)
* [Credit](#Credit)



Introduction
------------
<img src="/assets/images/DotConnect Logo.png" width="100" height="100">This app was create for a school project that required us to create an app in react native and use github as a repository.  The goal was to give experiaence in mobile app development while showing what we learned from class.  We were given the option of creating an kind of app we wanted as long as it was complex enough.  I just to create a game, I wanted to do something that i was interested in to keep me motivated.  I chose to build a game that I use to play back in highschool on graph paper called dot connect, a game where you have a grid of dots and have to make more squares then your appoint can by ta1king turns adding lines.  I did a bit of searching and could not find this game in the app store so i thought it would be perfect.  


Installation
------------
not sure how to do this part yet aspecially since the app does not wor1k yet

Manifest
--------
- assets: holds images used in the app and in the readme file
- .gitignore: always git hub to ignore files(not using it)
- App.js: the apps code
- DotConnect Logo.png: logo image of the game
- README.md: The readme file that describes the project
- app.json:The manifest format for the app
- circle.png: image of dot used in grid
- horizontalline.png: image of horizontal line used in grid
- package.json:has the apps dependencies
- verticalline.png: image of vertical line used in grid

Usage
-----
In this section I will discuss the usage of the app. So a wal1kthrough of how the game is played and navigating through the screens to the game. I also will be discussing the development of the game the code I wrote and the toolsand functions used in the code.

### Walkthrough of Game
So the walkthrough will begin at the begin right after opening the app.  The app will take you to the first screen which is called the startPage. as shown below in the image the screen will have the games logo in the center and below it there will be a start new game button and a disabled continue game button.  The start new game button when clicked on will ta1ke you to the next screen which is the PlayerPage screen, the continue game would have ta1ken you to the MainPage screen with the previous game you were on to continue but that feature is not avaiable yet.

<img src="/assets/images/startScreen.png" width="250" height="400">

Next after clicking start new game PlayerPage screen will pop up in this screen the user will see some text and two buttons.  The text will say " How many players" after that there is another disabled button called 1 player this is another feature that will hopefully be added eventually to the game where the user will play a game against a computer. the second button is called 2 player which is the only option at the moment is playing two player locally once this button is pushed the app will ta1ke the user to the next screen, the PlayersNames.

<img src="/assets/images/playerPage.png" width="250" height="400">

This next screen will have a bit of text ask the users to enter there names in the boxes provided, player 1 first then player 2 once the names have been added the user will then click on the ready button which will ta1ke them to the MainPage where the game is held and the names can be of any length

<img src="/assets/images/playersNames.png" width="250" height="400"><img src="/assets/images/PlayersNames2.png" width="250" height="400">

Now in the main screen there will be the title of the game up top then below the title there will be on the left player 1's name that was entered and there score for the game which starts at 0 and to the right will be player 2's name and score. After that the grid will be in the center of the screen.


<img src="/assets/images/dotGridActive.PNG" width="250" height="400">

Now for the game and how it played and the rules. So you will first start out with a grid like the one below 

<img src="/assets/images/dotGrid.PNG" width="200" height="200">

starting with player 1 each player will ta1ke turns filling in one line at a time, this is done by pressing on the slightly shaded blue boxes by inbetween the dots once clic1ked a line will a peer and it will be the next players turn. the goal is to make a full square out of the lines so if when you are the one to add the last line for a sqaure your first character in your name will appear in the square and you will get a point.  If a player does manage to ma1ke a square there turn will continue allowing them to add another line until they do not ma1ke a square.  once all the lines have been added the game will end declaring the one with the most points a victory then taking the users back to the starting page. As shown below.

<img src="/assets/images/finishedgame.png" width="250" height="400">

### Development of Code
creating this app took a bit of code to do and in this section i will brake down and explain the code.  To start with I need to import a few tools to use in react native.
```
import * as React  from 'react';
import { View, Text, Button, TextInput, Image, StyleSheet, Alert, FlatList,StatusBar,SafeAreaView, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState, useEffect } from 'react'
```
I needed to add the core compents that i used for the app as shown in the code above on the second import.  then next was calling for the navigation components i would need to have multiple screens to go back and forth from. Last was the useState and useEffort for storing and changing variables in the code.  After that I created the navigation stac1k and the main function that would hold the navigation containor and create the screens for tha app.

```
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
```

once the screens were created I made functions for each screen and started creating the content inside each screen `function StartPage({navigation}){}` each of the functions needed to call the navigation .  I started with the StarPage screen as it was the initial screen. This screen contained in its return an image of the games logo I designed in paints, a button that had start new game on it that would ta1ke you to the next screen PlayerPage and another disabled button that if worked would take you to the MainPage and have the previous game you left off still going. the next function PlayerPage had a text comment asking how many players and then two buttons for the player to choose between playing just 1 player or 2 player 1 player button is disabled because the feature to play one player is not avaiable but it would take the user to a screen that is not being used yet that would have one player give there name very similar to the screen that 2 player button actually takes the user to. In the next function screen called PlayersNames this function first creates two state variables that will contain strings of what the user enters in the input text `const [player1, setplayer1] = useState("");`.  These values will be called in the next function screen but before that there is also two functions built. One is to check if names where entered into the text inputs or not the other sends an alert to the users phone saying no names have been entered in these functions are only called if the button in the retun of this PlayersNames function, in the return there is one text that asks for players names next will be to input texts that allow the user to enter in there names these names will be stored in the variables created at the begining using there set values.
```
<TextInput
      style={styles.input}
      onChangeText={setplayer1}
      value={player1}
      />
 ```
 Last there will be the button that calls the functions if there are names in the to variables then the button will navigate the user to the MainPage screen if not the the alert function will activate `<Button title="Ready" onPress={()=> CheckNames(player1,player2)} />`.  Now the last screen function is the MainPage and it is were most of the code is held this function is where the players names scores and the grid for the game itself is created and interacted with. So to start with are the variables needed to this function:
 ```
  const [Score1, setScore1] = useState(0);
  const [Score2, setScore2] = useState(0);
  const [turn, setTurn] = useState(1);
  const [count, setCount] = useState(1);
  const player1N = route.params.paramKey;
  const player2N = route.params.paramKey2;
  const vertic = 9;
  const [grid, setgrid] = useState(
  [{id:'0', num: '1', bool: 'false'}
  ```
  As seen above there are eight variables the first is to hold a number for the score of player 1 second is the same but for player 2.  The third is the turn which holds a number that if odd it is player 1's turn and if even player 2's turn this is seperate from the count which keeps track of how many lines have been add because the turns do not get updated if a player creates a full square.  The player1N and player2N are the values of the previous screens variables sent over by calling `paramKey:player1, paramKey2:player2` in the navigate to after the button is pushed then the route is added to the MainPage functions parameters along with navigation `function MainPage({route,navigation})` and then called by `route.params.paramKey` next is a variable named vertic this variable is set to 9 to help with nativgating the grid.  Last is the grid array itself it has 80 objects with different valuse in each some li1ke the one shown above or others like this `{id:'50', num: '5',char: '', bool: 'false'}, in side each object there are either 3 or 4 variables the id is for the key to keep track of what object it is the bool is used to descide what should be displayed which will go into more detail later the num gives either a 1,2,3 or 5 a 1 is a dot value 2 is the vertical lines, 3 is the horizontal lines and 5 is the square in between the lines.  After the variables lets start at the return and we will discuss the functions when they are called. so in the return there will be the title, player1N,Score1, player2N, Score2 and then the FlatList this is used to render the grid array.
  ```
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
  ```
 For the FlatList in the first part we have the numColumns and its set to 9 so after nine objects are called it will move the next objects down a row, the key extractor gets the id numbers from the gridand the data gets the grid variables and then the renderItem calls the renderGrid function i made and sends the object in the array that its on so if its the first object the id would be 0 and once the renderGrid function is done the flatlist moves on to the next object in the grid.  So for the RenderGrid function it ta1kes the item that sent through and compares its num & flase value from the grid and using if statements the function chec1ks and decides what to return. So if the num = 2 and bool = false the function would return a button if the bool was true it would return an img of a horizontal line thesame thing happens if the num = 3 but if true the img is a vertical line.  If num = 1 it returns an image of a dot. and last is if the num = 5, if num = 5 and the bool is false it returns a text with nothing if its true the return is a text with the items char value. and all of these objects being returned have a width and hiegth of 25 to keep everything in place and alined correctly.Ex:
 ```
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
  ```
  As you can see above if the num = 2 or 3 it creates a button which calls pressedButton and it sends the items id and num as parameters. this leads us into the next function, so in this function it does a few things the first is it has two if statements to seperate if num = 2 or 3 after that it will call changebool function and sends the parameter id now in this function this changes the bool value of the array object with the id number sent and it will change the bool value to true so when a button is pushed it changes into the line image instead of a button in the grid. this is done by cloning the array and changing the new arrays one boolean value and then replacing the old array with the new by setGrid as shown below.
  ```
    const changeBool = (id) => {
    
    setgrid(grid => 
      [...grid].map(el => 
          el.id == id ? ({...el, bool:'true'}) : el)
      )
  }
  ```
  once this is down the function pressedButton has one more task.  in an if statement the function checks after the line is created did a square get formed.  now there are four functions that do this check each sliaghtly different then the other. if num = 2 the function calls checkSquareVUp and checkSquareVDown if the num = 3 it calls the checkSquareHLeft and checkSquareHright no these four functions do a few things first is in an if statement they chec1k if there at the end of the grid so if its checkSquareVUp it will make sure  that the button pushed is not one of the top buttons because if it is there is no square above so the function will return false.  now if it passes that chec1k it does the next chec1k which is chec1king to see if the square's lines around it are all true if even one is false then the function will return false but if true then the function returns true but also changes the squares bool to true and the char to the players first char in there name that made the square also giving that player a point by one, this is done by an if statement chec1king turn to be even or odd and if odd then Score1 and player1N values are used if even the player2N and Score2 get changed.Ex:
  ```
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
```
once the checkSquare function is done the pressedButton's if statement that calls the checkSquare functions will see if a true value is return if true is return then only count goes up by one if false is returned for both then the count and turn goes up by 1.
```
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
```
After that the pressedButton function is done and the flatlist continues to render the grid. After this the MAinPage has to check functions while the users are playing the game.  They are checkTurn and checkCount.  for check turn it figures out hows turn it is by an if statement that ta1kes the variable turn and divides by 2 getting the remainder either 1 or 0 if 1 in the rturn it will return a text component right above the grid saying player 1s turn in red text if the turn is 0 it will send a text component back saying player 2s turn in blue text.  For function checkCount this function keeps trac1k of the count value if count  equals 41 then that means all the buttons on the grid have been clicked and the game is over an if statement will decide either the winner or tie and will display an alert message saying that once the alert ok button is pushed theuser is ta1ken bac1k to the start screen.

```
const checkCount = () =>{

  if(count == 41)
  {
    if(Score1 > Score2)
    {
      Alert.alert(
        "Congradulations!",
        player1N + " is the winner!",
        [
          { text: "OK", onPress: () => navigation.navigate('StartPage') }
        ]
        );
    }
    if(Score1 < Score2)
    {
      Alert.alert(
        "Congradulations!",
        player2N + " is the winner!",
        [
          { text: "OK", onPress: () => navigation.navigate('StartPage') }
        ]
        );
    }
    if(Score1 == Score2)
    {
      Alert.alert(
        "Congradulations!",
        "No one lost its a tie!",
        [
          { text: "OK", onPress: () => navigation.navigate('StartPage') }
        ]
        );
    }
  }
}
```
That is it.
 

Planned features
----------------
The planned features are features for the game that i hope in the future i can add on to it.

- The first add on would be to make the game 1 player, so to make a computer AI play against the user
- the second would be for users to play each other on there own devices at the moment the only way to play is 2 players locally on one phone
- The third would be able to save a game and when you leave the app and come back you would have the option to start a new game or continue the previous game (i have added a button to the starting screen that would ta1ke you to the main game page but ive disabled the button for obvious reasons that it can not save games yet)

those are the main add ons I would like to work achieve first, then after that probably add better graphics or alittle more color so its not so plain.
 
Known issues and limitations
----------------------------
An issue i am having is when one line entered completes to squares for somereason its only giving a score of 1 instead of two since if you make a squares the you get a point so if you make two squares it should be 2 but for some reason the the Score values are only going up by 1.

so i had a big issue that made it so i could not identify objects in the grid array that the issue was resolved April 6, when i realized to check the objects i was using the object.id which is a string and adding a number which wouldn't add 1 like 1+1=2 it was doing string 1 + 1 = string 11.



Credit
------
Derek Brandvold


