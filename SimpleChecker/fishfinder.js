//initialize
const fetch = require("node-fetch");
const open = require('open');


let result = [];
let price = 0.057;
let Ttimer = 2000;
let Anemone = [];
let killer = [];
let Post = [];
const largNum = 1000000000000000000;





const mahiAnemone = async () => {
    let res = await fetch("https://graphql-gateway.axieinfinity.com/graphql", {
        "headers": {
            "accept": "*/*",
            "accept-language": "en-US,en;q=0.9,fa;q=0.8,ur;q=0.7,ps;q=0.6",
            "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOjQ1NDc5NiwiYWN0aXZhdGVkIjp0cnVlLCJyb25pbkFkZHJlc3MiOiIweDQzYmMxZTExODQ3NmY5MGFlZDFkMzY2ZjA2ZTQ2ZmI3ZjAwZDg5ZTMiLCJldGhBZGRyZXNzIjoiMHhlYmYwYzc4NWQ4YjQ0ZGY2OTI2N2NkYzgwNzhiOWNjNmVjOTY5NTMxIiwiaWF0IjoxNjM1NTk1MzAzLCJleHAiOjE2MzYyMDAxMDMsImlzcyI6IkF4aWVJbmZpbml0eSJ9.j1Ob6hCRzbBamWtjDIXDPnj99X7WRqHTFY-3ksOBwNU",
            "content-type": "application/json",
            "sec-ch-ua": "\"Chromium\";v=\"92\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"92\"",
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-site"
        },
        "referrer": "https://marketplace.axieinfinity.com/",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "{\"operationName\":\"GetAxieBriefList\",\"variables\":{\"from\":0,\"size\":24,\"sort\":\"PriceAsc\",\"auctionType\":\"Sale\",\"owner\":null,\"criteria\":{\"region\":null,\"parts\":[\"horn-anemone\",\"back-anemone\",\"tail-nimo\",\"mouth-lam\"],\"bodyShapes\":null,\"classes\":null,\"stages\":null,\"numMystic\":null,\"pureness\":null,\"title\":null,\"breedable\":null,\"breedCount\":null,\"hp\":[],\"skill\":[],\"speed\":[],\"morale\":[]}},\"query\":\"query GetAxieBriefList($auctionType: AuctionType, $criteria: AxieSearchCriteria, $from: Int, $sort: SortBy, $size: Int, $owner: String) {\\n  axies(auctionType: $auctionType, criteria: $criteria, from: $from, sort: $sort, size: $size, owner: $owner) {\\n    total\\n    results {\\n      ...AxieBrief\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment AxieBrief on Axie {\\n  id\\n  name\\n  stage\\n  class\\n  breedCount\\n  image\\n  title\\n  battleInfo {\\n    banned\\n    __typename\\n  }\\n  auction {\\n    currentPrice\\n    currentPriceUSD\\n    __typename\\n  }\\n  parts {\\n    id\\n    name\\n    class\\n    type\\n    specialGenes\\n    __typename\\n  }\\n  __typename\\n}\\n\"}",
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    }).then(response => {
        try {
            if (response.ok) {
                return response.json();
            }

        } catch (e) {
            console.log('\x1b[31m%s\x1b[0m', 'error\n')
        }
        if (response.ok) {
            return response.json();
        }
    }, networkError => {
        console.log(networkError.message)
    }).then(jsonResponse => {
        try {
            Anemone = jsonResponse.data.axies.results;
        } catch (e) {
            console.log('error\n')
        }
    });

}

