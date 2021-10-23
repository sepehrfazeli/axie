const fetch = require("node-fetch");
const siteUrl = "https://explorer.roninchain.com/address/ronin:213073989821f738a7ba3520c3d31a1f9ad31bbd/txs";
const axios = require("axios");
const axiosRetry = require('axios-retry');
const cheerio = require("cheerio");


let result = [];
let price = 0.06;
let Ttimer = 2000;
let trigger = false;
let y = [];
let i = 0;

axiosRetry(axios, {
    retries: 100, // number of retries
    retryDelay: (retryCount) => {
        console.log(`retry attempt: ${retryCount}`);
        return retryCount * 2000; // time interval between retries
    },
    retryCondition: (error) => {
        // if retry condition is not specified, by default idempotent requests are retried
        return error.response.status === 503;
    },
});



const kar = async () => {
    const Fetch1 = async () => {
        let res = await axios
            .get(siteUrl)
            .then(response => {
                if (response.status === 200) {
                    const $ = cheerio.load(response.data);

                    try {
                        $('.pr-20').each(function (i, e) {
                            y[i] = $(this).text();
                        });
                    } catch (e) {
                        console.log('error')
                    }
                    y = y.slice(1);

                } else {
                    Fetch1()
                }
            }).catch((err) => {
                // if (err.response.status !== 200) {
                //     throw new Error(`API call failed with status code: ${err.response.status} after 3 retry attempts`);
                // }
            });
    }

    console.clear();
    console.log('\x1b[32m%s\x1b[0m', '----------------------------------------------------------------------------------');

    await Fetch1().then(async res => {
        y.forEach(async x => {
            let resp = await fetch(`https://explorer.roninchain.com/_next/data/miBI2oD5nKpZrP0yuL83B/tx/${x}.json`, {
                "credentials": "include",
                "headers": {
                    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:93.0) Gecko/20100101 Firefox/93.0",
                    "Accept": "*/*",
                    "Accept-Language": "en-US,en;q=0.5",
                    "Sec-Fetch-Dest": "empty",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Site": "same-origin"
                },
                "referrer": "https://explorer.roninchain.com/address/ronin:213073989821f738a7ba3520c3d31a1f9ad31bbd/txs?p=400",
                "method": "GET",
                "mode": "cors"
            }).then(async response => {
                try {
                    i++;
                    console.log(i);
                    console.log(response.status);

                    if (response.ok) {
                        return await response.json();
                    }
                    if (response.status === 500) {
                        const dbug1 = await response;
                        console.log(dbug1);
                    }


                } catch (e) {
                    console.log('\x1b[32m%s\x1b[0m', 'error')
                }
                // if (response.ok) {
                //     return response.json();
                // }
            }, networkError => {
                console.log(networkError.message);
            }).then(async jsonResponse => {
                try {
                    list = await jsonResponse;
                    console.log('\x1b[31m%s\x1b[0m', list ? 'true' : 'false');
                    let status;
                    try {
                        status = await list.pageProps.decodedAction.action;
                        if (list) console.log(status);
                        // console.log(x);
                    } catch (e) {
                        status = 'Error';
                        console.log(status + `\t${x}`);
                        console.log('\x1b[31m%s\x1b[0m', list ? 'true' : 'false');
                    }
                    // console.log(`${status}`);
                    if (status[1] === 'r') {
                        const id = list.pageProps.decodedAction.assets[0].tokenID;
                        let price;
                        try {
                            price = list.pageProps.decodedCallData.args._startingPrices[0] / 1000000000000000000;
                        } catch (e) {
                            price = 11;
                        }
                        const link = `https://marketplace.axieinfinity.com/axie/${id}/`
                        console.log(`${price}\t${status}\t${link}`);

                        if (price < 0.01) trigger = false;
                        console.log('\x1b[32m%s\x1b[0m', '----------------------------------------------------------------------------------');
                    }
                } catch (e) {
                    console.log('\x1b[31m%s\x1b[0m', list ? 'true' : 'false');
                    console.log('\x1b[32m%s\x1b[0m', '----------------------------------------------------------------------------------');
                }
            });

        });
    });
    if (trigger) {
        console.log('waiting...');
        setTimeout(x => {}, 20000);
        kar();
    }
}



kar();