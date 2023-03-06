const minus = document.querySelector(".minus")
const plus = document.querySelector(".plus")
const number = document.querySelector(".number")
const addToCart = document.querySelector(".add-to-cart-container")
const boughtItems = document.querySelector(".bought-items")
const show = document.querySelector(".show")
const photos = document.querySelectorAll(".photo")
const hamburger = document.querySelector(".hamburger")
const leftSide = document.querySelector(".left-side")
const closeHamburger = document.querySelector(".close-left-btn")
const hero = document.querySelector(".without-nav")
const checkout = document.querySelector(".checkout")
const shoppingCart = document.querySelector(".shopping-cart")
const checkoutPrice = document.querySelector(".checkout-price")
const trash = document.querySelector(".delete")

plus.addEventListener("click", () =>{
    number.innerHTML = parseInt(number.innerHTML) + 1
})

minus.addEventListener("click", () =>{
    if(parseInt(number.innerHTML) > 0){
        number.innerHTML = parseInt(number.innerHTML) - 1
    }   
})

addToCart.addEventListener("click", ()=> {
    if(parseInt(number.innerHTML) > 0){
        boughtItems.innerHTML = number.innerHTML
        boughtItems.classList.remove("hidden")
    }
    checkoutPrice.innerHTML = `125$ x ${number.innerHTML} = ${125 * parseInt(number.innerHTML)}$`
})

function showPhoto(){
    show.classList.remove("hidden")
}

function hidePhoto(){
    show.classList.add("hidden")
}

nextPhoto = () =>{
    photos.forEach(photo =>{
        if(!photo.classList.contains("hidden")){
            photo.classList.toggle("hidden")
        }else{
            photo.classList.toggle("hidden")
        }
    })
}

hamburger.addEventListener("click", () =>{
    leftSide.classList.toggle("active")
    hero.classList.toggle("blur")
})

closeHamburger.addEventListener("click", () =>{
    leftSide.classList.toggle("active")
    hero.classList.toggle("blur")
})

shoppingCart.addEventListener("click", () =>{
    checkout.classList.toggle("hidden")
})

trash.addEventListener("click", () =>{
    boughtItems.innerHTML = ''
    number.innerHTML = '0'
    checkoutPrice.innerHTML = ''
})

   


