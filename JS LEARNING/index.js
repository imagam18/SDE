function sayHello() {
            alert("Hi there!");
        }
function submitForm() {

    const firstName = document.querySelector("#firstName").value;
    const lastName = document.querySelector("#lastName").value;

    console.log(firstName);
    console.log(lastName);

    if (firstName === "" || lastName === "") {
        alert("Please enter your first and last name.");
    } 
    else {
        alert("Form submitted!");
    }
}

document.getElementById("para2").style.color = "blue";

//User response by the javascript code

// Step 1: Find the HTML element in the DOM tree
const myDiv = document.querySelector("#my-clickable-div");

// Step 2: Define what the handler function should do
function myClickFunction() { 
     alert("This is a modern JavaScript message!"); 
}

// Step 3: Tell the browser to listen for the event entirely in JS
myDiv.addEventListener("click", myClickFunction);





// 1. TARGET: Sabse pehle DOM tree se element ko pakdo
const demoBox = document.querySelector("#click-demo");

// 2. LOGIC (Handler): Arrow function banao jo decide karega kya karna hai
const toggleItalics = () => {
    // Check karo ki kya font pehle se italic hai
    if (demoBox.style.fontStyle !== "italic") {
        demoBox.style.fontStyle = "italic";
        demoBox.style.color = "#ef4444"; // Color bhi badal dete hain maza aayega!
    } else {
        demoBox.style.fontStyle = "normal";
        demoBox.style.color = "#1a1a1a"; // Wapas normal color
    }
};

// 3. LISTEN: Browser ko bolo ki click event par nazar rakhe
demoBox.addEventListener("click", toggleItalics);
