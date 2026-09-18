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