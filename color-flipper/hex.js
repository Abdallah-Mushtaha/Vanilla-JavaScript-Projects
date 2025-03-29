// - Now lets do the  Hex Colors that will be random as well
// - we will genrate a hex color by using unique Hex  random value
// Some functionalty will be the same  still  have the same btn, the same span  in the HTML Structure
// and generate a random but the different will be how we genrate the hex color
// - in this case we will not use the  fixed value its going to be genrated on the fly
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// - now how we will genrate the hex color
// - as we know the hex color is made up of 6 values can be 0-9 or A-F like::
// #f1f5f8
// we need a loop to genrate the hex color randomly
btn.addEventListener("click", function () {
    // - will add # to the hex color  to make it valid hex color
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        // in this case will add number 0 like 6 times we can add any number but we need to be 6 times randomly 
        // hexColor += hex[0];
        // in this case we need helper function to return a random number each time in the loop
        //   hexColor +=  ?? Why use it += ?? to add the value to the hexColor variable Note Re-Assignment to the same variable
        hexColor += hex[getRandomNumber()];
    }
    color.textContent = hexColor;// - To show the hex color in the span
    document.body.style.backgroundColor = hexColor; // - To show the hex color in the body
});
function getRandomNumber() {
    // will return a random number between 0 and hex.length
    return Math.floor(Math.random() * hex.length);
}