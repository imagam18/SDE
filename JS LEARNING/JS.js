let obj ={
    name:"Agam",
    age:26,
    emaol:"agamsaxena80@gmail.com"
}
 for ( let key in obj){
    console.log(key,obj[key])
 }
 arr = Object.keys(obj)
 console.log(arr)
 arr = Object.entries(obj)
 console.log(arr)


 let obj2 = {...obj}
 console.log(obj2)