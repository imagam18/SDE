let h1 = document.createElement("h1")
h1.textContent = "Helllo  Ji"
document.body.append(h1)

let lis = document.querySelectorAll('li');
lis.forEach((val)=> console.log(val.textContent))