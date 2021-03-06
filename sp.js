/*
    ASSIGNMENT RULES
    - All the answers must be written in JavaScript
    - The solution must be pushed to the repository and be available for the tutors by the end of the day
    - You can ask for help, reach the Teaching Assistants if needed
    - You can google / use StackOverflow BUT we suggest you to use just the material provided
    - You can test your code in a separate file or de-commenting the single exercises in this one.
      You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
    - Complete as many exercise that you can
    - Publish them into your own GitHub account and upload repository link on Eduflow before 16.30 (Berlin Time) 
*/

//JS Basics

/* Ex.A
   Create a variable called ""test and assign a string to it.
*/

let test = "a string";
console.log(test)
/* Ex.B
    Create a variable called "sum" and assign to it the result of the sum between 10 and 20.
*/
let a = 10
let b = 20

let sum = a + b
console.log(sum)
/* Ex.C 
    Create a variable called "random" and assign to it a random number between 0 and 20 (it should be randomly created at each execution).
*/

let random = Math.floor(Math.random() * 20)
  
console.log(random)
/* Ex.D
    Create a variable called "me" and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.
*/
let me = {
    name: "Dovile", 
    surName: "Tumaite", 
    age: 25,
}
console.log(me)
/* Ex.E 
    Programmatically remove the age property from the previously create object.
*/
 function deleteAge(object)  {
  delete me.age
  return me
}
 result = deleteAge(me)
 console.log("the age should be deleted",me)

/* Ex.F 
   Programmatically add to the object me an array called "skills", containing the programming languages you know right now.
*/
function addSkilss (object) {
  me.skills = ["HTML", "CSS", "JavaScript"]
  return me 
}
result = addSkilss(me)
console.log("adding skills to the person object", me)
/* Ex.G 
   Programmatically remove the last skill from the "skills" array inside the "me" object.
*/
function removeSkill (object) {
  me.skills.pop()
  return me
} 
result = removeSkill(me)
console.log("remove the last skill from the previous object", me)
// JS Functions
/* Ex.1
    Write a function called "dice"; it should randomize an integer number between 1 and 6.
*/

function dice() {
    return Math.floor(1 + Math.random() * 6) 
}
result = dice()
console.log("an integer between 1 and 6:", dice())

/* Ex.2 
    Write a function called "whoIsBigger" which receives 2 numbers as parameters and returns the biggest one.
*/

function whoIsBigger(a1, b2) {
   if (a1 > b2) {
       return a1
   }else{ 
      return b2
   }
}
result = whoIsBigger(43, 39);
console.log("the biggest number is:",whoIsBigger(45, 89))


/* Ex.3
    Write a function called "splitMe" which receives a string as a parameter and returns an array with every word in that string.
    Ex. splitMe("I love coding") => returns ["I", "Love", "Coding"]
*/
 let  string = "I Love Coding"
function splitMe(){
 return  string.split(" ")
}
result= splitMe()
console.log("a splitted string:", splitMe(string))

/* Ex.4
    Write a function called "deleteOne" which receives a string and a boolean as parameters. If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.
*/
let e = 44
let t = 60
let str = "Just a string"

   function deleteOne() {
    if (e > t) {
   return str.slice(1)
    } else {
   return str.slice(0, str.length - 1);
  }
}
result = deleteOne(e, t, str)

  console.log("string whitout the first or the last letter:",deleteOne(e, t, str));
/* Ex.5
   Write a function called "onlyLetters" which receives a string as a parameter and returns it removing all the digits.
   Ex.: onlyLetters("I have 4 dogs")  => returns "I have  dogs"
*/
let stringWithNumbers = "I have 4 dogs"
function onlyLetters (){
return stringWithNumbers.replace(/[0-9]/g, '')
}
result = onlyLetters ()
console.log("the digits has been removed:", onlyLetters(stringWithNumbers))
  
/* Ex.6 
   Write a function called "isThisAnEmail" which receives a string as a parameter and returns true if the string is a valid email address.
*/
let emailAddress = "dovile.tumaiteyahoo.it"
function isThisAnEmail() {
    if  ((/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailAddress))) {
        return true
    } else { 
       return allert=("The mail dress is not valid!")
    }
 }
