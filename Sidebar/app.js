//  now by clicking on the sidebar-toggle we can open and close the sidebar by add or remove the class show-sidebar to the sidebar element

const ToggleBtn = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');

/*
Notes::

Now we have functionality to open and close the sidebar by clicking on the sidebar-toggle button
and close the sidebar by clicking on the close button

Agin the main things  to setup CSS where u hide the sidebar by default and show it when we toggle the class that has the value transform: translate(0);

*/

ToggleBtn.addEventListener('click', () => {
    // if (sidebar.classList.contains('show-sidebar')) {
    //     sidebar.classList.remove('show-sidebar');
    // } else {
    //     sidebar.classList.add("show-sidebar");
    // } 
    // Instead of writing the code in 4 lines we can write it in 1 line => toggle('show-sidebar') Method
    sidebar.classList.toggle('show-sidebar');
})

closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('show-sidebar')
})
