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
// //     }
// // console.log(i)

// // }

// // let j = 1;

// // while(j<11){
// //     console.log(j)
// //     j++;
// // }

// i = 1;
// // do{
// //     console.log(i);
// //     i ++;

// // }
// // while(i < 5)

// for(let i = 10; i>0;i--){
//     if( i %2!=0 ){console.log(i)}
// } 
// let num = 5
// for(let i = 1; i<=10; i++)
//         {console.log(`${5} X ${i} = ${5 * i}`)}

// // let vbal =Number(prompt("Give me a number:"))

// // console.log(vbal)




// let fnc = function(){
//     console.log("hehehhehehheheh")
// }
// fnc();
 

// //fat arrow function


// let fcn = ()=>{
//     console.log("why it is there")
// }

// fcn();

// let dance = (V1) => {
//     console.log(`${V1} is dancing`);
// }

// dance("Agam");

// // v1 =Number(prompt("Enter 1st Number:"))
// // v2 =Number(prompt("Enter 2nd Number:"))

// // let add = (v1,v2)=>{
// //     let sum = v1 +v2;
// //     console.log(`Your Sum ${sum}`)
// // }

// // add(v1,v2);


// let abcd = (...val) => {
//     console.log(val)
// }
// abcd(1,2,3,4,5,6,7,8,9);



// function class1(val){

//     console.log("Im class1")
//     val();
// }
// class1(function(){
//     console.log("Agam Saxena")
// })

// function abcd(){
    
// }




function B1(){
    console.log("Agam bahdur")
    return function(){
        console.log("Agam saxena")

    }
}

B1()()



function c1(val){
    console.log("im first");
    val();
}
c1(function(){
    console.log("Im second")
})

let f = 20

function abab(){
    console.log("Im not new")
}

function hue(){
    f++;;
    console.log(f);
}


abab()
hue();




function dam(){
    let Name = "Sona"
    return function(){
        console.log(Name)
    }
}
dam()()


function bmi(weight,height){
    return weight/(height*height)
}

console.log(Math.round(bmi(70,1.7)))
console.log(bmi(50,1.3).toFixed(2))



function disCounCal(discount){
        return function(price){
            return price -price *(discount)/100;
        }

}

disOunter=disCounCal(10)
console.log("Your lft money aftr discunt:")
console.log(disOunter(500).toFixed(2))