result = isThisAnEmail("some@address.it");
  console.log("is this an email?",isThisAnEmail(emailAddress)) 

/* Ex.7
   Write a function called "whatDayIsIt" that should return the current day of the week.
*/

function whatDayIsIt () {
return new Date ()
}
result =  whatDayIsIt ()
console.log("today is the:", whatDayIsIt ())
/* Ex.8
    Write a function called "rollTheDices" which receives a number as a parameter.
    It should invoke the dice() function defined in Ex1 the specified amount of times,
    and return an object containing a "sum" property holding the sum of all values extracted
    and a "values" array containing the single values of the dicerolls themselves.
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [3, 3, 4]
    }
*/

function rollTheDices (numbersOfDice) {
     let result = {
       sum: 0,
       values: []
     }
  
  for ( let i = 0; i < numbersOfDice  ; i ++){
    let numbersOfD = dice()
    result.sum += numbersOfD
    result.values.push(numbersOfD)

 }
   return result 
}

console.log("sum of the numbers of the dice function:",rollTheDices(10))

/* Ex.9
   Write a function called "howManyDays" which receives a date as a parameter and should return the number of days passed since that date.
*/
let selectedDate = new Date() 
function howManyDays(selectedDate) {
  let today = new Date()
  let difference = today - selectedDate 
  return difference / (1000 * 60 * 60 * 24)
}
console.log("number of days passed since that date:",howManyDays(selectedDate))

/* Ex.10
   Write a function called "isTodayMyBirthday" which should return true if today's your birthday, false otherwise.
*/
function isTodayMyBirthday() {
  let today = new Date ()
  let bday = new Date(1995, 9, 29)
  return (today.getDay() === bday.getDay() && today.getMonth() === bday.getMonth())
}
console.log("is today my birthday? ",isTodayMyBirthday())

// JS Arrays // Objs
// NOTE: movies array is defined at the end of this file!

const movies = [
    {
      Title: "The Lord of the Rings: The Fellowship of the Ring",
      Year: "2001",
      imdbID: "tt0120737",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings: The Return of the King",
      Year: "2003",
      imdbID: "tt0167260",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings: The Two Towers",
      Year: "2002",
      imdbID: "tt0167261",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "Lord of War",
      Year: "2005",
      imdbID: "tt0399295",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
      Title: "Lords of Dogtown",
      Year: "2005",
      imdbID: "tt0355702",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings",
      Year: "1978",
      imdbID: "tt0077869",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Lord of the Flies",
      Year: "1990",
      imdbID: "tt0100054",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
    },
    {
      Title: "The Lords of Salem",
      Year: "2012",
      imdbID: "tt1731697",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
      Year: "1984",
      imdbID: "tt0087365",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
    },
    {
      Title: "Lord of the Flies",
      Year: "1963",
      imdbID: "tt0057261",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
    },
    {
      Title: "The Avengers",
      Year: "2012",
      imdbID: "tt0848228",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Infinity War",
      Year: "2018",
      imdbID: "tt4154756",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Age of Ultron",
      Year: "2015",
      imdbID: "tt2395427",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Endgame",
      Year: "2019",
      imdbID: "tt4154796",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
    },
  ]

