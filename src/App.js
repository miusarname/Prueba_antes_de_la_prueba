//const fecha = new Date();
//Variables
const listBuy=document.querySelector('.doBuys')
const addCart= document.querySelectorAll('.addCart')
const btnSend = document.querySelector(".bx-send")


let pedido = {}


//Funciones
const newShopping = (object)=>{
    listBuy.innerHTML +=  `  <li class="nav-link"><a href="#"><i class='bx bxs-t-shirt icon addToJson' ></i><span class="text nav-text">${object}</span></a></li> `
};

const send=(json)=>{
    console.log(json);
}

//console.log(fecha);

function fooBar() {
    let lista = document.querySelectorAll(".addToJson");
    lista.forEach(item=>{
        let content =item.nextElementSibling.textContent;
        pedido[content] = pedido[content] ? pedido[content] + 1  : 1
        //console.log(pedido);
        //console.log(content);
        //send(pedido)
        
    })
    send(pedido)
    pedido = {}
    return pedido
};



//Inter with DOM
const body = document.querySelector('body'),
    sidebar = body.querySelector('nav'),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");


toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
})




addCart.forEach(el=>{
    el.addEventListener('click', () => {
        let content= el.parentElement.previousElementSibling.firstChild.textContent;
        let contents=el.parentNode
        console.log("content: " + content);
        newShopping(content);
    });
});


btnSend.addEventListener("click", () => {
    fooBar();
})