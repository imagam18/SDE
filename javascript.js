let a = 10;
let b = a;

a = a +2

console.log(a)
console.log(b)

// [] {} ()

let c = [1,2,3];
let d = c;

d.pop()

// console.log(c);
// console.log(d);


let userName= "Agam"
console.log(userName)


let obj = {
    uid : 1,
    name : "harsh",
    age :12,
    gmail:"test@test.com"
};

let u1 = Symbol("uid")
obj[u1] = "001"

let u = 10;
let v = 20;

if (u > 5 && v < 25){
    console.log("A");
}
else{
    console.log("B");
}

let temp = 35

if(!(temp < 30)){
    console.log("Hot")
}
else{
    console.log("Pleasent")
}

let score = 80

let grade = score>=90? "A":score>=75?"B":score>=60?"C":"Fail";

console.log(grade);

let likes = 100;

function likePost(){
    return ++likes
}
console.log(likePost());
console.log(likes)

function getVal(val){
    if (val<100) return 'A';
    else if (val<75) return "B";
    else if (val<50) return "C";
    else return "D";
}

console.log(getVal(50))



// for(let i = 1 ;i< 101;i++)
// {
//     if(i==25){
//         continue
//     }
// console.log(i)

// }

// let j = 1;

// while(j<11){
//     console.log(j)
//     j++;
// }

i = 1;
// do{
//     console.log(i);
//     i ++;

// }
// while(i < 5)

for(let i = 10; i>0;i--){
    if( i %2!=0 ){console.log(i)}
} 
let num = 5
for(let i = 1; i<=10; i++)
        {console.log(`${5} X ${i} = ${5 * i}`)}

// let vbal = prompt("Give me a number:")

// console.log(vbal)



function dance (){
    console.log("Agam Saxena");
}

dance();