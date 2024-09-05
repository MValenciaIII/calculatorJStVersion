/*steps
- Connect buttons on html to javascript variables 
- ? COME BACK later 

*/


//! connect buttons to js
//* IF button is clicked how do i get values of buttons
//* Then sending those values to Display of calculator


//? How to create a operation between two numbers
//TODO when a operator button is pressed SAVE the current Number displayed to a variable. 
//? How do i accomplish this
//? a function? 
//THIS IS FOR MULTIPLE NUMBERS for future
//// save list of numbers to an array?
//? what about the operators?
//TODO Make a function. Be able to hold two numbers (Prob VARIABLES)
//TODO 
//TODO

let numbers = document.querySelectorAll(".nums button"); //Array of Buttons on HTML PAGE
let display = document.getElementById("numberDisplayText"); //using this to send numbers to this display
let nums = [] //Hold multiple number


console.log(numbers)

addEventListenersToButtons()

//This function is making the array of buttons have a click function to run a function
function addEventListenersToButtons() {
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (numbers[i] === numbers[0]) {
            element.addEventListener("click", clear)
        } else if (numbers[i] === numbers[2] || element === numbers[1] || element === numbers[6] || element === numbers[13]) {
            element.addEventListener("click", settingNumbers)
        } else {
            element.addEventListener("click", addDigitToDisplay)
        }

        console.log(numbers[i])

    }

}

let tempValue;

function addDigitToDisplay() {
    let value = this.value;
    display.innerHTML += value;

}

function clear() {
    display.innerHTML = "";
}


    //! Array method maybe not the best...
    //? What if we focus on two numbers at a time and keep track of the previous Num and keep adding it to the new input. 
    //? Global variable keeping track of Prevnum. 

function settingNumbers() {
    
    let currentNumber = display.innerText;
    console.log(this.value)
    nums.push(this.value)
    //? this.value is the operand if pressed. 
    //* Make if else statements bc the value of buttons of operands are in strings. 
    console.log(parseFloat(currentNumber))
    nums.push(parseFloat(currentNumber)) 
    console.log(nums)
    clear();
}

