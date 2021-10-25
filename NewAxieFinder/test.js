const fetch = require("node-fetch");

const kar = async () => {


    fetch('https://api.roninchain.com/rpc', {
        method: 'POST',
        headers: {
            'authority': 'api.roninchain.com',
            'sec-ch-ua': '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
            'accept': 'application/json',
            'dnt': '1',
            'sec-ch-ua-mobile': '?0',
            'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36',
            'content-type': 'application/json',
            'origin': 'https://marketplace.axieinfinity.com',
            'sec-fetch-site': 'cross-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'referer': 'https://marketplace.axieinfinity.com/',
            'accept-language': 'en-US,en;q=0.9,fa;q=0.8,ur;q=0.7,ps;q=0.6',
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
            "id": 7,
            "jsonrpc": "2.0",
            "params": [{
                "to": "0xc99a6a985ed2cac1ef41640596c5a5f9f4e19ef5",
                "data": "0x70a0823100000000000000000000000058058c5d68fdbf6c81f14ce4af1fc61e364edbf8",
                "from": "0x58058c5d68fdbf6c81f14ce4af1fc61e364edbf8"
            }, "latest"],
            "method": "eth_call"
        })
    });

    fetch('https://api.roninchain.com/rpc', {
        method: 'POST',
        headers: {
            'authority': 'api.roninchain.com',
            'sec-ch-ua': '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
            'accept': 'application/json',
            'dnt': '1',
            'sec-ch-ua-mobile': '?0',
            'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36',
            'content-type': 'application/json',
            'origin': 'https://marketplace.axieinfinity.com',
            'sec-fetch-site': 'cross-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'referer': 'https://marketplace.axieinfinity.com/',
            'accept-language': 'en-US,en;q=0.9,fa;q=0.8,ur;q=0.7,ps;q=0.6',
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
            "id": 8,
            "jsonrpc": "2.0",
            "params": [{
                "to": "0x213073989821f738a7ba3520c3d31a1f9ad31bbd",
                "data": "0x4d51bfc40000000000000000000000001fdddf53fd541e0399c97908da69e346bfd61fb7000000000000000000000000c99a6a985ed2cac1ef41640596c5a5f9f4e19ef500000000000000000000000000000000000000000000000000750e0bbe2a404100000000000000000000000000000000000000000000000000000000000569c13c61757d432b0d91bd6a77076e442cabc5468439aa0ace23998c7dc5c729f93c",
                "from": "0x58058c5d68fdbf6c81f14ce4af1fc61e364edbf8"
            }],
            "method": "eth_estimateGas"
        })
    });
}
kar();