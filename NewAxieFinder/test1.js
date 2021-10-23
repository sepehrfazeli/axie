const fetch = require("node-fetch");
const siteUrl = "https://explorer.roninchain.com/_next/data/miBI2oD5nKpZrP0yuL83B/tx/0x5578060bb4834509c27b90ea605c324fe8487553ac492effcbe2dbd11b77c769.json";
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

const Fetch1 = async () => {
    let res = await axios
        .get(siteUrl)
        .then(async response => {
            if (response.status === 200) {
                try {
                    list = await response.data;
                    console.log(list)
                    console.log('\x1b[31m%s\x1b[0m', list ? 'true' : 'false');
                    let status;
                    try {
                        status = await list.pageProps.decodedAction.action;
                        if (list) console.log(status);
                        // console.log(x);
                    } catch (e) {
                        status = 'Error';
                        // console.log(status + `\t${x}`);
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

            } else {
                console.log(response.status)
            }
        }).catch((err) => {
            // if (err.response.status !== 200) {
            //     throw new Error(`API call failed with status code: ${err.response.status} after 3 retry attempts`);
            // }
        });
}

Fetch1();