const mahiKiller = async () => {
    let res = await fetch("https://graphql-gateway.axieinfinity.com/graphql", {
        "headers": {
            "accept": "*/*",
            "accept-language": "en-US,en;q=0.9,fa;q=0.8,ur;q=0.7,ps;q=0.6",
            "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOjQ1NDc5NiwiYWN0aXZhdGVkIjp0cnVlLCJyb25pbkFkZHJlc3MiOiIweDQzYmMxZTExODQ3NmY5MGFlZDFkMzY2ZjA2ZTQ2ZmI3ZjAwZDg5ZTMiLCJldGhBZGRyZXNzIjoiMHhlYmYwYzc4NWQ4YjQ0ZGY2OTI2N2NkYzgwNzhiOWNjNmVjOTY5NTMxIiwiaWF0IjoxNjM1NTk1MzAzLCJleHAiOjE2MzYyMDAxMDMsImlzcyI6IkF4aWVJbmZpbml0eSJ9.j1Ob6hCRzbBamWtjDIXDPnj99X7WRqHTFY-3ksOBwNU",
            "content-type": "application/json",
            "sec-ch-ua": "\"Chromium\";v=\"92\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"92\"",
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-site"
        },
        "referrer": "https://marketplace.axieinfinity.com/",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "{\"operationName\":\"GetAxieBriefList\",\"variables\":{\"from\":0,\"size\":24,\"sort\":\"PriceAsc\",\"auctionType\":\"Sale\",\"owner\":null,\"criteria\":{\"region\":null,\"parts\":[\"back-goldfish\",\"tail-koi\",\"mouth-lam\",\"mouth-piranha\",\"horn-oranda\"],\"bodyShapes\":null,\"classes\":[\"Aquatic\"],\"stages\":null,\"numMystic\":null,\"pureness\":null,\"title\":null,\"breedable\":null,\"breedCount\":null,\"hp\":[],\"skill\":[],\"speed\":[57,61],\"morale\":[]}},\"query\":\"query GetAxieBriefList($auctionType: AuctionType, $criteria: AxieSearchCriteria, $from: Int, $sort: SortBy, $size: Int, $owner: String) {\\n  axies(auctionType: $auctionType, criteria: $criteria, from: $from, sort: $sort, size: $size, owner: $owner) {\\n    total\\n    results {\\n      ...AxieBrief\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment AxieBrief on Axie {\\n  id\\n  name\\n  stage\\n  class\\n  breedCount\\n  image\\n  title\\n  battleInfo {\\n    banned\\n    __typename\\n  }\\n  auction {\\n    currentPrice\\n    currentPriceUSD\\n    __typename\\n  }\\n  parts {\\n    id\\n    name\\n    class\\n    type\\n    specialGenes\\n    __typename\\n  }\\n  __typename\\n}\\n\"}",
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    }).then(response => {
        try {
            if (response.ok) {
                return response.json();
            }

        } catch (e) {
            console.log('\x1b[31m%s\x1b[0m', 'error\n')
        }
        if (response.ok) {
            return response.json();
        }
    }, networkError => {
        console.log(networkError.message)
    }).then(jsonResponse => {
        try {
            killer = jsonResponse.data.axies.results;
        } catch (e) {
            console.log('error\n')
        }
    });

}

