let loginBtn = document.getElementById("login");
let email = document.getElementById("email");
let password = document.getElementById("password");
let alertMessage = document.querySelector(".alert-message");
// let userFName = localStorage.getItem("firstName");
///////////////////////////////////////////////////////////////

let users = [];
let user = {};

window.onload =()=>{
  users  =  (localStorage.users) ? JSON.parse(localStorage.users) :[];
}
///////////////////////////////////////////////////////////////
function formReset(){
    alertMessage.innerHTML = "";
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

////////// events /////////////

loginBtn.addEventListener("click",function(e){
    e.defaultPrevented=false;

    if(check()){
        user = users.filter((item)=>{
        return email.value.trim() == item.email && password.value.trim() == item.password;       
    })

       if(user.length > 0){
        alertMessage.style.color = "green";
        alertMessage.innerHTML="login successfully";
        localStorage.lastLogin = JSON.stringify(user[0]);

        setTimeout(()=>{
            location.assign("index.html")
        },1000);

        }
        else{
            alertMessage.style.color = "red";
            alertMessage.innerHTML="email or password is incorrect";
        }
    }
    })
    