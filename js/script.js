
let button = document.querySelector(".button-auth");

let modalWindow = document.querySelector(".modal-auth");
button.addEventListener("click", () => { modalWindow.style.display = "block" })
const closeAuthButton = document.querySelector(".close-auth");
closeAuthButton.addEventListener("click", closeAuth);
const logInForm = document.querySelector("#logInForm");
const logIn = document.querySelector("#login");
const passWord = document.querySelector("#password");
function closeAuth() { modalWindow.style.display = "none"; }
const buttonOut = document.querySelector(".button-out");
const userName = document.querySelector(".user-name")

logInForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const userLogin = logIn.value;
    const userPassword = passWord.value;
    if (userLogin == "") {
        alert("ВВЕДИТЕ ЛОГИН");
        return;
    }
    if (userLogin == "Admin" && userPassword == 1234) {
        closeAuth();
        buttonOut.classList.remove("none");
        button.classList.add("none");
        userName.textContent = userLogin; 
        logIn.value = "";
        passWord.value = "";
    }
 });
