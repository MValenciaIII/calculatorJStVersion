//! WHAT DO WE NEED TO ACCOMPLISH THIS TASK
//? 1. Display Numbers on the screen
//* IT IS DISPLAYING 
//? 2. IF I press a button it gets sent to the screen
//* IF I press a button I want it to DO STUFF
//* Get all the buttons to do stuff
//TODO IF I PRESS A BUTTON SEND IT TO DISPLAY
//? 3. Save two numbers and calculate them
//TODO I want to Create One function for each operand
//TODO I will have one function but I'll have IF ELSE STATEMENT inside that function
//* Clear and Solve button will have seperate functions
//? How Do I save the first Num?
//TODO If an operand is click, save the current Number.



// let clearButton = document.querySelector(".clearButton button")

// console.log(clearButton)

// clearButton.addEventListener("click", () => {
//     console.log();
// })


//* THIS IS GRABBING ALL THE BUTTONS and Inserting it into a NODELIST (ARRAY)
let allBtns = document.querySelectorAll(".mainCalc button")
//* THIS IS GRABBING THE DISPLAY NODE
let display = document.querySelector(".displayRow p")
//* Made this variable to save one of the numbers
let firstNum = "";
//* Is to save the operator for when we click solve
let operand = "";
//* Saving the second num when Sovle button is pressed.
let secondNum = "";

//* using this variable to keep track of decimal points
let decimalCount = 0;
let operandCount = 0;
console.log(allBtns)



addingButtonListeners()
function addingButtonListeners() {
    for (let i = 0; i < allBtns.length; i++) {
        const currentButton = allBtns[i];
    
        //! Creating a condition if not NaN to use another function
        if (allBtns[i].value ===  "clear") {
            allBtns[i].addEventListener("click", clearingDisplay);
        } else if(allBtns[i].value === "add" || allBtns[i].value === "divide" || allBtns[i].value === "subtract" || allBtns[i].value === "multiply" ) {
            allBtns[i].addEventListener("click", settingTheOperand);
        } else if(allBtns[i].value === "solve")  {
            allBtns[i].addEventListener("click", solveTheEquation);
        } else if(allBtns[i].value === ".") {
            allBtns[i].addEventListener("click", () => {
                //? I need to check if it is greater than or = to ONE
                if (decimalCount < 1) {
                    display.innerHTML += allBtns[i].value
                    decimalCount++
                } else {
                   return;
                }

            });
        }
            else {
            //? ADDING EVENT LISTENER TO ALL THE BUTTONS IN THE NODE LIST
            allBtns[i].addEventListener("click", () => {
                display.innerHTML += allBtns[i].value
            })
        }
    }

}



function clearingDisplay() {
    display.innerText = ""
}

function settingTheOperand() {
    //? How do I receive the operand? 
    // if (this.value === "add") {
    //     operand = "+"
    //     firstNum = display.innerText;
    //     clearingDisplay();

    // }

    switch (this.value) {
        case "add":
            operand = "+"
            firstNum = display.innerText;
            decimalCount = 0;
            clearingDisplay();
            break;
        case "subtract":
            operand = "-"
            firstNum = display.innerText;
            decimalCount = 0;
            clearingDisplay();
            break;
        case "multiply":
            operand = "*"
            firstNum = display.innerText;
            decimalCount = 0;
            clearingDisplay();
            break;
        case "divide":
            operand = "/"
            firstNum = display.innerText;
            decimalCount = 0;
            clearingDisplay();
            break;
        default:
            break;
    }
}


function solveTheEquation() {
    //? What type of operand do i have? 
    //* I saved the operand string earlier and so I have to manually make the equation
    secondNum = display.innerText;
    clearingDisplay();

    switch (operand) {
        case "+":
            display.innerText = parseFloat(firstNum) + parseFloat(secondNum);
            break;  
        case "-":
            display.innerText = parseFloat(firstNum) - parseFloat(secondNum);
            break;  
        case "*":
            display.innerText = parseFloat(firstNum) * parseFloat(secondNum);
            break;  
        case "/":
            display.innerText = parseFloat(firstNum) / parseFloat(secondNum);
            break;  
    }
    
}