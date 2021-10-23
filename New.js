

//initialize

let axieP = document.getElementsByClassName('embedFieldValue-nELq2s');
let axieL = document.getElementsByClassName('embedDescription-1Cuq9a');
let price = 0;
let link = '';
let result = [];
let backup = [];
let trigger = true;
let s = 0;
let wallet = 0.0552;
let pause = 2000;
let Ttimer = 500;
let time = '';




const check = (wallet) => {

    console.clear();

    checker = axieP[axieP.length - 1].childNodes[0].data ? 1 : 2;


    let priceS = axieP[axieP.length - checker].childNodes[0].data;
    let priceF = axieP[axieP.length - checker].childNodes[2].data;

    link = axieL[axieL.length - 1].childNodes[0].href

    console.clear();






    if (priceS <= wallet || priceF <= 0.05) {



        time = Date().slice(16, 24)++


        if (!result.some(x => x[2] === link)) {

            result.push([priceS,priceF, link]);
            // window.open('http://cd.textfiles.com/mmplatinum/SOUNDS/WAV/MOREWAV2/ALARM2.WAV', '_blank');



            let holder = setTimeout(function () {
                window.open(result[result.length - 1][2], '_blank');
            }, pause);
            // window.open(link, '_blank');
            // window.open(`https://axie.zone/finder?search=axie_id:${id}`, '_blank');
        }

    }





}

//timer

let timer = setInterval(myTimer, Ttimer);

function myTimer() {
    check(wallet);

    if (result.length > s && trigger) {
        trigger = false;
        // window.open('http://cd.textfiles.com/mmplatinum/SOUNDS/WAV/MOREWAV2/ALARM2.WAV', '_blank');
    }

    result.forEach((element, index) => {
        console.log(`${index} : Price Start = ${element[0]} \n Price Finish = ${element[`1`]} \nlink = ${element[`2`]}`);
    });

    console.log('LAST CHECK : ' + Date());
}

function myStop() {
    clearInterval(timer);
}


const alter = (Wallet) => {
    wallet = Wallet;
    backup = result;
    result = [];
}

const Trigger = () => {
    trigger = true
    s = result.length
}

//Ex : Trigger()
