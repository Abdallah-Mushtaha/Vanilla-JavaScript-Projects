// inital values
let count = 0;

// we will select all the buttons document.querySelectorAll then will use for loop to check which button is clicked if decrement will decrement the count or increment will increment the count or reset will reset the count

const values = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');
// if we check what btns is it will return ?? a  funy node list of all the buttons in the document
// console.log(btns);
// node list  its a  Trick of the DOM  u can use Array features on it ,its not an array but it works like an array
// so node list is a collection of all the btn in the document we can use Array features on it like forEach

btns.forEach((item) => {
    // console.log(item);   will return the item in the array  item is the current element in the array
    //  on click of the button will run the function
    item.addEventListener('click', (e) => {
        //  To know which button is clicked using the event object => event.currentTarget
        // To know all Classes this element has => event.currentTarget.classList
        // console.log(e.currentTarget.classList);
        //e.currentTarget.classList => and will return DomTokenList of all the classes that this element has
        //so here when we click on the button  I will save in my variable which are classes that this element has
        // const style = e.currentTarget.classList;
        // if (style.contains) => that means that if the button has the class of increment or decrement or reset  
        const style = e.currentTarget.classList;
        if (style.contains('decrement')) {
            count--;

        } else if (style.contains("increment")) {
            count++;

        } else {
            count = 0;
        }
        values.textContent = count; // To show the count in the span
        if (count < 0) {
            values.style.color = "#eb5454";
        } else if (count > 0) {
            values.style.color = 'green';
        } else {
            values.style.color = 'black';
        }
    });

})