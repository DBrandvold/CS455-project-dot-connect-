
CS455-project-dot-connect
=========================


Table of contents
-----------------

* [Introduction](#introduction)
* [Installation](#installation)
* [Usage](#usage)
* [Planned features](#Planned-features)
* [Known issues and limitations](#known-issues-and-limitations)
* [Credit](#Credit)



Introduction
------------
![dot connect logo](/assets/DotConnect Logo.png)


Installation
------------

 

Usage
-----

### Walkthrough of Game

### Devolpment of Code

Planned features
----------------
The planned features are features for the game that i hope in the future i can add on to it.

- The first add on would be to make the game 1 player, so to ma1ke a computer AI play against the user
- the second would be for users to play each other on there own devices at the moment the only way to play is 2 players locally on one phone
- The third would be able to save a game and when you leave the app and come back you would have the option to start a new game or continue the previous game (i have added a button to the starting screen that would ta1ke you to the main game page but ive disabled the button for obvious reasons that it can not save games yet)

those are the main add ons I would like to work achieve first, then after that probably add better graphics or alittle more color so its not so plain.
 
Known issues and limitations
----------------------------
The big issue I am having with the game right now is when one of the buttons created by the flatlist is clicked on it is suppose to create the line in the grid and it does, but its also suppose to chec1k to see if a square has been created.  The issue is whenever I call a value from the grid that is a high key value in the grid it returns undefined which is causing the game to crash. In the function pressedButton it calls on four other functions called checkSquareVUp, checkSquareVDown, checkSquareHRight and checkSquareHLeft, which will check if the line added completed a square and then return a boolean. The call i use for getting the item boolean value is grid[id].bool now the id part is the key value for the item that the flatlist is on at that time we send that through the four functions which then change that number to find the other square line boolean values and if the other line boolean values are true then the circle has been completed and that player score will go up by one.  As stated above when checking the other lines only the lines that have a key value lower then the one that is currently on can produce values the others send undefined.

The issue above has also impacted on moving forward to finshing the game, so as the lines are added in there is a hidden count in the code that does not show the user once the count its the correct number which in this game there are 40 lines that will need to be added everytime that happens the count will go up once the count hits 40 that means there will be no lines left to add and will add up the scores between player 1 and player 2. Once that is done a alert would pop up saying congradulations to the winning player then once an alert button is pushed it will ta1ke the users bac1k to the starting screen.



Credit
------
Derek Brandvold