const mahiPost = async () => {
    let res = await fetch("https://graphql-gateway.axieinfinity.com/graphql", {
        "headers": {
            "accept": "*/*",
            "accept-language": "en-US,en;q=0.9,fa;q=0.8,ur;q=0.7,ps;q=0.6",
            "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOjQ1NDc5NiwiYWN0aXZhdGVkIjp0cnVlLCJyb25pbkFkZHJlc3MiOiIweDQzYmMxZTExODQ3NmY5MGFlZDFkMzY2ZjA2ZTQ2ZmI3ZjAwZDg5ZTMiLCJldGhBZGRyZXNzIjoiMHhlYmYwYzc4NWQ4YjQ0ZGY2OTI2N2NkYzgwNzhiOWNjNmVjOTY5NTMxIiwiaWF0IjoxNjM1NTk1MzAzLCJleHAiOjE2MzYyMDAxMDMsImlzcyI6IkF4aWVJbmZpbml0eSJ9.j1Ob6hCRzbBamWtjDIXDPnj99X7WRqHTFY-3ksOBwNU",
            "content-type": "application/json",
            "sec-ch-ua": "\"Chromium\";v=\"92\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"92\"",
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-site"
        },
        "referrer": "https://marketplace.axieinfinity.com/",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "{\"operationName\":\"GetAxieBriefList\",\"variables\":{\"from\":0,\"size\":24,\"sort\":\"PriceAsc\",\"auctionType\":\"Sale\",\"owner\":null,\"criteria\":{\"region\":null,\"parts\":[\"horn-anemone\",\"back-anemone\",\"mouth-lam\",\"tail-nimo\",\"tail-post-fight\"],\"bodyShapes\":null,\"classes\":null,\"stages\":null,\"numMystic\":null,\"pureness\":null,\"title\":null,\"breedable\":null,\"breedCount\":null,\"hp\":[],\"skill\":[],\"speed\":[57,61],\"morale\":[]}},\"query\":\"query GetAxieBriefList($auctionType: AuctionType, $criteria: AxieSearchCriteria, $from: Int, $sort: SortBy, $size: Int, $owner: String) {\\n  axies(auctionType: $auctionType, criteria: $criteria, from: $from, sort: $sort, size: $size, owner: $owner) {\\n    total\\n    results {\\n      ...AxieBrief\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment AxieBrief on Axie {\\n  id\\n  name\\n  stage\\n  class\\n  breedCount\\n  image\\n  title\\n  battleInfo {\\n    banned\\n    __typename\\n  }\\n  auction {\\n    currentPrice\\n    currentPriceUSD\\n    __typename\\n  }\\n  parts {\\n    id\\n    name\\n    class\\n    type\\n    specialGenes\\n    __typename\\n  }\\n  __typename\\n}\\n\"}",
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    }).then(response => {
        try {
            if (response.ok) {
                return response.json();
            }

        } catch (e) {
            console.log('\x1b[31m%s\x1b[0m', 'error\n')
        }
        if (response.ok) {
            return response.json();
        }
    }, networkError => {
        console.log(networkError.message)
    }).then(jsonResponse => {
        try {
            Post = jsonResponse.data.axies.results;
        } catch (e) {
            console.log('error\n')
        }
    });

}

const check = async (maxPrice) => {

    console.clear();

    // result = []
    let an = await Anemone[0];
    let kil = await killer[0];
    let pos = await Post[0];
    // console.log(an)
    try {


        let Anprice = an.auction.currentPrice / largNum;
        Anprice = Anprice.toFixed(3);

        let Kilprice = kil.auction.currentPrice / largNum;
        Kilprice = Kilprice.toFixed(3);

        let Posprice = pos.auction.currentPrice / largNum;
        Posprice = Posprice.toFixed(3);

        console.log(`mahiPost\t: price = ${Posprice} \t link = https://marketplace.axieinfinity.com/axie/${pos.id} \n`);
        console.log(`mahiAnemone\t: price = ${Anprice} \t link = https://marketplace.axieinfinity.com/axie/${an.id} \n`);
        console.log(`mahiKiller\t: price = ${Kilprice} \t link = https://marketplace.axieinfinity.com/axie/${kil.id}\n`);
        if (result[result.length - 1] !== pos.id) {
            if (Posprice < 0.067) {
                result.push(pos.id);
                open(`https://marketplace.axieinfinity.com/axie/${pos.id}`)
                console.log('\u0007');
                console.log('\u0007');
                console.log('\u0007');
            }
        }

    } catch (e) {
        console.log(e)
    }



    /*for (let item of list) {
        try {

            let price = item.auction.currentPrice / 1000000000000000000;
            price = price.toFixed(3);
            let id = item.id;

            let link = `https://marketplace.axieinfinity.com/axie/${id}`;
            let time = Date().slice(16, 24);
            result.push([price, link, time]);
            // console.log(price)

        } catch (e) {}
    }*/








}






//timer

let timer = setInterval(myTimer, Ttimer);

function myTimer() {



    mahiAnemone();
    mahiKiller();
    mahiPost();
    check(price);
    // if (list[0]) {
    //     console.log(list[0].auction)
    // }


    console.log('LAST CHECK : ' + Date() + '\n');
}

function myStop() {
    clearInterval(timer);
}