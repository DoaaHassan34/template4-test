let registerBtn = document.getElementById("register");
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let password = document.getElementById("password");
let alertMessage = document.querySelector(".alert-message");
/////////////////////////////////////////////////////////////////////////

let users;

window.onload =()=>{
  users  =  (localStorage.users ? JSON.parse(localStorage.users) :[]);
}

/////////////////////////////////////////////////////////////////////////
function formReset(){
    alertMessage.innerHTML = "";
    firstName.style.border = "1px solid #ddd";
    email.style.border = "1px solid #ddd";
    password.style.border = "1px solid #ddd";
    
}
function alertError(field,message){
    field.style.border = "1px solid red";
    alertMessage.style.color = "red";
    alertMessage.innerHTML += message + "<br>"
}

// check() to validate if requird inputs is not empty
function check(){
    formReset();
    let checkFlag = true;
    if(firstName.value == ""){
        alertError(firstName,"first name is requird");
        checkFlag = false;
    }
    if(email.value == ""){
        alertError(email, "email is requird");
        checkFlag = false;
    }
    if(password.value == ""){
        alertError(password, "password is requird");
        checkFlag = false;
    }

    return checkFlag;
}
function saveUser(){

    // create user ///
    let user = {}
    user.firstName = firstName.value;
    user.lastName = lastName.value;
    user.email = email.value;
    user.password = password.value;
    user.products = []
    user.fav = []
    //-------------------

    // save to localStorage ////
    users = [...users , user]
    localStorage.users = JSON.stringify(users);
    //---------------------------

    // message
    alertMessage.style.color = "green";
    alertMessage.innerHTML="register successfully";
}

//////////// events //////////////

registerBtn.addEventListener("click",function(e){
e.defaultPrevented=false;

if(check()){
    saveUser();
    setTimeout(()=>{
        location.assign("login.html")
    },1000);
}
})
