/*steps
- Connect buttons on html to javascript variables 
- ? COME BACK later 

*/


// connect buttons to js
//* IF button is clicked how do i get values of buttons
//* Then sending those values to Display of calculator

let numbers = document.querySelectorAll(".nums button"); //Array of Buttons on HTML PAGE
let display = document.getElementById("numberDisplayText"); //using this to send numbers to this display

console.log(numbers[3].value)

addEventListenersToButtons()

//This function is making the array of buttons have a click function to run a function
function addEventListenersToButtons() {
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (numbers[i] === numbers[0]) {
            element.addEventListener("click", clear)
        } else {
            element.addEventListener("click", addDigitToDisplay)
        }
    }

}

function addDigitToDisplay() {
    let value = this.value;
    display.innerHTML += value;
}

function clear() {
    display.innerHTML = "";
}


