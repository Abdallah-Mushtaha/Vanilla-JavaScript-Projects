//  ! Repeating the JS-code for best practice

// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.

// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.

// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();
// ********** close links ************
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");
// toggle button on click shows the links
// navToggle.addEventListener("click", (event) => {
//     linksContainer.classList.toggle("show-links");
// })
// More dinamic way
navToggle.addEventListener("click", () => {
    const linksHeight = links.getBoundingClientRect().height;
    const contenerHeight = linksContainer.getBoundingClientRect().height;
    if (contenerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`;
    } else {
        linksContainer.style.height = 0;
    }

})
// ********** fixed navbar ************
//  whene Scroll IF scrollY > navbarHeight then add fixed class to navbar
//  else remove fixed class from navbar 
// then show back to top button in certain position  or hide it

const navbar = document.getElementById("nav");
const toplink = document.querySelector(".top-link");

// scroll event is fired when the user scrolls the page.
window.addEventListener("scroll", () => {
    // console.log(window.pageYOffset);// number of pixels the document has been scrolled vertically from the top of the page.

    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
        navbar.classList.add("fixed-nav")
    } else {
        navbar.classList.remove("fixed-nav");
    }

    if (scrollHeight > 500) {
        toplink.classList.add("show-link")
    } else {
        toplink.classList.remove("show-link")
    }

})




// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        // we need to Reach to the link attribute href by using event.currentTarget.getAttribute("href")
        // console.log(event.currentTarget.getAttribute("href"));
        // slice(1) to skip the '#' from the href strat from  index 1
        const id = event.currentTarget.getAttribute("href").slice(1);
        // How to get to position of this element ?
        //  by offsetTop property of the element
        const element = document.getElementById(id);
        // console.log(element.offsetTop);// get the value of top position of  element this position change dinamically its not static

        // calculate the heights of each section
        // Now how scoll to specific spot ?? 

        //   by Get the height of the navbar
        //   Get the distance from the top of the page to the target element by using offsetTop
        //   Subtract the navbar height to adjust the scroll position
        //   check if the navbar is fixed or not to adjust the scroll position
        //   Smoothly scroll to the calculated position
        //   using scrollTo() method to scroll to the specific spot

        const navHeight = navbar.getBoundingClientRect().height;
        //It is the height of the navbar, which you want to calculate so that it does not interfere with the element you are going to while scrolling.
        const containerHeight = linksContainer.getBoundingClientRect().height;

        const fixedNav = navbar.classList.contains("fixed-nav")

        // Gets the distance between the element (to which you are dragging) and the top of the page. That is, the distance from the top of the page to the element.

        // The goal here is to subtract the navbar height from the original distance (offsetTop) so that the element is not covered by the navbar if it is fixed.
        let position = element.offsetTop - navHeight;



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
        linksContainer.style.height = "0px";



    })
})



