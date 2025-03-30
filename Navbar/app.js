// classList - shows/gets all classes that an element has
// contains - checks classList for specific class ,with in contains we pass the class that we want to check for it
// add - add class
// remove - remove class
// toggle - toggles class => checks if class is there will remove it if not will add it

//  when we click on the button  we will check if the show-toggle is active or not
// if it is active we will remove it and if it is not active we will add it

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener('click', () => {
    // by classList we can access all the classes that this element has
    // console.log(links.classList);
    //console.log(links.classList.contains('show-toggle')); //false => means that this element does not have the class show-toggle
    //console.log(links.classList.contains('links')); //true => means that this element have the class links
    // Now we will check if the class show-toggle is active or not to remove it or add it
    // if (links.classList.contains('show-links')) {
    //     links.classList.remove('show-links');
    // } else {
    //     links.classList.add('show-links');
    // }
    // instead of writing the code in 4 lines we can write it in 1 line => toggle('show-links') Method  
    links.classList.toggle("show-links");
});