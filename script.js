const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const submit = document.getElementById("submit");
const error = document.querySelector(".error");

// Randomly generating 16bytes string
function generateRandomString() {
   
    const byteArray = new Uint8Array(16);
  
  
    crypto.getRandomValues(byteArray);
  
   
    const hexString = Array.from(byteArray)
      .map(byte => byte.toString(16).padStart(2, '0'))
      .join('');
  
    return hexString;
    // return "";
}

// function to check whether input field is empty or not

function isFormValid() {
    return (
        name.value !== "" &&
        email.value !== "" &&
        password.value !== "" &&
        password.value === confirmPassword.value
    );
}

// function to store the values in the localstorage

function signUp(event) {
    if (isFormValid()) {
        event.preventDefault();
        localStorage.setItem("name", name.value);
        localStorage.setItem("email", email.value);
        localStorage.setItem("password", password.value);
        const randomString = generateRandomString();
        localStorage.setItem("token", randomString);
        window.location.href = "index2.html"
    } 
    else {
        error.innerText = "Error: All fields are mandatory!";
    }
}


// Add event listener to the submit button only if the form is valid
if (submit) {
    
    submit.addEventListener("click", signUp);
}
// redirection the page to the profile page if token is not empty
if(localStorage.getItem("token") !== null){
    window.location.href = "index2.html";
    
}

