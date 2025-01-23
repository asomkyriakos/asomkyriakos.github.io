# A private messaging app

So this personal project's aim was to make a more private messaging. In the current years more and more of our data is shared between corporations in the internet.So i attempted to create
a messaging app(for the moment this messaging app works locally using computer ports).

##  Compiler
This project compiles using the following command

````bash
 gcc -o server ServerRoom.c
 gcc -o client ClientRoom.c
````

## Usage Instructions
For this program to work the user needs to utilize 2 command prompt at the same time and follow these steps:
> 1st: The user must execute ./server in the 1st command line
> 2nd: In the other command line the user should compile ./client
> 3rd: Under no circumstances should the user press ctrl+c in any of the command lines because there is a current bug with port management and connectivity. The program closes by typing exit and pressing enter on the server command line



