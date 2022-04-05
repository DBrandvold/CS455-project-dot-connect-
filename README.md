
CS455-project-dot-connect
=========================


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
<img src="/assets/images/DotConnect Logo.png" width="100" height="100">


Installation
------------

Manifest
--------
-assets
-.gitignore
-App.js
-DotConnect Logo.png
-README.md
-app.json
-babel.config.js
-circle.png
-horizontalline.png
-package.json
-verticalline.png 
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
starting with player 1 each player will ta1ke turns filling in one line at a time, this is done by pressing on the slightly shaded blue boxes by inbetween the dots once clic1ked a line will a peer and it will be the next players turn. the goal is to make a full square out of the lines so if when you are the one to add the last line for a sqaure your first character in your name will appear in the square and you will get a point.  If a player does manage to ma1ke a square there turn will continue allowing them to add another line until they do not ma1ke a square.  once all the lines have been added the game would end diclaring the one with the most points a victory then taking the users bac1k to the starting page. how ever as will be stated in the 1known issues and limitations section the game cannot currently do this.

### Development of Code



Planned features
----------------
The planned features are features for the game that i hope in the future i can add on to it.

- The first add on would be to make the game 1 player, so to make a computer AI play against the user
- the second would be for users to play each other on there own devices at the moment the only way to play is 2 players locally on one phone
- The third would be able to save a game and when you leave the app and come back you would have the option to start a new game or continue the previous game (i have added a button to the starting screen that would ta1ke you to the main game page but ive disabled the button for obvious reasons that it can not save games yet)

those are the main add ons I would like to work achieve first, then after that probably add better graphics or alittle more color so its not so plain.
 
Known issues and limitations
----------------------------
The big issue I am having with the game right now is when one of the buttons created by the flatlist is clicked on it is suppose to create the line in the grid and it does, but its also suppose to chec1k to see if a square has been created.  The issue is whenever I call a value from the grid that is a high key value in the grid it returns undefined which is causing the game to crash. In the function pressedButton it calls on four other functions called checkSquareVUp, checkSquareVDown, checkSquareHRight and checkSquareHLeft, which will check if the line added completed a square and then return a boolean. The call i use for getting the item boolean value is grid[id].bool now the id part is the key value for the item that the flatlist is on at that time we send that through the four functions which then change that number to find the other square line boolean values and if the other line boolean values are true then the circle has been completed and that player score will go up by one.  As stated above when checking the other lines only the lines that have a key value lower then the one that is currently on can produce values the others send undefined.

The issue above has also impacted on moving forward to finshing the game, so as the lines are added in there is a hidden count in the code that does not show the user once the count its the correct number which in this game there are 40 lines that will need to be added everytime that happens the count will go up once the count hits 40 that means there will be no lines left to add and will add up the scores between player 1 and player 2. Once that is done a alert would pop up saying congradulations to the winning player then once an alert button is pushed it will take the users back to the starting screen.



Credit
------
Derek Brandvold


