const fetch = require("node-fetch");
const siteUrl = "https://axie.zone/assets/js/ability_score.js?v=1";
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
        .then(response => {
            if (response.status === 200) {
                const $ = cheerio.load(response.data);
                console.log($.text())
                try {
                    $('.ability_score_c7').each(function (i, e) {
                        y[i] = $(this).text();
                        console.log(y);
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
Fetch1();