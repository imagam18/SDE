const cars = ["BMW", "Volvo", "Saab", "Ford"];
cars[0] = "Opel";
cars.push("Audi");

console.log(cars);


// Maths

let text = "12345";
let min = Math.min(...text);
let max = Math.max(...text);

console.log("Minimum value is: " + min);
console.log("Maximum value is: " + max);    

checkAge = () => {
    let age = document.getElementById("age").value;
    if (age < 18) {
        document.getElementById("ageResult").innerHTML = "You are not old enough to vote.";
    }   
    else {
        document.getElementById("ageResult").innerHTML = "You are old enough to vote.";
    }
};



let age = 16;
let access = age >= 18 ? "Granted" : "Denied";

console.log(access); // Output: "Denied"
