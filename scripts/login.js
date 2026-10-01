const username = document.getElementById("username");
const password = document.getElementById("password");
const login_button = document.getElementById("login_button");
const paragraph = document.getElementById("paragraph");


function checkCredentials () {
    if (username.value.length < 6){
        throw new Error("Username text must be at least 6 characters");
    }
    if(password.value.length < 10) {
        throw new Error("Password text must be at least 10 characters");
    }
}
     
function login () {
    try {
        checkCredentials();
        paragraph.style = "color:green";
        paragraph.innerText = "Authenticated";
        username.value = "";
        password.value = "";
    } catch(error){
        paragraph.style = "color:red";
        paragraph.innerText = error;
    } finally{
        console.log("Login mission completed");
    }
}

login_button.addEventListener("click",login);