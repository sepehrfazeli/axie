let axieaP = document.getElementsByClassName('embedFieldValue-nELq2s');
let axieaL = document.getElementsByClassName('embedDescription-1Cuq9a');
let price, price1, price2 = 0;
let link = '';
let wallet = 0.0552


var myVar = setInterval(myTimer, 500);

function myTimer() {
    price1 = axie[axie.length - 1].childNodes[0].data
    price2 = axie[axie.length - 2].childNodes[0].data
    price = price1 ? price1 : price2;
    console.clear();
    if (price <= wallet) {
        console.log(price);
    }
}

function myStopFunction() {
    clearInterval(myVar);
}