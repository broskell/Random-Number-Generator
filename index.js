const min = 1;
const max = 100;

const myButton = document.getElementById("myButton");

myButton.onclick = function() {
    const randomnumber = Math.floor(Math.random() * (max - min)) + min;
    document.getElementById("myh1").textContent = randomnumber;
    myButton.textContent = "Roll Again";
    console.log(randomnumber);
};