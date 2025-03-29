const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');
btn.addEventListener('click', function () {
    //To Target me body 
    // console.log(document.body);
    //This way we can change the color of the body Manually but we need to change it every time randomly
    // const randomNumber = 2;
    // we need to us helper Random function

    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];// - To show the hex color in the body
    color.textContent = colors[randomNumber];// - To show the hex color in the span


});
// As we know the Math.random() function returns a random number between 0 (inclusive), and 1 (exclusive).
// Math.random() * colors.length => To spasify the random number between 0  to array.length
// To be between 0 and 3 as we have 4 colors In The Array
// console.log(randomNumber);
// in this case will return a random number  like ::
// 3.976378933023345
// 0.23456789   
//2.5885289184651583
// by the way we  need to use the Math.floor() function to round down the random number to the nearest integer
// now as u see the functionality works well

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}

/*
Note ::
As we know the is multiple way to write the color type in the css Like ::
hexadecimal => #000000
rgb   => rgb(0,0,0)
rgba  => rgba(0,0,0,1)
HSL  (hue, saturation, lightness)=> hsl(0,0%,0%)
HSLA ( hue, saturation, lightness, alpha) => hsla(0,0%,0%,1)
HSV  (hue, saturation, value)=> hsv(0,0%,0%)



*/