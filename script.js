// Author: Addison Farley
// Date: 10/11/22
// File Name: script.js
// File Description: SDEV 117 Calories Tracker Javascript File

//this registers the button click events when the
document.getElementById("lbs-to-kgs").onclick = lbsToKgs;
document.getElementById("workout-to-met").onclick = workoutToMet;
document.getElementById("calc-calories").onclick = calculateCalories;

//convert lbs to kgs from the input fields in the page and send output to the console
function lbsToKgs()
{
    //write your code here - get the lbs value from the textbox, convert to kgs
    //and display using the output() function

    //get textbox and put it in a variable
    let lbsTextBox = document.getElementById("lbs");

    //grabs the text from the textbox
    let lbs = lbsTextBox.value;
    let kgs = parseFloat(lbs) * .453592;
    output(lbs + " pounds is " + kgs.toFixed(2) + " kilograms");

    //set the text in the textbox 
    lbsTextBox.value = "New value";
}

//determine MET value for exercises in the dropdown list and send output to the console
function workoutToMet()
{
    //write your code here - get the MET value from the dropdown and display using the
    //output() function
    // https://www.w3schools.com/jsref/coll_select_options.asp
    let valueMET = workouts.options[workouts.selectedIndex].value;

    let indexMET = workouts.options[workouts.selectedIndex].index;

    let idMET = document.getElementById("workouts").options[indexMET].text;

    switch(idMET)
    {
        case "bicycling, leisure, 9.4 mph":
            output("Bicycling has a MET value of " + valueMET);
            break;

        case "dancing, aerobic, high impact":
            output("Dancing has a MET value of " + valueMET);
            break;

        case "jogging, general":
            output("Jogging has a MET value of " + valueMET);
            break;

        case "basketball, game":
            output("Basketball has a MET value of " + valueMET);
            break;

        case "fencing":
            output("Fencing has a MET value of " + valueMET);
            break;

        case "hang gliding":
            output("Hang gliding has a MET value of " + valueMET);
            break;
    }

}

//Calculates the calories burned per minute, given the inputs from the page and sends the output to the console
function calculateCalories()
{
    //write your code here - get the kgs and MET values from the textboxes and display using the
    //output() function
    let valueMET = document.getElementById("met");
    let met = valueMET.value;

    let valueKgs = document.getElementById("kgs");
    let kgs = valueKgs.value;

    let calories = (parseFloat(met) * 3.5 * parseFloat(kgs)) / 200;

    output("MET " + met + ", weight " + kgs + " - burns " + calories.toFixed(2) + 
    " calories per minute");
}

//this function takes the provided message and prints it to the console on the page
function output(message)
{
    let console = document.getElementById("console");
    console.innerHTML = message + "\n" + console.innerHTML;
}

