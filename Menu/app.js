// menu have bunch of object each object its  representing a menu item 
//- each object have id, title, category, price, img and desc
//- id for  reall load responses
//- category for filtering the menu items
// usually u get this data from api
// but here we are hardcoding it
// its crucial to understand basics  how to display data on the screen
const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "Stack dinner",
    category: "dinner",
    price: 16.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },


];
// #  start with selecting section-center, why ?? because rember that dom content loaded   
// when events we used  in previous projects
//  we have window have eventlistener  so listen for the event DOM content loaded so when my page is loaded then i hade a callback function

// So when my page is loaded I will access my menu my array and dinamically publish this items on the screen
// the parent element is section-center
const SectionCenter = document.querySelector(".section-center");

// this will select all the filter buttons return a node list of all the filter buttons
// target the button container
const btnContainer = document.querySelector(".btn-container");


// # now if we need to add more items to menu array will display with category all but will not display with the other categories that is not the best setup  represent u act with api ?? when start change data we need to  insure that  data is dinamic so should be fixed that 
// should be fixed  when we add new items to the menu array should be in category all and should be in the other categories with specific category buttons
// will  do this by  Js 

// crucial step   ::
// 1.get the unique categories  -Harde One
// 2.iterate over categories and create a button for each category
// 3.make sure select  the buttons when the are available




// # load items on the screen
// when page is loaded i will do somthings
// I will itrate over the menu array and push each item to the screen 
window.addEventListener("DOMContentLoaded", () => {
  displayMenuItems(menu);
  displayMenuBtns();

})






// now  Refactoring the code to make it more readable easer to maintain and easier to debug like when filter the menu items
function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map((item) => {
    // return item  // this is the item object 

    // insted of returning the item harde coded i will return  dynamic html
    // the next step is to do this in the same line in one single ? Why  because i want to use display them 
    // in SectionCenter
    return `
         <!-- single item -->
        <articale class="menu-item" >
          <img src=${item.img} class="photo" alt=${item.title} />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">${item.price}</h4>
            </header>
            <p class="item-text">
            ${item.desc}
            </p>
          </div>
        </articale>
        <!-- end of single item -->`;
    // that will return an array of strings
    // the map method will return an array of strings
    // so i will join this array of strings into a single string
    // so i will use join method to join this array of strings into a single string
    // and i will use this string to display the menu items on the screen

  });
  //  here can do Re-assignment to displayMenu its let variable
  displayMenu = displayMenu.join(""); // this will join the array of strings into a single string
  // join(""); why use "" because i don't want to add any separator between the strings and to join them together
  SectionCenter.innerHTML = displayMenu; // this will display the menu items on the screen
  console.log(displayMenu);
}

function displayMenuBtns() {
  // IN this case i will display all categories with duplicates but i don't want to display duplicates so will use reduce method
  // let categories = menu.map((item) => {
  //   return item.category;
  // })
  // console.log(categories);
  //  # here i will use reduce method to get the unique categories without duplicates
  let categories = menu.reduce((accumulator, item) => {
    if (!accumulator.includes(item.category)) {
      accumulator.push(item.category);
    }
    return accumulator;
  }, ["all"])
  //  why difult ["all"] ?? because its add ,modify => manually to the array other categories will be added automatically
  // console.log(categories);

  // # now i will iterate over the categories array and create a button for each category
  const categoryBtns = categories.map((categorie) => {
    return `<button class="filter-btn" type="button" data-id=${categorie}>
    ${categorie}
    </button>`;
  }).join("");

  btnContainer.innerHTML = categoryBtns;
  //After i click the button theirs nothing happen because we added this btns dynamically not like the other buttons in html
  // js when page loaded i will git all the buttons and add event listener to each button but in this case "dynamically" js will not be able to find the buttons because they are not in the html yet so will return "undefined" =>not the best called we can say that return  empty  NodeList

  // ! how to fix this issue ???
  // we want to select  this buttons once they be added to the dom then we  can target them and select them and add event listener to each button 
  //-> As u see now we added the buttons dynamically and iterate over the buttons and add event listener to each button after we added the buttons to the dom not before
  const filterBtn = btnContainer.querySelectorAll(".filter-btn");

  // btnContainer.querySelectorAll(".filter-btn"); this will return a node list of all the buttons in the btnContainer

  // # btns filtering :: 
  // dataset ::=> in html we have data-attribute so when we use dataset in js we can access this data-attribute u can named it whatever u want
  // so when we use data-attribute in html we can access this data-attribute in js using dataset 
  // dataset => property in js that will return the value of the data-attribute in the html 
  // event.currentTarget => this will return the element that triggered the event
  filterBtn.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      // console.log(event.currentTarget.dataset.id);
      const category = event.currentTarget.dataset.id;
      //  now i will filter the menu items depending what is the value for my category
      const menuCategory = menu.filter((item) => {
        return item.category === category;
      })
      // now i will display the menu items on the screen
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    })
  })

}

