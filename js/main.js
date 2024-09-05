let user = {}
let favProducts = [];
let users = [];

function isLogin(){
    if(localStorage.lastLogin && localStorage.lastLogin!=""){

        user = JSON.parse(localStorage.lastLogin);
        console.log(user)
        links.remove();
        userID.innerHTML= user.firstName;
        userInfo.style.display = "flex";

        readUserProducts();
        readUserFav();

    }
    else {
        userInfo.style.display = "none";
    }
    }
    //read user products 
    function readUserProducts(){
        if(user.products.length>0){
            fillProductsCart(user.products);
        }
    }

    //read user fav products
    function readUserFav(){
        favProducts = user.fav;
    }

////////////// events //////////////////////////
onload = function(){
    users  =  (localStorage.users) ? JSON.parse(localStorage.users) :[];
    isLogin();
    readItem();

}

logout.onclick = function(){
    localStorage.lastLogin = "";
}