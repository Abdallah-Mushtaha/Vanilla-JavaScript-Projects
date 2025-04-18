// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const submitbtn = document.querySelector('.submit-btn');
const grocerylist = document.querySelector('.grocery-list');
const clearbtn = document.querySelector('.clear-btn');
const container = document.querySelector('.grocery-container');

// edit option
let editElement;//to edit the element
let editFlag = false;// to check if we are editing
let editID = '';// to store the id of the element we are editing

// ****** EVENT LISTENERS **********
form.addEventListener('submit', addItem);// submit form
clearbtn.addEventListener("click", clearItems);// clear items



// ****** FUNCTIONS **********
// clearItems :: 
/* 
   The sinario is when the user click on the clear button and the list is not empty so we need to remove all the items from the list and also we need to remove the container class from the container and also we need to display an alert message
 
   Actily we add The item to the list dinaicly with class grocery-item so we need to get the  items with the class grocery-item and then we need to loop through the items and remove them one by one
  and also we need to remove from the local storage

   Why we need SetBackToDefault function because when we clear the list maybe the user in Editing mode so we need to set the input value to empty and also we need to set the editFlag to false and also we need to set the editID to empty string
*/
function clearItems() {
    const items = document.querySelectorAll('.grocery-item');
    if (items.length > 0) {
        items.forEach((item) => {
            grocerylist.removeChild(item);
        })
    }
    container.classList.remove('show-container');
    DisplayAlert('empty list', 'danger')
    setBackToDefault();
    // localStorge.removeItem('grocery-list');


}
//  ***** ADD ITEM **********
function addItem(event) {
    event.preventDefault();// prevent default behavior of the form
    const value = grocery.value;// get the value of the input
    // befor add item to the list I want to add some unique id to the item not a series approach but a random approach to make the id unique u will dont do that in the series project 
    // This case just to make unique id  and i dont want to use the External library for this
    const id = new Date().getTime().toString();
    // now thiers 3 cases to submit the form if the user add-value will be added to the list if the user Eidit so the editingFlag will be true IF the  user has not added any caind of the value.
    // if (value){
    //     console.log('is not empty');
    //     console.log('yes');
    // }
    if (value && !editFlag) {
        // console.log('add item to the list');
        // create the list item
        const element = document.createElement('article');
        // add class
        element.classList.add('grocery-item');
        // add id  "Adding data-id to the element to make it unique automatically" 
        const attr = document.createAttribute('data-id');// create the attribute data-set 
        // set the value of the attribute
        attr.value = id;
        element.setAttributeNode(attr);// set the id to the element
        // add the inner html
        // I will use the template string to add the html to the element
        element.innerHTML = `   
            <p class="title">${value}</p>
            <div class="btn-container">
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>
            
        `;
        /*
         We need to acese the edit and delete buttons so we need to use the querySelector to get the edit and delete buttons  we need to add the event listener to the buttons
         and also we need to add the event listener to the grocery list so we can access the buttons
         but why we need now not befor in the first time loading the page ?? 
            Because ::
             - we add the item list dynamically so we dont have access to the buttons
               theirs not in the HTML yet when app js loaded
        */
        const deletBtn = element.querySelector('.delete-btn');
        const editBtn = element.querySelector('.edit-btn');
        deletBtn.addEventListener('click', deleteItem);
        editBtn.addEventListener('click', editItem);


        // append child to the list
        grocerylist.appendChild(element);

        // display alert
        DisplayAlert('item added to the list', 'success');
        // show container
        container.classList.add("show-container");

        // add to local storage
        addToLocalStorage(id, value);

        // set Back to default
        setBackToDefault();



    }
    else if (value && editFlag) {
        console.log('edit item');


    }
    else {
        //  console.log("empty value");
        DisplayAlert('please enter value', 'danger');

    }


}
//***** Display Alert  ******** */
// I will do the alert multiple when remove or edit  or clear the list so I will build a function for that
// action that mean what the alert will do dangrous or success
// why do this functinality because i will use this function in multiple places insted of repeating the code
function DisplayAlert(text, action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);
    // remove alert after 1 sec

    setTimeout(() => {
        alert.textContent = '';
        alert.classList.remove(`alert-${action}`);
    }, 1000);
}
// ***** SET BACK TO DEFAULT **********
// Why need this function because when we add the item to the list we need to set the input value to empty and also we need to set the editFlag to false and also we need to set the editID to empty string 
//"Reset the form to default state"
function setBackToDefault() {
    grocery.value = "";
    editFlag = false;
    editID = "";
    submitbtn.textContent = "submit";
}
// ***** DELETE ITEM **********
function deleteItem(event) {
    // console.log('delete item');
    /*
    now when i click on delete Item I want to get the granparent element of the button that i clicked on and then i want to remove it from the list need to get the  grocery-item  once I click I will remove the item from the grocery list
    */
    const element = event.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;
    console.log(id);
    grocerylist.removeChild(element);
    // if the list is empty remove the container class 
    if (grocerylist.children.length === 0) {
        // container.classList.add("grocery-container");
        container.classList.remove("show-container");
    }
    DisplayAlert('item removed', 'danger');
    setBackToDefault();
    // remove from local storage
    // removeFromLocalStorage(id);

}
// ***** EDIT ITEM **********
function editItem(event) {
    // now we do the reverse here the value of the input will be the value of the item that we are editing so we need to get the value of the item that we are editing and set it to the input value
    const element = event.currentTarget.parentElement.parentElement;
    //set edit item 
    // here i get the button parent element thene get the  previous element sibling that is the p tag that contain the value of the item
    editElement = event.currentTarget.parentElement.previousElementSibling;
    // set form value  
    grocery.value = editElement.innerHTML;
    // set flag to true that we are editing now
    editFlag = true;
    // set id to the edit id to get the id of the item that we are editing
    editID = element.dataset.id;
    //  change the submit button to edit
    submitbtn.textContent = "edit";
}


// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value) {
    console.log("add to local storage");
}

function removeFromLocalStorage(id) {
    /*
    How we get this id  ,now when add item will add data-id to the element so when we click on the delete button we will get the id by dataset from the element and then we will remove it from the local storage
    */


}

// ****** SETUP ITEMS **********
