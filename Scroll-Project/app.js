// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
// First start setting the date dinamically by js  insted of updating my project manually
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();


// ********** close links ************
// its will be difrent  becuase we need  calulate the height of the navbar dinamically
// thier is 3 things to target the toggle button,the links-container and the links

const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

/*
 navToggle.addEventListener("click", () => {
     linksContainer.classList.toggle("show-links");});

 # lits see the dom side !!

 - This functinality Right and still working
    whit static hieght "200px" this hieght hard coded,but what happens when we add
    more links or remove some links ,
    what happens?

- the links will be hidden so i missing this links
     but functionality is still working ,IF thier remove and still have 3 likes will have space after the links not the best senario

- How can we make it dinamically ?
    we need to calculate the hieght of the links dinamically when we have dinamic data

- To git the hieght of links we need to use ::
    getBoundingClientRect() method return object of the size of an element and its position relative to the viewport.
    so u can git the hieght of the links by using this method
 */
navToggle.addEventListener("click", () => {
    //console.log(linksContainer.getBoundingClientRect());//return object of the size of an element and its position relative to the viewport.
    const containerHeight = linksContainer.getBoundingClientRect().height;//The defult value is 0, so we need to get the height of the links
    const linksHeight = links.getBoundingClientRect().height;// Its change dinamically when we have alote of dinamic data
    // console.log(containerHeight, linksHeight);

    //- what happens here ??
    //  chceck the linksContainer Height IF 0 then set the linksContainer Height to linksHeight
    //  else set the linksContainer Height to 0

    //# when resize the window  to laptop we got problem :: that hight more huge than the hieght of the links  because in JS the style.
    // height its inline style stronger than the External style,
    //  to solve this issuse well do in css hieght :auto !important; .

    if (containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`;
    } else {
        linksContainer.style.height = 0;
    }
});

// ********** fixed navbar ************
/*
# once I scroll pass the hight of the navbar
then I want to add fixed class to navbar so that the navbar will be fixed at the top of the page when we scroll down

# The same thing back to top button its will show up once we scroll pass certain point but will hide when moveUp the certain point

- The way to do it is ::
    scroll event is fired when the user scrolls the page.

- property pageYOffset is a read - only window property that   
    returns the number of pixels the document has been scrolled vertically

- IF pageYOffset > navbarHeight then add fixed class to navbar
    else remove fixed class from navbar
    
- by default toplink is hidden so we need to add show-link 
    class to toplink when we scroll pass the certain point 
    else remove show-link class from toplink

- when I Reach to  the certain point the toplink will show 
         

*/


const navbar = document.getElementById("nav");
const toplink = document.querySelector(".top-link")// back to top button
window.addEventListener("scroll", () => {
    // console.log(window.pageYOffset);
    // As we learn get the navbar hieght by using getBoundingClientRect() method
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
        navbar.classList.add("fixed-nav");
    } else {
        navbar.classList.remove("fixed-nav");
    }

    if (scrollHeight > 500) {
        toplink.classList.add("show-link");
    } else {
        toplink.classList.remove("show-link");

    }
})


// ********** smooth scroll ************
/*
What This code doing ??
Every time you click on a link in the navbar, it prevents the default behavior (which is to go directly), and starts calculating the location of the item you want to go to, taking into account the height of the navbar, whether it is fixed or not, and whether the menu is open on the mobile or not, in order to direct you to the right place without the item being hidden behind the navbar.
*/

//  That the defult behavior of the scroll its scrolling Smoothly 
//   scroll-behavior: smooth; in css
//  but the problem is will forge th our section the top of each section
// To solve this problem we need to use smoothScroll() method

// select links
// Remember that the each link has a href attribute and class scroll-link
// so first get all the links and target each link when we click
// event.currentTarget.getAttribute("href") what this method returns ?? its give me the actual attribute value in this case => href -> The value that the link points to

//- slice is a method that extract a section of a string without modifying original string
//- slice(1) to skip the '#' from the href strat from  index 1

const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();// to prevent the default behavior of the link


        //  navigate to specific spot 
        const id = event.currentTarget.getAttribute("href").slice(1);
        // console.log(id);// see the target of the link :: # home
        const element = document.getElementById(id);// get the element that we want to scroll to 

        // How we will  get to position of this element ?
        //  by offsetTop property of the element 
        //  the offsetTop property returns the top position of the element, in pixels



        // calculate the heights of each section
        /*
          whats happening here ?? 
          First we need to get the hieght of the navbar and linksContainer
          then get the class fixed-nav from navbar if its true 
          then we need to subtract the height of the navbar from the top position of the element
        */
        const navHeight = navbar.getBoundingClientRect().height;//looking for the navbar hieght the same things for container

        const containerHeight = linksContainer.getBoundingClientRect().height;//looking for the linksContainer hieght 
        const fixedNav = navbar.classList.contains("fixed-nav");


        // need more attention here  !! 

        let position = element.offsetTop - navHeight;// give me the value of top position of  element this position change dinamically its not static 
        console.log(position);

        //  element.offsetTop - navHeight why ??

        //  but we want to scroll to the top of the element, not the top of the document, so we need to subtract the height of the navbar from the top position of the element.

        // IF Navbar  in  static  its not fixed
        if (!fixedNav) {
            // we will scroll the pased from base Navebar
            position = position - navHeight;
        }
        //  I have already open my links and  the nave biger than 82  set my position to the top of the container
        if (navHeight > 82) {
            // we calculating the hight for the container
            position = position + containerHeight;

        }


        // To scroll to the position of the element
        window.scrollTo({
            // taket object take the coordinates of the element
            left: 0,
            top: position, // scroll to the position of the element from The top of the document
            behavior: "smooth"

        })
        // close the links  after clicked any link  in small screen 
        linksContainer.style.height = 0;

        // fixed smooth scroll


    })
})



