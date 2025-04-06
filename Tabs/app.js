// Selecting 3 things
// target about ,All my buttons have the same class And all my Articles have the same class
const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");

// event listener
// btns.forEach((btn) => {
//     btn.addEventListener("click", (e) => {
//         const id = e.currentTarget.getAttribute("data-id");
//         if (id) {
//             btns.forEach((btn) => {
//                 btn.classList.remove("active");
//             })
//             e.currentTarget.classList.add("active");
//         }
//         articles.forEach((articale) => {
//             if (articale.id === id) {
//                 articale.classList.add("active");
//             } else {
//                 articale.classList.remove("active");
//             }
//         })

//     })
// })

// other way by use  event.Target
about.addEventListener("click", (event) => {
    const id = event.target.getAttribute("data-id");
    if (id) {
        btns.forEach((btn) => {
            btn.classList.remove("active");
        })
        event.target.classList.add("active");
    }
    articles.forEach((articale) => {
        if (articale.id === id) {
            articale.classList.add("active");
        } else {
            articale.classList.remove("active");
        }
    })
})










// fetch users from github API
// async function fetchUsers() {

//     const api = await fetch("https://api.github.com/users");
//     const response = await api.json();
//     const user = response.map((person) => {
//         return person.avatar_url;
//     })
//     console.log(user);
// }
// fetchUsers();
