let formOrder = document.getElementsByName('order')
let quantityF = document.querySelector('#quantityF')
let quantityM = document.querySelector('#quantityM')
let totalF = document.querySelector('#totalF')
let totalM = document.querySelector('#totalM')
let totalOrderBtn = document.querySelector('#totalOrderBtn')
let totalOrder = document.querySelector('#totalOrder')
let totalValF
let totalValM
let totalValOrder

function calcPriceF(){
    totalValF = (150.95 * quantityF.value).toFixed(2);
    totalF.innerHTML = totalValF;
}

function calcPriceM(){
    totalValM = (180.95 * quantityM.value).toFixed(2); 
    totalM.innerHTML = totalValM;
}

function calcTotal(){
    totalValOrder = eval(totalValF + "+" + totalValM).toFixed(2); 
    totalOrder.innerHTML = totalValOrder;
}

calcPriceF();
calcPriceM();

totalOrderBtn.addEventListener('click', calcTotal())

