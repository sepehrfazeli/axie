// const fetch = require("node-fetch");
// let res;
// fetch("https://axieinfinity.com/graphql-server-v2/graphql", {
//     "headers": {
//         "accept": "*/*",
//         "accept-language": "en-US,en;q=0.9,fa;q=0.8,ur;q=0.7,ps;q=0.6",
//         "content-type": "application/json",
//         "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
//         "sec-ch-ua-mobile": "?0",
//         "sec-fetch-dest": "empty",
//         "sec-fetch-mode": "cors",
//         "sec-fetch-site": "cross-site"
//     },
//     "referrer": "https://axie.zone/",
//     "referrerPolicy": "strict-origin-when-cross-origin",
//     "body": "{\"operationName\":\"GetAxieBriefList\",\"query\":\"query GetAxieBriefList($auctionType: AuctionType, $criteria: AxieSearchCriteria, $from: Int, $sort: SortBy, $size: Int, $owner: String) {\\naxies(auctionType: $auctionType, criteria: $criteria, from: $from, sort: $sort, size: $size, owner: $owner) {\\n  total\\n  results {\\n    ...AxieBrief\\n    __typename\\n  }\\n  __typename\\n}\\n      }\\n\\n      fragment AxieBrief on Axie {\\nid\\nname\\nstage\\nclass\\nbreedCount\\nimage\\ntitle\\ngenes\\nbattleInfo {\\n  banned\\n  __typename\\n}\\nauction {\\n  currentPrice\\n  currentPriceUSD\\n  __typename\\n}\\nstats {\\n  ...AxieStats\\n  __typename\\n}\\nparts {\\n  id\\n  name\\n  class\\n  type\\n  specialGenes\\n  __typename\\n}\\n__typename\\n      }\\n    \\n      fragment AxieStats on AxieStats {\\n       hp\\n       speed\\n       skill\\n       morale\\n__typename\\n      }\",\"variables\":{\"auctionType\":\"Sale\",\"criteria\":{\"classes\":[],\"parts\":[],\"hp\":null,\"speed\":null,\"skill\":null,\"morale\":null,\"breedCount\":null,\"pureness\":[],\"numMystic\":[],\"title\":null,\"region\":null,\"stages\":[3,4]},\"from\":0,\"size\":12,\"sort\":\"PriceAsc\",\"owner\":null}}",
//     "method": "POST",
//     "mode": "cors",
//     "credentials": "omit"
// }).then(response => {
//     if (response.ok) {
//         return response.json();
//     }
//     throw new Error('Request failed!');
// }, networkError => {
//     console.log(networkError.message)
// }).then(jsonResponse => {
//     // res = jsonResponse
//     console.log(jsonResponse);
//     // jsonResponse.data.axies.results.forEach(x => {
//     //     console.log(`
//     //     price = ${x.auction.currentPriceUSD},
//     //     helth = ${x.stats.hp},
//     //     speed = ${x.stats.speed},
//     //     morale = ${x.stats.morale},
//     //     link = ${`https://marketplace.axieinfinity.com/axie/${x.id}`},
//     //     `)
//     // })
// })







const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName : () => {
      return this.firstName + " " + this.lastName;
    }
  };