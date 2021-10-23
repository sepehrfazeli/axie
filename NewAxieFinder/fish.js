//initialize
const fetch = require("node-fetch");
const open = require('open');


let result = [];
let price = 0.057;
let Ttimer = 1000;
let list = [];




const listUpdater = async () => {
    let res = await fetch("https://graphql-gateway.axieinfinity.com/graphql", {
        "credentials": "include",
        "headers": {
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:93.0) Gecko/20100101 Firefox/93.0",
            "Accept": "*/*",
            "Accept-Language": "en-US,en;q=0.5",
            "content-type": "application/json",
            "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOjE2MDQ0OTksImFjdGl2YXRlZCI6dHJ1ZSwicm9uaW5BZGRyZXNzIjoiMHhiZDM4ZWNiYzZhZTY2ZmE2ZWYzZGExOGU0Mzc3MmVjYzIwYjJmNWI3IiwiZXRoQWRkcmVzcyI6IjB4OWMxZGI3NjRlZTYxMzUwYWU0NmU2NWI2M2I5OWVlMTdhYWNlNjljMyIsImlhdCI6MTYzNDMwMzE2MywiZXhwIjoxNjM0OTA3OTYzLCJpc3MiOiJBeGllSW5maW5pdHkifQ.BE03g0U3oH7Kxn0zeux--C9SoVoARPgtRIB95Z4XX70",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Site": "same-site"
        },
        "referrer": "https://marketplace.axieinfinity.com/",
        "body": "{\"operationName\":\"GetAxieLatest\",\"variables\":{\"from\":0,\"size\":24,\"sort\":\"PriceAsc\",\"auctionType\":\"Sale\",\"owner\":null,\"criteria\":{\"region\":null,\"parts\":[\"tail-nimo\",\"horn-anemone\",\"back-anemone\"],\"bodyShapes\":null,\"classes\":[\"Aquatic\"],\"stages\":null,\"numMystic\":null,\"pureness\":null,\"title\":null,\"breedable\":null,\"breedCount\":null,\"hp\":[45,61],\"skill\":[],\"speed\":[56,61],\"morale\":[]}},\"query\":\"query GetAxieLatest($auctionType: AuctionType, $criteria: AxieSearchCriteria, $from: Int, $sort: SortBy, $size: Int, $owner: String) {\\n  axies(auctionType: $auctionType, criteria: $criteria, from: $from, sort: $sort, size: $size, owner: $owner) {\\n    total\\n    results {\\n      ...AxieBrief\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment AxieBrief on Axie {\\n  id\\n  name\\n  stage\\n  class\\n  breedCount\\n  image\\n  title\\n  battleInfo {\\n    banned\\n    __typename\\n  }\\n  auction {\\n    currentPrice\\n    currentPriceUSD\\n    __typename\\n  }\\n  parts {\\n    id\\n    name\\n    class\\n    type\\n    specialGenes\\n    __typename\\n  }\\n  __typename\\n}\\n\"}",
        "method": "POST",
        "mode": "cors"
    }).then(response => {
        try {
            if (response.ok) {
                return response.json();
            }

        } catch (e) { console.log('\x1b[31m%s\x1b[0m','error\n') }
        if (response.ok) {
            return response.json();
        }
    }, networkError => {
        console.log(networkError.message)
    }).then(jsonResponse => {
        try {
            list = jsonResponse.data.axies.results;
        } catch (e) { console.log('error\n') }
    });

}



const check = async (maxPrice) => {

    console.clear();


    for (let item of list) {
        try {
            let price = item.auction.currentPrice / 1000000000000000000;
            price = price.toFixed(3);
            let id = item.id;
            if (price <= maxPrice) {

                let link = `https://marketplace.axieinfinity.com/axie/${id}`;
                let time = Date().slice(16, 24);

                if (price < maxPrice) {

                    if (!result.some(x => x[1] === link)) {

                        result.push([price, link, time]);
                        // window.open('http://cd.textfiles.com/mmplatinum/SOUNDS/WAV/MOREWAV2/ALARM2.WAV', '_blank');
                        await open(`https://marketplace.axieinfinity.com/axie/${id}`);
                        console.log('\u0007');


                        // window.open(link, '_blank');
                        // window.open(`https://axie.zone/finder?search=axie_id:${id}`, '_blank');
                    }
                }

            }




        } catch (e) { }
    }






}






//timer

let timer = setInterval(myTimer, Ttimer);

function myTimer() {



    listUpdater();
    check(price);

    result.forEach((element, index) => {
        console.log(`${index} : price = ${element[0]} \t link = ${element[1]} \t\t time = ${element[2]} \n`);
    });

    console.log('LAST CHECK : ' + Date());
}

function myStop() {
    clearInterval(timer);
}





