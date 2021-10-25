const fetch = require("node-fetch");
const siteUrl = "https://explorer.roninchain.com/address/ronin:213073989821f738a7ba3520c3d31a1f9ad31bbd/txs";
const axios = require("axios");
const axiosRetry = require('axios-retry');
const cheerio = require("cheerio");
const open = require('open');


let result = [];
let maxPrice = 0.027;
let Ttimer = 2000;
let trigger = true;
let y = [];
let i = 0;

axiosRetry(axios, {
    retries: 2, // number of retries
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
            let resp = await axios
                .get(`https://explorer.roninchain.com/_next/data/lNQyeI8jVUhj9VU9VhQ-a/tx/${x}.json`)
                .then(async response => {
                    if (response.status === 200) {
                        // i++;
                        // console.log(i);
                        try {
                            list = await response.data;
                            // console.log(list)
                            // console.log('\x1b[31m%s\x1b[0m', list ? 'true' : 'false');
                            let status;
                            try {
                                status = await list.pageProps.decodedAction.action;
                                // if (list) console.log(status);
                                // console.log(x);
                            } catch (e) {
                                console.log('\x1b[31m%s\x1b[0m', list ? 'true' : 'false');
                                status = 'Error';
                                console.log(response.data)
                                console.log(e + `\t${x}`);
                                // console.log('\x1b[31m%s\x1b[0m', list ? 'true' : 'false');
                            }
                            // console.log(`${status}`);
                            if (status[1] === 'r') {
                                const id = list.pageProps.decodedAction.assets[0].tokenID;
                                let price;
                                try {
                                    price = list.pageProps.decodedCallData.args._startingPrices[0] / 1000000000000000000;
                                    price = price.toFixed(4)
                                } catch (e) {
                                    price = 11;
                                }
                                const link = `https://marketplace.axieinfinity.com/axie/${id}/`
                                console.log(`${price}\t${status}\t${link}`);

                                if (price <= maxPrice) {
                                    // trigger = false;
                                    if (!result.some(x => x === id)) {
                                        result.push(id);
                                        await open(link)
                                        console.log('\u0007');
                                    }
                                }
                                console.log('\x1b[32m%s\x1b[0m', '----------------------------------------------------------------------------------');
                            }
                        } catch (e) {
                            console.log('\x1b[32m%s\x1b[0m', '----------------------------------------------------------------------------------');
                        }

                    } else {
                        console.log(response.status)
                    }
                }).catch((err) => {
                    // if (err.response.status !== 200) {
                    //     throw new Error(`API call failed with status code: ${err.response.status} after 3 retry attempts`);
                    // }
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