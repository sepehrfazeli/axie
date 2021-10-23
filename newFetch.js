
//initialize

let result = [];
let backup = [];
let trigger = true;
let s = 0;
let price = 120;
let Ttimer = 4000;
let list = [];

const listUpdater = async () => {
    await fetch("https://axieinfinity.com/graphql-server-v2/graphql", {
        "credentials": "include",
        "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; rv:78.0) Gecko/20100101 Firefox/78.0",
            "Accept": "*/*",
            "Accept-Language": "en-US,en;q=0.5",
            "content-type": "application/json"
        },
        "referrer": "https://marketplace.axieinfinity.com/",
        "body": "{\"operationName\":\"GetAxieLatest\",\"variables\":{\"from\":0,\"size\":10,\"sort\":\"Latest\",\"auctionType\":\"Sale\"},\"query\":\"query GetAxieLatest($auctionType: AuctionType, $criteria: AxieSearchCriteria, $from: Int, $sort: SortBy, $size: Int, $owner: String) {\\n  axies(auctionType: $auctionType, criteria: $criteria, from: $from, sort: $sort, size: $size, owner: $owner) {\\n    total\\n    results {\\n      ...AxieRowData\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment AxieRowData on Axie {\\n  id\\n  image\\n  class\\n  name\\n  genes\\n  owner\\n  class\\n  stage\\n  title\\n  breedCount\\n  level\\n  parts {\\n    ...AxiePart\\n    __typename\\n  }\\n  stats {\\n    ...AxieStats\\n    __typename\\n  }\\n  auction {\\n    ...AxieAuction\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment AxiePart on AxiePart {\\n  id\\n  name\\n  class\\n  type\\n  specialGenes\\n  stage\\n  abilities {\\n    ...AxieCardAbility\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment AxieCardAbility on AxieCardAbility {\\n  id\\n  name\\n  attack\\n  defense\\n  energy\\n  description\\n  backgroundUrl\\n  effectIconUrl\\n  __typename\\n}\\n\\nfragment AxieStats on AxieStats {\\n  hp\\n  speed\\n  skill\\n  morale\\n  __typename\\n}\\n\\nfragment AxieAuction on Auction {\\n  startingPrice\\n  endingPrice\\n  startingTimestamp\\n  endingTimestamp\\n  duration\\n  timeLeft\\n  currentPrice\\n  currentPriceUSD\\n  suggestedPrice\\n  seller\\n  listingIndex\\n  state\\n  __typename\\n}\\n\"}",
        "method": "POST",
        "mode": "cors"
    }).then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Request failed!');
    }, networkError => {
        console.log(networkError.message)
    }).then(jsonResponse => {
        list = jsonResponse.data.axies.results;
    });

}
const check = (maxPrice) => {

    console.clear();

    let a = [];
    for (let item of list) {
        try {
            let price = item.auction.currentPriceUSD;
            if (price <= maxPrice) {
                let price = item.auction.currentPriceUSD;
                let id = item.id;
                let speed = item.id;
                let health = item.id;
                let parts = item
                let link = `https://marketplace.axieinfinity.com/axie/${id}`;
                let time = Date().slice(16, 24);

                if (price < maxPrice) {

                    if (!result.some(x => x[1] === link)) {

                        result.push([price, link, time]);
                        // window.open('http://cd.textfiles.com/mmplatinum/SOUNDS/WAV/MOREWAV2/ALARM2.WAV', '_blank');


                        window.open(link, '_blank');
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

    if (result.length > s && trigger) {
        trigger = false;
        // window.open('http://cd.textfiles.com/mmplatinum/SOUNDS/WAV/MOREWAV2/ALARM2.WAV', '_blank');
    }

    result.forEach((element, index) => {
        console.log(`${index} : price = ${element[0]} \n link = ${element[1]} \n time = ${element[2]} `);
    });

    console.log('LAST CHECK : ' + Date());
}

function myStop() {
    clearInterval(timer);
}


const alter = (Price) => {
    price = Price;
    backup = result;
    result = [];
}
//Ex : alter(59,175)
//Ex : alter(52,300)

const Trigger = () => {
    trigger = true
    s = result.length
}
