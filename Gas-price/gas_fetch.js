const fetch = require("node-fetch");
let Price, Gas, Eth_price = 0;
let min = 200;





const gas = async () => {
    let res = await fetch("https://www.gasnow.org/api/v3/gas/price?utm_source=gasnow-fetcher", {
        "credentials": "omit",
        "headers": {
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:90.0) Gecko/20100101 Firefox/90.0",
            "Accept": "*/*",
            "Accept-Language": "en-US,en;q=0.5",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Site": "cross-site"
        },
        "referrer": "https://axie.live/",
        "method": "GET",
        "mode": "cors"
    }).then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Request failed!');
    }, networkError => {
        console.log(networkError.message)
    }).then(jsonResponse => {
        try {
            Gas = jsonResponse.data.rapid;
        } catch (e) {
            console.log(e);
        }
        // console.log(jsonResponse)
    });
}

const eth_price = async () => {
    let res = await fetch("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD,ETH,EUR,AXS,PHP,IDR,VND,BRL,INR,CAD", {
        "credentials": "omit",
        "headers": {
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:90.0) Gecko/20100101 Firefox/90.0",
            "Accept": "*/*",
            "Accept-Language": "en-US,en;q=0.5",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Site": "cross-site"
        },
        "referrer": "https://axie.live/",
        "method": "GET",
        "mode": "cors"
    }).then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Request failed!');
    }, networkError => {
        console.log(networkError.message)
    }).then(jsonResponse => {
        try {
            Eth_price = jsonResponse.USD;
        } catch (e) {
            console.log(e);
        }
        // console.log(jsonResponse)
    });
}

const check = async () => {
    console.clear();

    gas();
    eth_price();

    Price = Eth_price * Gas * 248.673 * .000000000000001;


    if (Price < 20) {
        console.log('\x1b[32m%s\x1b[0m', `${Price}\nYES\nYES\nYES`);
        console.log("\x1b[1m", "\x1b[34m", "\x1b[42m", `LAST CHECK :  + ${Date()}`, "\x1b[0m");
    }
    else {
        console.log('\x1b[31m%s\x1b[0m', `${Price}\nNO\nNO\nNO`);
        console.log("\x1b[1m", "\x1b[34m", "\x1b[41m", `LAST CHECK :  + ${Date()}`, "\x1b[0m")
    };

    if (Price < min && Price != 0) {
        console.log('\u0007');
        min = Price;
    }
    console.log(`minimum amount : ${Math.floor(min)}$`);
}



//timer

let timer = setInterval(myTimer, 1000);

function myTimer() {

    check();

}

function myStop() {
    clearInterval(timer);
}


