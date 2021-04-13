// ========== EXERCISE 1: YOUR FAVORITE COLORS ============ //

// 1. Create an array called colors where the value is a list of your favorite colors.

let colors = ["white", "black", "gold", "red"];

// 2. Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… 


for (i=0; i < colors.length; i++) {
    console.log(`My #${i+1} choice is ${colors[i]}`)
}

// 3. Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.

let sufix = ["1st", "2nd", "3rd", "4th"];

for (i=0; i < colors.length; i++) {
    console.log(`My ${sufix[i]} choice is ${colors[i]}`)
}



// ========== EXERCISE 2: LIST OF PEOPLE ============ //

let people = ["Greg", "Mary", "Devon", "James"]

// 1. Write code to remove “Greg” from the people array.
people.shift()
console.log(people);

// Write code to replace “James” to “Jason”.
people.indexOf("James");
people.splice(2, 1, "Jason");
console.log(people)

// Write code to add your name to the end of the people array.
people.push("Daniel")
console.log(people);

// Using a loop, iterate through the people array and console.log each person.
for (i in people) {
    console.log(people[i]);
}
// Using a loop, iterate through the people array and after you console.log “Jason” exit the loop.
let indexJason = people.indexOf("Jason");
for (i in people) {
    if (i == indexJason) {
        console.log(people[i])
        break;
    }
    else {
        console.log(people[i]);
    }
}

// Write code to make a copy of the people array using slice. The copy should NOT include “Mary” or your name.
let indexMary = people.indexOf("Mary")
let newArr = people.splice(indexMary, 1);

let indexDaniel = people.indexOf("Daniel")
newArr = people.splice(indexDaniel, 1)

console.log(people);

// Write code that console.logs Mary’s index. take a look at indexOf on google.
indexMary = people.indexOf("Mary")
console.log(indexMary)

// Write code that gives the indexOf “Foo” (this should return -1). Why does it return -1
let indexFoo = people.indexOf("Foo");
console.log(indexFoo)

// Create a variable called last which value is the last element of the array.
let last = people[people.length-1];
console.log(last)



// ========== EXERCISE 3: REPEAT THE QUESTION ============ //

// 1. Promt the user for a number, while the number is smaller than 10 continue asking the user for a new number.

let askNum = prompt("Please type in a number");

console.log(askNum);

while (askNum < "10") {

    askNum = parseInt(prompt("Please type in another number"), 10);
    console.log(askNum);
    
}



// ========== EXERCISE 4: ATTENDANCE ============ //

let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
}

let student = prompt("Please type in your name");

if (student in guestList) {
    console.log(`Hi! I'm ${student}, and I'm from ${guestList[student]}.`)
}


// ========== EXERCISE 5: FAMILY ============ //

const family = {
    alberto: "dad",
    cristina: "mom",
    david: "brother",
    deborah: "sister"
}

for (key in family) {
    console.log(key)
}
for (key in family) {
    console.log(family[key])
}


// ========== EXERCISE 6 ============ //

let details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
}

console.log(`My ${details["my"]} is ${details["is"]} the ${details["the"]}`)



// ========== EXERCISE 7: SECRET GROUP ============ //

let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"]

let society = []

for (i in names) {
    names[i].split("");
    society.push(names[i][0])
}

console.log(society.join(""));