/* Ex.11
   Write a function called "deleteProp" which receives an object and a string as parameters, and returns the given object after deleting its property named as the given string.
*/
function deleteProp(obj, prop) {
  delete obj[prop]
  return obj
}
/* Ex.12 
    Write a function called "olderMovie" which finds the oldest movie in the array provided at the end of this file.
*/
function olderMovie () {
  let result = { Year: 2100 }
  for(let i = 0; i < movies.length; i++){
    let movie = movies [i]
    let currentYear = parseInt(movie.Year)
    if (currentYear < result.Year)
    result = movie
  }
  return result
}
console.log("The older movie is:", olderMovie())
/* Ex.13
    Write a function called "countMovies" which returns the number of movies contained in the array provided at the end of this file.
*/
function countMovies(){
  return movies.length
}
console.log("Numbers of movies:", countMovies())
/* Ex.14
    Write a function called "onlyTheTitles" which creates an array with just the titles of the movies provided in the array at the end of the file.
*/
function onlyTheTitles(){
  let result = []
  for (let i = 0; i < movies.length;  i ++){
    let movie = movies [i]
    result.push(movie.Title)
  }
  return result
}
console.log("List of titles:",onlyTheTitles())
/* Ex.15
   Write a function called "onlyInThisMillennium" which returns only the movies produced in this millennium.
*/
function onlyInThisMillennium (){
  let result = []
  for(let i = 0; i < movies.length; i ++){
    let movie = movies[i]
    if (parseInt(movie.Year) > 1999)
      result.push(movie)
  }
  return result
}
console.log("Movies of this millenium:", onlyInThisMillennium())
/* Ex.16 
    Write a function called "getMovieById" which receives an id as a parameter and returns the movie with the given id.
*/
function getMovieById(id) {
  for (let i = 0; i < movies.length; i++){
    if(movies[i].imdbID === id)
    return movies[i]
  }
  return {}
}
console.log("The movie of that id is:", getMovieById("tt0120737"))
/* Ex.17
    Write a function called "sumAllTheYears" which returns the sum of all the years in which the movies provided have been produced.
*/
function sumAllTheYears () {
  let result = 0
  for (let i = 0; i < movies.length; i++){
    result += parseInt(movies[i].Year)
  }
  return result
}
console.log("Sum of all the years in which the movies have been produced:",sumAllTheYears())
/* Ex.18
    Write a function called "searchByTitle" which receives a string as a parameter and returns all the movies which contain that string in the title.
*/
function searchByTitle(keyword){
  let result = []
  for (let i = 0; i < movies.length; i++){
    if (movies[i].Title.indexOf(keyword) !== -1)
    result.push(movies[i])
  }
  return result
}
console.log("Movies with that Title:", searchByTitle("The Lord of the Rings"))
/* Ex.19
    Write a function called "searchAndDivide" which receives a string as a parameter and returns an object;
    this object should contain an array called "match", made by all the movies which contain the given string in the title,
    and another array "unmatch" with all the remaining ones.
*/
function searchAndDivide(word){
  let result = {
    match: [],
    unmatch: []
  }
  for (let i = 0; i < movies.length; i++){
    if (movies[i].Title.indexOf(word) !== -1)
    result.match.push(movies[i])
    else
    result.unmatch.push(movies[i])
  }
  return result
}
console.log("list of watched an unwatched movies:", searchAndDivide("The Lord of the Rings"))
/* Ex.20
   Write a function called "removeIndex" which receives a number as a parameter and returns the movies array without the element in the given position.
*/
function removeIndex (number){
  let result = []
  for (let i = 0; i < movies.length; i++){
    if (number === i)
    continue

    result.push(movies[i])
  }
  return result
}
console.log("List without one movie:",removeIndex(3))
// [EXTRAS] JS Advanced

/* Ex.21
  Create a function called "halfTree" which receives a number as a parameter and builds an "*" half tree with the given height.
  Example:
  halfTree(3)
  *
  **
  ***
*/

function halfTree(height) {
  for (let i = 0; i < height; i ++){
    let toPrint = ""
    for (let j = 0; j < i +1; j++) {
      toPrint += "*"
      console.log(toPrint)
    }
  }
}
console.log(halfTree(6))

/* Ex.22 
  Create a function called "tree" which receives a number as a parameter and builds an "*" tree with the given height.
  Example: 
  tree(3)
    *  
   *** 
  *****
*/
function tree(height) {
  for (let i = 0; i < height; i++){
    let stars = "*".repeat(2 * i +1)
    let spaceBefore = " ".repeat(height - i - 1)
    console.log(spaceBefore + stars)
  }
  return result
}
console.log(tree(12))
/* Ex.23
  Create a function called "isItPrime" that receives a number as a parameter and returns true if the given number is a prime number.
*/
function isItPrime(number){
  for (let i = 2 ; i < number; i ++){
    if (number % i === 0)
    return false
  }
  return true
}
console.log("is this number a prime number?",isItPrime(66))
/* This movies array is used throughout the exercises. Please don't change it :)  */
