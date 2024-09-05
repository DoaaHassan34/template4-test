let links = document.querySelector("#links");
let userInfo = document.getElementById ("user_info");
let userID = document.getElementById("user");
let logout = document.getElementById("logout");
let cart = document.querySelector("#user_info i");
let counter = document.getElementById("count");
let allProducts = document.querySelector(".products"); 
let cartProducts = document.querySelector("#cart-products")
let cartProductItems= document.querySelector("#cart-products div");
let addToCartBtn = document.getElementById("add-to-cart");
let addToFavBtn = document.getElementById("fav");

let viewAllProducts = document.getElementById("view-all-products");
/////// search ///// 
let searchByName = document.getElementById("searchByName");
let searchCombo = document.getElementById("searchCompo");

searchByName.onkeyup = function(){
   searchName(searchByName.value)
}
//////////////////////////////////////////////////////////////
let products = [
 {
    id:1,
    name:"Blue Bike",
    category:"outdoor",
    price: 1200,
    imageURL: "images/bike blue.jpg",
    count: 0
 }
 ,
{
    id:2,
    name:"Swing",
   category:"outdoor",
   price: 1500,
   imageURL: "images/swing-2.jpg",
   count: 0
  
 }
,

 {
    id:3,
    name:"wooden xo",
    category:"indoor",
    price: 400,
    imageURL: "images/xo.jfif",
    count: 0
 }
 ,
 {
    id:4,
    name:"ludo",
    category:"indoor",
    price: 300,
    imageURL: "images/ludo.jfif",
    count: 0
 }
 ,
 {
   id:5,
   name:"BasketBall",
   category:"outdoor",
   price: 700,
   imageURL: "images/pasketball1.jpg",
   count: 0

}
,
{
   id:6,
   name:"Foosball",
   category:"indoor",
   price: 500,
   imageURL: "images/Big football.jfif",
   count: 0
}
,
{
   id:7,
   name:"Blue Skate",
   category:"outdoor",
   price: 1900,
   imageURL: "images/skate-blue.jpg",
   count: 0
}
,
{
   id:8,
   name:"Haveboard",
   category:"outdoor",
   price: 2500,
   imageURL: "images/haveboard - red.jpg",
   count: 0
}

]
//////////////////////////////////////////////
function setsearchType(selection){

   if(selection.value == "name")
     searchByName.placeholder = "Search by name";
   else 
     searchByName.placeholder = "search by category";

     searchByName.value="";
     searchByName.focus();
     readItem();
}
function searchName(search){

   let items;
   if(searchCombo.value == "name"){

      items = products.map((item)=>{

         let myproduct = false;
         let myfavProduct = false;
         let btnType = "";
         let back="";
         let favColor="";
   
         if(localStorage.lastLogin != ""){
            myproduct = user.products.some(i=> i.id === item.id )
            myfavProduct = user.fav.some(i=> i.id === item.id )
         }
   
         if(myproduct){
            btnType = "remove from cart";
            back = "#f01f1f";
         }
         else{
            btnType = "add to cart";
            back = "#33c033";
         }
   
         if(myfavProduct)
            favColor = "#f01f1f";
         else 
            favColor="grey";
         ///

      if(item.name.toLowerCase().includes(search.toLowerCase())){

         return `<div class="product-item col-lg-3 col-sm-10 col-10 >
         <img src="${item.imageURL}" alt="baby-slide">
 
         <div class="product-details ">
             <h2 class="product-title">Name: ${item.name}</h2>
             <p class="product-desc">Category: ${item.category} </p>
             <h5>Price: <span class="product-price">${item.price} $</span></h5>
         </div>
         
         <div class="product-actions">
             <button id="add-to-cart" onClick = "addToCart(${item.id},this)" style ="background-color: ${back};">${btnType}</button>
             <i id="fav" class="fa-solid fa-heart" onClick = "addToFav(${item.id})" style ="color: ${favColor};"></i>
         </div>
         </div> `
      }
     })    
}
else{

      items = products.map((item)=>{

         let myproduct = false;
         let myfavProduct = false;
         let btnType = "";
         let back="";
         let favColor="";
   
         if(localStorage.lastLogin != ""){
            myproduct = user.products.some(i=> i.id === item.id )
            myfavProduct = user.fav.some(i=> i.id === item.id )
         }
   
         if(myproduct){
            btnType = "remove from cart";
            back = "#f01f1f";
         }
         else{
            btnType = "add to cart";
            back = "#33c033";
         }
   
         if(myfavProduct)
            favColor = "#f01f1f";
         else 
            favColor="grey";
         ///

      if(item.category.toLowerCase().includes(search.toLowerCase())){
         return `<div class="product-item col-lg-3 col-sm-10 col-10">
         <img src="${item.imageURL}" alt="baby-slide">
 
         <div class="product-details ">
             <h2 class="product-title">Name: ${item.name}</h2>
             <p class="product-desc">Category: ${item.category} </p>
             <h5>Price: <span class="product-price">${item.price} $</span></h5>
         </div>
         
         <div class="product-actions">
             <button id="add-to-cart" onClick = "addToCart(${item.id},this)" style ="background-color: ${back};">${btnType}</button>
             <i id="fav" class="fa-solid fa-heart" onClick = "addToFav(${item.id})" style ="color: ${favColor};"></i>
         </div>
         </div> `
      }
     })
}

allProducts.innerHTML = items.join(" ");
}
/////////////////////////////////////////////


