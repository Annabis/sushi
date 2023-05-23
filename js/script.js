function modalWindowLogin() {
    const button = document.querySelector(".button-auth");
    const closeAuthButton = document.querySelector(".close-auth");
    const logInForm = document.querySelector("#logInForm");
    const logIn = document.querySelector("#login");
    const passWord = document.querySelector("#password");
    const modalWindow = document.querySelector(".modal-auth");
    const buttonOut = document.querySelector(".button-out");
    const userName = document.querySelector(".user-name")
    buttonOut.addEventListener("click", () => { 
        localStorage.removeItem("user")
        window.location.reload () 
} )
    button.addEventListener("click", () => { modalWindow.style.display = "block" })
    closeAuthButton.addEventListener("click", closeAuth);
    if (localStorage.getItem("user")) {
        const userLogin = localStorage.getItem("user");
        userAuth (userLogin)
    }
    function closeAuth() { modalWindow.style.display = "none"; }
    function userAuth(userLogin) {
        buttonOut.classList.remove("none");
        button.classList.add("none");
        userName.textContent = userLogin;
        logIn.value = "";
        passWord.value = "";
    }
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
            userAuth(userLogin);
            localStorage.setItem ("user", userLogin)
            // buttonOut.classList.remove("none");
            // button.classList.add("none");
            // userName.textContent = userLogin;
            // logIn.value = "";
            // passWord.value = "";
        }
    });
}
modalWindowLogin () 