let user = {}
let users = [];
let allProducts = document.querySelector(".products");
let logout = document.getElementById("allproducts-logout");
let totalPrice = document.getElementById("totalPrice");


function calculateTotalPrice(){

    let total = 0;
    for(let i=0; i<user.products.length;i++)
      total+=(user.products[i].price *user.products[i].count);
      totalPrice.innerHTML = total;

}

function isLogin(){
    if(localStorage.lastLogin && localStorage.lastLogin!=""){
        user = JSON.parse(localStorage.lastLogin);
    }
}

function incrementItem(id){

    let incrementProduct = user.products.find(item=> item.id === id);
    incrementProduct.count++;   
  
   
   readItem();
 
    //modify  localStorage users 
     localStorage.lastLogin = JSON.stringify( user );
     users.filter(item=>item.email == user.email)[0].products = user.products;
     localStorage.users = JSON.stringify(users);
 
 }
 function decrementItem(id){
    let decrementProduct = user.products.find(item=> item.id === id);
    if(decrementProduct.count>1)
       decrementProduct.count--;   
    else{
       user.products.splice(user.products.findIndex(a => a.id === decrementProduct.id) , 1);
     }
       
   //draw
   readItem();
 
    //modify  localStorage users 
     localStorage.lastLogin = JSON.stringify( user );
     users.filter(item=>item.email == user.email)[0].products = user.products;
     localStorage.users = JSON.stringify(users);
 }

function removeProduct(id){
    user.products.splice(user.products.findIndex(a => a.id === id) , 1);
    readItem();
    localStorage.lastLogin = JSON.stringify( user );
    users.filter(item=>item.email == user.email)[0].products = user.products;
    localStorage.users = JSON.stringify(users);

}

 ////////////////////////////////////////////////////////////////////////////////

function readItem(){

    let items = user.products.map((item)=>{
        return ` <div class="product-item rounded-4 p-5">
        <img src="${item.imageURL}" alt="baby-slide">

        <div class="product-container">
          <div class="product-details ">
            <h5 class="product-title">Name: ${item.name}</h5>
            <h5 class="product-category">Category: ${item.category} </h5>
            <h5>Price: <span id="product-price">${item.price} $</span></h5>
          </div>
        
          <div class="product-actions">
                <h3 id="productCount">${item.count}</h3>
                <button id="incrementBtn" onClick = "incrementItem(${item.id})"><i class="fa-solid fa-plus text-success"></i></button>
                <button id="decrementBtn" onClick = "decrementItem(${item.id})"><i class="fa-solid fa-minus text-danger"></i></button>
                <button id="remove" onClick = "removeProduct(${item.id})">remove</button>
          </div>
        </div>
        </div> `
    })

    allProducts.innerHTML = items.join(" ");
    calculateTotalPrice();

}
////////////// events //////////////////////////
onload = function(){
    users  =  (localStorage.users) ? JSON.parse(localStorage.users) :[];
    isLogin();
    readItem();
    drawSlide();
}

logout.onclick = function(){
    localStorage.lastLogin = "";
}

// swipper ///////////


let sliderFav = document.getElementById("slider-fav");
let sliderContainer = document.querySelector(".swiper-wrapper");


function drawSlide(){

   let favs = user.fav.map(item=>{
    return ` <div id="swiper-container" class="swiper-slide">
    <div class="fav-item">
        <img src="${item.imageURL}" alt="image">
        <h5>product: ${item.name}</h5>
        <div class="d-flex border border-2" ><h5>category: ${item.category}</h5><i id="slider-fav"
        onClick = "removeFav(${item.id})" class="fa-solid fa-heart ms-auto text-danger fs-3"></i>
        </div>
    </div>
  </div> `
   })

   sliderContainer.innerHTML = favs.join("");
}

function removeFav(id){
    user.fav.splice(user.fav.findIndex(a => a.id === id) , 1);
    drawSlide();

    localStorage.lastLogin = JSON.stringify( user );
    users.filter(item=>item.email == user.email)[0].fav = user.fav;
    localStorage.users = JSON.stringify(users);

}