function readItem(){

    let items = products.map((item)=>{

      let myproduct = false;
      let myfavProduct = false;
      let btnType = "";
      let back="";
      let favColor="";

      if(localStorage.lastLogin != ""){
         myproduct = user.products.some(i=> i.id === item.id )
         myfavProduct = user.fav.some(i=> i.id === item.id )
      }
      
      if(myproduct){
         btnType = "remove from cart";
         back = "#f01f1f";
      }
      else{
         btnType = "add to cart";
         back = "#33c033";
      }

      if(myfavProduct)
         favColor = "#f01f1f";
      else 
         favColor="grey";
      ///

        return `<div class="product-item col-lg-3 col-sm-10 col-10">
        <img src="${item.imageURL}" alt="baby-slide">

        <div class="product-details ">
            <h2 class="product-title">Name: ${item.name}</h2>
            <p class="product-desc">Category: ${item.category} </p>
            <h5>Price: <span class="product-price">${item.price} $</span></h5>
        </div>
        
        <div class="product-actions">
            <button id="add-to-cart" onClick = "addToCart(${item.id},this)" style ="background-color: ${back};">${btnType}</button>
            <i id="fav" class="fa-solid fa-heart" onClick = "addToFav(${item.id})" style ="color: ${favColor};"></i>
        </div>
        </div> `
    })
    allProducts.innerHTML = items.join(" ");
}

// readItem();
//draw productCart 
function fillProductsCart(products){

   let x=products.map(item => {
      
     return `<div class="productsCartItem">
      <div><p>${item.name}</p></div>
      <div>
        <span id="productCount">${item.count}</span>
        <button id="incrementBtn" onClick = "incrementItem(${item.id})"><i class="fa-solid fa-plus text-success"></i></button>
        <button id="decrementBtn" onClick = "decrementItem(${item.id})"><i class="fa-solid fa-minus text-danger"></i></button>
      </div>
      </div>`;
   })

    cartProductItems.innerHTML = x.join("");
    counter.innerHTML = cartProductItems.children.length;

   counter.style.display="block";
   isEmptyCart();
}
/////////////////////////////////////////////////////////////////////////////////

function saveData(){
   //modify  localStorage users 
   localStorage.lastLogin = JSON.stringify( user );
   users.filter(item=>item.email == user.email)[0].products = user.products;
   localStorage.users = JSON.stringify(users);
}
function incrementItem(id){

   let incrementProduct = user.products.find(item=> item.id === id);
   incrementProduct.count++;   
 
  //draw productCart
  fillProductsCart(user.products);

   //modify  localStorage users 
   saveData(); 
}
function decrementItem(id){
   let decrementProduct = user.products.find(item=> item.id === id);
   if(decrementProduct.count>1)
      decrementProduct.count--;   
   else{
      user.products.splice(user.products.findIndex(a => a.id === decrementProduct.id) , 1);
      readItem();
    }
    
   //////////////
 
  //draw productCart
  fillProductsCart(user.products);

   //modify  localStorage users 
   saveData();
}
////////////////////////////////////////////////////////////////////////////////

function addToCart(id){

if( localStorage.lastLogin != ""){
    let choosenItem = products.find(item=> item.id === id );
    let myproduct=user.products.some(i=>i.id===choosenItem.id)
    if(!myproduct) // add to cart work here
    {
      choosenItem.count=1;
      user.products.push(choosenItem);
    }
    else{ //remove to cart work here
      user.products.splice(user.products.findIndex(a => a.id === id) , 1);
    }
    
   //draw productCart
   fillProductsCart(user.products);
   readItem();
    //modify  localStorage users 
    saveData();

}
else{
   
      setTimeout(()=>{
         location.assign("login.html")
     },1000);
   
}
}
function addToFav(id){
   if( localStorage.lastLogin != ""){
   let favItem = products.find(item=> item.id === id )
   let alreadyFav = user.fav.find(item=> item.id === favItem.id);
   if(alreadyFav){
      user.fav.splice(user.fav.findIndex(a => a.id === id) , 1);
    }
 else {
   user.fav.push(favItem);  
} 

    readItem();
   //modify  localStorage users 
   saveData();
}
else   {
   setTimeout(()=>{
      location.assign("login.html")
  },1000);
}

}
//////////// events////////////
cart.addEventListener("click", ()=>{


   isEmptyCart();

    if(cartProducts.style.display === "none" ) 
       cartProducts.style.display="block";
    else
       cartProducts.style.display="none";
        
})

function isEmptyCart(){

   if(user.products.length==0){
      viewAllProducts.innerText="no items to view";
   }
   else{
      viewAllProducts.innerText="view all products";
   }
}

