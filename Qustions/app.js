// Suppose we have  local data 
let Question = [
  {
    askQuestion: "do you accept all major credit cards?",
    answer: ` Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur quisquam harum nam cumque temporibus explicabo dolorum
              saepe odio unde sed`
  },
  {
    askQuestion: "do you accept all major credit cards?",
    answer: ` Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur quisquam harum nam cumque temporibus explicabo dolorum
              saepe odio unde sed`
  },
  {
    askQuestion: "Ask me somthing to answer it now ??",
    answer: ` Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur quisquam harum nam cumque temporibus explicabo dolorum
              saepe odio unde sed`
  }
]
// get The section that we will put all the questions in the html
const Section_questions = document.querySelector('.section-center');

// now i want to loop over the questions array and add them to the html
Section_questions.innerHTML = Question.map((item) => {
  // console.log(item);

  return `<article class="question">
          <!-- question title -->
          <div class="question-title">
            <p class="question-Que">${item.askQuestion}</p>
            <button class="question-btn">
              <span class="plus-icon">
                <i class="far fa-plus-square"></i>
              </span>
              <span class="minus-icon">
                <i class="far fa-minus-square"></i>
              </span>
            </button>
          </div>
          <!-- question text -->
          <div class="question-text">
            <p class="question-content">${item.answer}</p>
          </div>
        </article>`
}).join("");
//.join("") will convert the array to a string without commas


// Tow possible ways to select an element
//  1.using selectors inside the element =>when we want to access the specific element 
//  2.traversing the dom => when we want to access the parent node of the element 


// # using selectors inside the element
// if we want to access the element Directly

// now i have acolliction of all the question in articles
const questions = document.querySelectorAll('.question');
questions.forEach((question) => {
  // console.log(quwestion);
  // now i want to access the button inside the question so will note use document =>> would not select all the buttons in the document Just the buttons inside the  question
  const btn = question.querySelector('.question-btn');
  // console.log(btn);
  btn.addEventListener('click', (event) => {
    //  IF we need to close the questions that I didn't click on "Remove the show-text class" for the other questions that I didn't click on when I have a multiple questions
    questions.forEach((Question_item) => {
      if (Question_item !== question) {
        Question_item.classList.remove("show-text");
      }
    })
    question.classList.toggle("show-text");
  })
})


//  # traversing the domm :: parentElement

// const btns = document.querySelectorAll('.question-btn');
/*
whats happening here ??

btns is a node list of all the buttons in the document
so we can use forEach method on it
to access each parent node of the  button

now we want traverse the dom witch  fancy way to moving up and down the dom tree
so what we can do ??
we have  buttons in the document when we click on the button we want to check  how is the parent of the button
and added the class show-text to the parent of the button
but if its actually show-text we want to remove it

console.log(event.currentTarget.parentElement);
that will return the parent node of the button "title" of the question

but I need to access the parent node of the parent node of the button
so will repeat the same process again

console.log(event.currentTarget.parentElement.parentElement);
now I have access to the parent node of the parent node of the button "Questions"

will check if the parent node of the parent node of the button has the class of show-text
if it has the class of show-text we want to remove it
if not we want to add the class of show-text


*/

// btns.forEach((btn) => {
//     btn.addEventListener('click', (event) => {
//         const question = event.currentTarget.parentElement.parentElement;
//         question.classList.toggle("show-text");
//     });
// })