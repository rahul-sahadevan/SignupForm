

const profile = document.querySelector(".profile");
const name = localStorage.getItem("name");
const email = localStorage.getItem("email");
const password = localStorage.getItem("password");
const token = localStorage.getItem("token");

// redirecting the page to signup page if the token is empty
if(token === ""){
    window.location.href = "index.html?";
    localStorage.clear();
    alert("Empty Token!")
}
// else card profile card is build
else{

    profile.innerHTML = `
        <h4>Profile</h4>
        <img src="assets/Vector.png" alt="head">
        <img src="assets/Vector (1).png" alt="body">
        <p>Full Name : ${name}</p>
        <p>Email : ${email}</p>
        <p>Token : ${token}</p>
        <p>Password : ${password}</p>
        <button class="logout">LOGOUT</button>
    `
    const logout = document.querySelector(".logout");
    
    logout.addEventListener("click",()=>{
        localStorage.clear();
        window.location.href = "index.html?";
    })
}
