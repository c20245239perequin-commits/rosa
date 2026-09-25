console.log("Hello, world.");
console.log("First JavaScript");

const myName = "Rosa A. Perequin";
const myNumber = 09272607316;
const myAddress = "hda luisa barangay 13";

let age = 20;

console.log("Name: " + myName);
console.log("Age: " + age);
console.log("Number: " + myNumber);
console.log("Address: " + myAddress);

function greet(name) {
    return `Good morning, ${name}`;
}

console.log(greet(`Rene`));

function mdas(num1, num2) {

    let Mul = num1 * num2;
    let Div = num1 / num2;
    let Add = num1 + num2;
    let Sub = num1 - num2;

    return `value (${num1}, ${num2})
     \nMul: ${Mul} \nDiv: ${Div.toFixed(2)} \nAdd: ${Add} \nSub: ${Sub}`;  
}   
console.log(mdas(5, 3));



// querySelector
const heading = document.querySelector("h1");
console.log(heading);
const projectsHeading = document.querySelector("#projects h2");
console.log(projectsHeading);
const contactHeading = document.querySelector("#contact h2");
console.log(contactHeading);
const servicesHeading = document.querySelector("#services h2");
console.log(servicesHeading);

// Text Content
heading.textContent = "My Portfolio";
projectsHeading.textContent = "My Projects";
contactHeading.textContent = "Let's Connect";
servicesHeading.textContent = " Services";

//.style
heading.style.color = "purple";
heading.style.backgroundColor = "yellow";
projectsHeading.style.color = "purple";
contactHeading.style.color = "purple";
servicesHeading.style.color = "purple";

// Event Listener
heading.addEventListener("click", function() {
    heading.style.color = "red";
})

const toggleButton = document.querySelector('#switch');
const body = document.querySelector('body');
let isOff = false;

toggleButton.addEventListener("click", function () {
    isOff = !isOff;

    if (isOff) {
        body.style.backgroundColor = "black";
        body.style.color = "white";
        
    } else {
        body.style.backgroundColor = "white";
        body.style.color = "black";
    }
});