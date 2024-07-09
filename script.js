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
 * 
 */
let count = 0
let countEl = document.getElementById('count-el')

function increment(){
    count++
    countEl.innerText = count
}