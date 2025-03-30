// local reviews data
// here is  array of objects each object its different person different name job img and text
const reviews = [
    {
        id: 1,
        name: 'susan smith',
        job: 'web developer',
        img: 'https://www.course-api.com/images/people/person-1.jpeg',
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: 'anna johnson',
        job: 'web designer',
        img: 'https://www.course-api.com/images/people/person-2.jpeg',
        text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
        id: 3,
        name: 'peter jones',
        job: 'intern',
        img: 'https://www.course-api.com/images/people/person-4.jpeg',
        text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
        id: 4,
        name: 'bill anderson',
        job: 'the boss',
        img: 'https://www.course-api.com/images/people/person-3.jpeg',
        text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
];
// so we will select the elements from the index.html to access them  to change them dinamically
//  and also will target the next and prev buttons and the random button
const img = document.getElementById('person-img');
const auther = document.querySelector('.auther');
const job = document.querySelector('.job');
const info = document.getElementById('info');

// In this case I will note use the querySelectorAll method to select all the buttons will select them one by one
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// At the moment evreything is a hard coded so we need to change it dinamically
// so I wants my document  load I want to access the what ever item from the reviews array what ever number u     have in the currentItem variable, then all the variables I have will be changed dinamically, i Will Replace those values
//  Array its zero based index so we will start from 0 my first item
//# insure that currentItem is less than the length of the reviews array
//  set starting item
let currentItem = 3;

// we can do it by DOMContentLoaded  by window load event listener actually works when the initial HTML document has been completely loaded .
window.addEventListener('DOMContentLoaded', () => {
    // console.log('Are you ready ....');
    //so when the currentItem Changes I will call the showPerson function instead of writing the same code again and again
    showPerson(currentItem);



});
// show person based on item index , Why we need this function ?? because I want to use it when the page loads and when we click on the next prev or random button to change the currentItem so I dont need to write the same code again and again 
// The functionality will not change but we can reuse the function 
function showPerson(person) {
    const item = reviews[person]; // why we need this variable to fast access the reviews array insted of writing reviews[currentItem] again and again and when we want to access to some features from the reviews array like name job img text will write reviews[currentItem].name 
    //so every time I change the currentItem I will get another item from the reviews array
    //all this values will apluod  when the page loads
    img.src = item.img;
    auther.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// show next person
nextBtn.addEventListener('click', () => {
    currentItem++;
    // if the currentItem is greater than the length of the reviews array I will reset the currentItem to 0 to handel the Error undifined index
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem); // when the currentItem changes I will call the showPerson function instead of writing the same code again and again
})
// show prev person the same way
// when the currentItem changes I will call the showPerson function and show the prev person by decrementing the currentItem 
prevBtn.addEventListener('click', () => {
    currentItem--;
    // if the currentItem is less than 0 I will reset the currentItem to the last item in the reviews array
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
})
// show random person the same way
randomBtn.addEventListener('click', () => {
    // will return a random number between 0 and reviews.length to get a random item from the reviews array
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
})