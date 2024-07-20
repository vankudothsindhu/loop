// program that checks if a number is positive, negative, or zero using if-else statements
let number = 4; 

if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}


let month = 5; 

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("july");
        break;
    default:
        console.log("Invalid day number");
        break;
}

//program using ternary operator
let age = 30; 

let result = (age >= 18) ? "Adult" : "Minor";
console.log(result);

// program that prints the numbers from 1 to 10 using a for loop

for (let i = 1; i <= 8; i++) {
    console.log(i);
}

// program that prints the numbers from 10 to 1 in reverse orderusing a for loop

for (let j = 8; j >= 1; j--) {
    console.log(j);
}


