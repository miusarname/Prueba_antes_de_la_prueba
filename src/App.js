//const fecha = new Date();
const listBuy=document.querySelector('.doBuys')
const addCart= document.querySelectorAll('.addCart')



const newShopping = (object)=>{
    listBuy.innerHTML +=  `  <li class="nav-link"><a href="#"><i class='bx bxs-t-shirt icon' ></i><span class="text nav-text">${object}</span></a></li> `
};
//console.log(fecha);

const body = document.querySelector('body'),
    sidebar = body.querySelector('nav'),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");


toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
})

console.log("cart: " + addCart);
addCart.forEach(el=>{
    el.addEventListener('click', () => {
        let content= el.parentElement.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.textContent;
        let contents=el.parentNode
        console.log("content: " + content);
        newShopping(content);
        
    });
});