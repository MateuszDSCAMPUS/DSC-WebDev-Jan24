console.log("Hello World!");
console.log(2+2);

if(2+2 == 4){
     console.log(2+2);
}

let age = 45;
let myName = "Geoffrold";

console.log(myName + " is " + age);

while(age!=100){
     age++;
     console.log(age);

     if(age == 50 || age == 60 || age == 70 || age == 80 || age == 90 || age == 100){
          console.log("Congrats, another decade has passed, you are: " + age + " years old!");
     }
}
let aaa = 0;

var wait = (ms) => {
     const start = Date.now();
     let now = start;
     while (now - start < ms) {
       now = Date.now();
     }
 }

 /*
while(true){
     
     console.log("Crazy? I was crazy once...");
     wait(1000);
     wait = (ms) => {
          const start = Date.now();
          let now = start;
          while (now - start < ms) {
            now = Date.now();
          }
      }
     console.log("They put me in a room…");
     wait(1000);
     wait = (ms) => {
          const start = Date.now();
          let now = start;
          while (now - start < ms) {
            now = Date.now();
          }
      }
     console.log("A rubber room.");
     wait(1000);
     wait = (ms) => {
          const start = Date.now();
          let now = start;
          while (now - start < ms) {
            now = Date.now();
          }
      }
     console.log("A rubber room with rats");
     wait(1000);
     wait = (ms) => {
          const start = Date.now();
          let now = start;
          while (now - start < ms) {
            now = Date.now();
          }
      }
     console.log("They put me in a rubber room with rubber rats.");
     wait(1000);
     wait = (ms) => {
          const start = Date.now();
          let now = start;
          while (now - start < ms) {
            now = Date.now();
          }
      }
     console.log("Rubber rats? I hate rubber rats.");
     wait(1000);
     wait = (ms) => {
          const start = Date.now();
          let now = start;
          while (now - start < ms) {
            now = Date.now();
          }
      }
     console.log("They make me crazy.");
     wait(1000);
}
*/


for(i = 0; i< myName.length; i++){
     console.log("Letter no. " + i + " in your name is: " + myName.charAt(i));
}

let outputH1 = document.querySelector('#output');
outputH1.innerHTML = "What be your name?";
console.log(outputH1);

let inputText = document.querySelector('#nameInput');
let numNums = document.querySelector('#second');

let buttonA = document.querySelector('#btn');
let buttonB = document.querySelector('#addBtn');

let outputText = document.querySelector('#henlo');

//add or subtract
let addOrSubtract = document.querySelector("#addOrSubtract");
let numOut = document.querySelector("#num");
let num = 0;


let totalValue = 0;

let playerName = "Blank";

function createCharacter(){
}

function changeNumber(){
     if(addOrSubtract.checked){
          num += 1;
     }
     else /*if(!addOrSubtract.checked)*/{
          num -= 1;
     }
     numOut.innerHTML = num;
}

//define method/function that runs code
function submitName(){
     playerName = inputText.value.toString();
     console.log("Hello from submit button");
     outputText.innerHTML = "Hello, " + playerName;
}

function addOne(){
     totalValue +=1;

     if(totalValue % 2 == 0){
          
          numNums.innerHTML = "Hello, " + playerName + " " + totalValue;
     }
}

let light = document.querySelector('img');
let isOn = true;

function toggleBulb(){
     /*if(isOn){
          isOn = false;
     }
     else 
     isOn = true;
     */
     isOn = !isOn;

     if(isOn){
          light.src = "Images/BulbOn.jpg";
          console.log("Changed bulb to on " +light.src);
     }

     else {
          light.src = "Images/BulbOff.jpg";
          console.log("Changed bulb to off"+light.sr);
     }
}

let divBox = document.querySelector('#box');

function toggleColor(){
     if(divBox.className == "red"){
          divBox.className = "blue";
     }
     else
          divBox.className = "red";
}

//alternatively can make 2 buttons with individual functions as such
//classLists is also a thing

function makeRed(){
     divBox.classList.remove('blue');
     divBox.classList.add('red');
}

function makeBlue(){
     divBox.classList.remove('red');
     divBox.classList.add('blue');
}