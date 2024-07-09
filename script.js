// document.getElementById("count-el").innerText = 7;
/*let myAge = 28;
let humanDogRatio =7;
let myDogAge = myAge*humanDogRatio;
console.log(myDogAge);
let count =0 ;

console.log(count)
REASSINGNIN AND INCREMENTING
// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// Decrease it down to 25, and then finally increase it to 70

let bonusPoints = 50;
bonusPoints= bonusPoints+50;
bonusPoints= bonusPoints-25;
bonusPoints =bonusPoints+70;
console.log(bonusPoints)

*/
// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count
/*
USING FUNCTIONS TO WRITE LESS CODE

function countdown() {
    console.log(5)
    console.log(4)
    console.log(3)
    console.log(2)
    console.log(1)
}

// Setting up the the race 🏎 🏎 🏎

countdown()

// GO! 🏁
// Players are running the race 🏎 💨
// Race is finished! 🍾

// Get ready for a new race 🏎 🏎 🏎

countdown()

let lap1 = 34
let lap2 = 33
let lap3 = 36

// Create a function that logs out the sum of all the lap times

function sumLaps(lap1,lap2,lap3){
    let sum = lap1+lap2+lap3;
    console.log(sum)
}
sumLaps(lap1,lap2,lap3)

WRITE A FUNCTION THAT INCREMENTS
let lapsCompleted = 0

// Create a function that increments the lapsCompleted variable with one
// Run it three times

function increment(){
    lapsCompleted++;
    
}


console.log(lapsCompleted)

*/
// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count
/**
 * let count =0;
function increment(){
    count++;
document.getElementById('count-el').innerText = count;
}
 * 
 * DOM document object model-- how uses JavasCrop to modifay a wedbside 
 */
// 1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById('save-el')
let count = 0
let countEl = document.getElementById('count-el')
let sumOut = document.getElementById('sum-out')

function increment(){
    count++
    countEl.innerText = count

    function sum(){
        sumOut.innerHTML = countEl;
       }
}

// 1. Create a function, save(), which logs out the count when it's called

function save(){
    let countStr = count + "  - "
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    saveEl.textContent += countStr
    // NB: Make sure to not delete the existing content of the paragraph
    console.log(count)

    // SET THE COUNT 0
    count = 0;
    countEl.innerText= 0
}



/**
 * WRITE YOUR FIRST STRInG VARIABLE
 * 
 * let username = "per"
let message = "You have three notifications"
let messageToUser = message + ", " + username + "!"
// Create a variable, message, that stores the string: "You have tree new notifications"

console.log(username)
console.log(message)

let name = "Per Harald Borgen"
let greeting = "Hi, my name is "
let myGreeting = greeting + name
console.log(myGreeting)


// Grab the welcome-el paragraph and store it in a variable called welcomeEl

// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page

// Render the welcome message using welcomeEl.innerText
welcomeEl = document.getElementById('welcome-el').innerText;
let name = 'Luis Restrepo'
let greeting = 'Hey, welcome'
welcomeEl.innerText = console.log(name +greeting)
 * 

// Add an emoji to the end! 👋
// WRITE YOUR CODE BELOW HERE
// HINT: count = count + 1

welcomeEl.innerText += "👋"

 */

