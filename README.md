
# CS455-project-dot-connect



Table of contents
-----------------

* [Introduction](#introduction)
* [Manifest](#Manifest)
* [Installation](#installation)
* [Usage](#usage)
* [Planned Features](#Planned-features)
* [Known Issues and Limitations](#known-issues-and-limitations)
* [Credit](#Credit)



Introduction:
------------
<img src="/assets/images/DotConnect Logo.png" width="100" height="100">

This app was created for a school project that required us to create an app in React Native and to use Github as a repository.  The goal was to develop experience in mobile app development,  while applying what we learned in class.  

We were given the option of creating the app we wanted, as long as it was complex enough.  I wanted to create a game, as I wanted to do something that I was interested in to keep me motivated.  I chose to build a game that I used to play back in high school on graph paper called “dot connect”.  This is a game where you have a grid of dots and have to make squares and you get a point by taking turns adding lines.  I did a bit of searching and could not find this game in the app store so I thought it would be perfect.  


Installation:
------------
To access the game, you will need to download Expo Go on your andriod or Iphone. atleast for Iphones if you go into the App store and search Expo, Expo Go will be one of the first apps to appear.  once downloaded you will need to sign up this does not cost anything and is very straight forward. once you are signed up and the app is downloaded all you need to do is use ur phones camera and scan the QR code below this will allow you access to the game!

<img src="/assets/images/QR_code.png"width="300" height="300">

Manifest
--------
- Assets:  Holds images used in the app and in the readme file
- .gitignore:  Always use Github to ignore files 
- App.js:  The apps code
- DotConnect Logo.png:  Logo image of the game
- README.md: The readme file that describes the project
- app.json:  The manifest format for the app
- circle.png:  Image of the dot used in the grid
- horizontalline.png:  Image of the horizontal line used in grid
- package.json:  Has the apps dependencies
- verticalline.png:  Image of the vertical line used in grid

Usage:
-----
In this section, I will discuss the usage of the app.  I will walk through how the game is played and navigate through the screens of the game. I also will be discussing the development of the game, the code I wrote, and the tools and functions used in the code.

### Walk through of Game:

The app will take you to the first screen, which is called the startPage.  As shown below in the image, the screen will have the game’s logo in the center and below it there will be a start new game button and a disabled continue game button.  When the start new game button is clicked you will go to the next screen, which is the Player Page screen.  The continue game button would have taken you to the Main Page screen and would show the previous game you were playing to continue it, but that feature is not available yet.

<img src="/assets/images/startScreen.png" width="250" height="400">

Next, after clicking the start new game button, the Player Page screen will pop up and the user will see some text and two buttons.  The text will say " How many players".  After this, there is another disabled button called 1 player.  This is another feature that will eventually be added to the game, where the user can play a game against a computer.  The second button is labelled 2 player, which is the only option available at the moment.  Once this button is pushed, the app will take the user to the next screen, which is where the player’s names are entered.

<img src="/assets/images/playerPage.png" width="250" height="400">

This next screen will have a bit of text and asks the users to enter their names in the boxes provided;  player 1 first and then player 2.  The names can be of any length.  Once the names have been added, the user will then click on the ready button, which will take them to the Main Page where the game is.  

<img src="/assets/images/playersNames.png" width="250" height="400"><img src="/assets/images/PlayersNames2.png" width="250" height="400">

On the Main Page screen, there will be the title of the game at the top.  Then below the title on the left side, there will be player 1's name that was entered and their score for the game, which starts at 0 and to the right will be player 2's name and score.  The grid will be in the center of the screen.


<img src="/assets/images/dotGridActive.PNG" width="250" height="400">

Now I will describe how the game is played and the rules. You first start out with a grid like the one below:

<img src="/assets/images/dotGrid.PNG" width="200" height="200">

Starting with player 1, each player will take turns filling in one line at a time.  This is done by pressing on the slightly shaded blue boxes in between the dots.  Once clicked, a line will appear and then it will be the next player’s turn.  The goal is to make a full square out of the lines, so if you are the one to add the last line for a square, the first character in your name will appear in the square and you will get a point.  If a player does manage to make a square, their turn will continue allowing them to add another line until they do not make a square.  Once all the lines have been added, the game will end declaring the one with the most points the winner.  Then it will take the users back to the starting page. As shown below.

<img src="/assets/images/finishedgame.png" width="250" height="400">

### Development of Code:

It took time to develop the code to create this app.  In this section. I will break down and explain the code.  To start, I needed to import a few tools to use in React Native.
```
import * as React  from 'react';
import { View, Text, Button, TextInput, Image, StyleSheet, Alert, FlatList,StatusBar,SafeAreaView, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState, useEffect } from 'react'
```
I needed to add the core components for the app as shown in the code above.  Next, it was calling for the navigation components.  I needed to have multiple screens to go back and forth from. Last was adding the useState and useEffort for storing and changing variables in the code.  After that I created the navigation stack and the main function that would hold the navigation components and create the screens for the app.

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
Once the screens were created, I made functions for each screen and started to create the content inside each screen `function StartPage({navigation}){}`.  Each of the functions needed to have the navigation parameters within it .  I started with the StartPage screen, as it was the initial screen. This screen contained an image of the games logo that I designed in paints.  It also had a start new game button on it, which would take you to the next screen, which was the PlayerPage.  It had another button that is disabled.  If this button worked, it would take you to the MainPage and it would have the previous game you didn’t finish that you could continue playing. 

The next function, which was the PlayerPage, had a text comment asking how many players and then two buttons for the player to choose between playing 1 player or 2 players.  The 1 player button is disabled because the feature to play one player is not available.  If available,  it would take the user to a screen that would have the one player give their name very similar to the screen that the 2 player button takes the user to.  

In the next function screen called PlayersNames, this function first creates two state variables that will contain strings of what the user enters in the input text `const [player1, setplayer1] = useState("");`.  These values will be used in the next function screen.  However, before this there are also two functions built.  One function is to check if names were entered into the text inputs. The other function sends an alert to the user’s phone saying no names have been entered.  These functions are only called if the button in the PlayersNames function is clicked.  What will be shown in the PlayersNames screen  is one text component that asks for the players’ names.  Next will be to input texts that allow the user to enter in their names.  These names will be stored in the variables created at the beginning of this function using their set values.
```
<TextInput
      style={styles.input}
      onChangeText={setplayer1}
      value={player1}
      />
 ```
There will be a button that calls the functions if there are names in the variables.  Then the button will navigate the user to the MainPage screen and if it doesn’t, then the alert function will activate `<Button title="Ready" onPress={()=> CheckNames(player1,player2)} />`.  The last screen function is the MainPage and it is where most of the code is contained.  This function is where the players’ names and scores and the grid for the game itself is created, and interacted with. So these are the variables needed to this function:
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
As seen above, there are eight variables.  The first variable is to hold a number for the score of player 1 and the second variable is the same, but for player 2.  The third variable is for which player’s turn it is and holds a number that if odd it is player 1's turn and if even it is player 2's turn.  This is seperate from the count, which keeps track of how many lines have been added because the turns do not get updated if a player creates a full square.  The player1N and player2N are the values of the previous screen’s variables sent over by `paramKey:player1, paramKey2:player2` , which is routed after the button is pushed.  Then the route is added to the MainPage function’s parameters along with navigation `function MainPage({route,navigation})` and then is called by `route.params.paramKey`.  Next is a variable named vertic.  This variable is set to 9 to help with navigating the grid.  Last, is the grid array which has 80 objects with different values in each.  Some are like the one shown above or others are like this `{id:'50', num: '5',char: '', bool: 'false'}.  Inside each object, there are either 3 or 4 variables.  The id is the key to keep track of what object it is, the bool is used to describe what should be displayed which I will go into more detail later. The  num gives either a 1,2,3 or 5.  A 1 is a dot value, 2 is the vertical lines, 3 is the horizontal lines and 5 is the square in between the lines.  Next, we will discuss the screen’s function’s return.  So in the function’s return there will be the title, player1N, Score1, player2N, Score2 and then the FlatList this is used to render the grid array.
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
For the FlatList, I have the numColumns and it’s set to 9, so after nine objects are called it will move the next objects down a row.  The key extractor gets the id numbers from the grid and the data gets the grid variables.  Then the renderItem calls the renderGrid function I made and sends the object in the array that it’s on.  So, if it’s the first object the id would be 0 and once the renderGrid function is done the flatlist moves on to the next object in the grid.  

For the RenderGrid function, it takes the item sent and compares its num & bool value from the grid and using if statements the function checks and decides what to return. So if the num = 2 and bool = false, the function would return a button.   If the bool was true, it would return an image of a horizontal line.  The same thing happens if the num = 3, but if true the image is a vertical line.  If num = 1, it returns an image of a dot.  Last, if the num = 5.  If num = 5 and the bool is false, it returns a text with nothing.  If it’s true, the return is a text with the item’s char value.  All of these objects being returned have a width and height of 25 to keep everything in place and aligned correctly.  Example:
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
 As you can see above, if the num = 2 or 3, it creates a button which is called pressedButton and it sends the item’s id and num as parameters. The pressedButton function does a few things.  First it has two if statements to separate if num = 2 or 3.  After that it will call the changebool function and sends the parameter id.   This function changes the bool value of the array object with the id number sent and it will change the object’s bool value to true.  This will  change the button pushed into the line image instead of the button.

This is done by cloning the array and changing the new array’s one boolean value and then replacing the old array with the new by the useState’s setGrid as shown below.
  ```
    const changeBool = (id) => {
    
    setgrid(grid =>
      [...grid].map(el =>
          el.id == id ? ({...el, bool:'true'}) : el)
      )
  }
  ```
Once this is done, the function pressedButton has one more task.  In an if statement, the function checks if the line that was added created a square.  There are four functions that do this, each function is slightly different then the other.  If num = 2, the function calls checkSquareVUp and checkSquareVDown.  If the num = 3, it calls the checkSquareHLeft and checkSquareHright. These four functions have a few differences, but basically do the same thing.  First an if statement is used to check if the line added is on an edge of the grid.  So if it's checkSquareVUp, it will make sure that the button pushed is not one of the top buttons because if it is there is no square above it, so the function will return false.  If it passes that check, it does the next check, which is to see if the square's lines around it are all true.  If even one is false, then the function will return false.  But if true, then the function returns true and calls functions changeChar,changeColor and changeBool.  changeChar and changeColor are very similar to changeBool, except that it passes another parameter that will be changed when the function creates a new array with the change and then replaces the original grid array. 

The functions will change the object's char to the player’s first char from their name.  The bool will change to true from false and the tColor will change to player’s color, which is either blue or red.  Then the player’s score variable, either Score1 or Score2 depending on the player.  Figuring out which player did this is done by an if statement checking the turn variable to be even or odd and if odd then Score1 and player1N values are used.  If even, the player2N and Score2 gets changed.  Example:
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
    changeColor(id - vertic, ‘red’);
          changeBool(id - vertic);
          setScore1(Score1 + 1);
          return(true);
        
        }
        //whos turn is it check
        if(turn % 2 == 0)
        {
          // change char and bool of square and add to player2 score
          changeChar(id - vertic, player2N.charAt(0));
changeColor(id - vertic, ‘blue’);
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
Once the checkSquare function is complete, the pressedButton's if statement that calls the checkSquare functions will see if a true value is returned.  If true is returned, then only the count variable goes up by one.  If false is returned for both, then the count and turn variables go up by 1.
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
After the pressedButton function is done and the flatlist continues to render the grid, the MainPage has two check functions while the users are playing the game.  They are checkTurn and checkCount.  For checkTurn, it figures out whose turn it is by an if statement that takes the variable turn and divides by 2 getting the remainder either 1 or 0.  If 1 is the value, it will return a text component right above the grid saying player 1s turn in blue text. If the value is 0, it will send a text component back saying player 2s turn in red text.  The checkCount function keeps track of the count value.  If the  count value equals 41, then this means all the buttons on the grid have been clicked and the game is over.  An if statement comparing Score1 and Score2 will figure out who won or if there is a tie and will display an alert message.  Once the ok button in the alert is pushed the user is taken back to the start screen by the `text: "OK", onPress: () => navigation.navigate('StartPage')` code.

```
const checkCount = () =>{

  if(count == 41)
  {
    if(Score1 > Score2)
    {
      Alert.alert(
        "Congratulations!",
        player1N + " is the winner!",
        [
          { text: "OK", onPress: () => navigation.navigate('StartPage') }
        ]
        );
    }
    if(Score1 < Score2)
    {
      Alert.alert(
        "Congratulations!",
        player2N + " is the winner!",
        [
          { text: "OK", onPress: () => navigation.navigate('StartPage') }
        ]
        );
    }
    if(Score1 == Score2)
    {
      Alert.alert(
        "Congratulations!",
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
 

Planned Features:
----------------
These are the features for the game that I hope I can add on to it in the future.

- The first add on would be to make the game 1 player functional, to allow a computer’s AI play against the user.
- The second would be for users to play each other on their own devices.  At the moment, the only way to play is for 2 players to play on one phone.
- The third would be able to save a game so when you leave the app and come back you would have the option to start a new game or continue the previous game.  (I have added a button to the startPage screen that would take you to the mainPage, but I've disabled the button, as it can not save games yet.)

Those are the main add-ons I would like to complete.  After this, I would like to add better graphics and a little more color so it's not so plain.
 
Known Issues and Limitations:
----------------------------
An issue I am having is when one line is added that completes two squares.  For some reason it's only giving a score of 1 instead of two.  If you make a square, you get a point.  So if you make two squares, it should be 2.  For some reason the score values are only going up by 1.  
Another problem is that the Dot connects logo on the startPage screen has an error message.   In expo problems, it states that the file cannot be found and yet the image still gets displayed when i run the game on my phone.  But I don’t really want to change it since it works.  

I also had a big issue where I  could not identify objects in the grid array.  This issue was resolved on April 6, when I checked the objects I was using.  The object.id, which is a string, was adding a number value, which wouldn't add 1 like 1+1=2, it was doing a string 1 + 1 = a string value of 11.





Credit
------
Derek Brandvold





