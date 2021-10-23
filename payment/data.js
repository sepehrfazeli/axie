fetch("https://api.roninchain.com/rpc", {
  "headers": {
    "accept": "application/json",
    "accept-language": "en-US,en;q=0.9,fa;q=0.8,ur;q=0.7,ps;q=0.6",
    "content-type": "application/json",
    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
    "sec-ch-ua-mobile": "?0",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "cross-site"
  },
  "referrer": "https://marketplace.axieinfinity.com/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "{\"id\":12,\"jsonrpc\":\"2.0\",\"params\":[{\"to\":\"0x213073989821f738a7ba3520c3d31a1f9ad31bbd\",
  \"data\":\"0x4d51bfc400000000000000000000000097875001cb2b841c43988b824964de6f8ad8da00000000000000000000000000c99a6a985ed2cac1ef41640596c5a5f9f4e19ef500000000000000000000000000000000000000000000000003311fc80a57000000000000000000000000000000000000000000000000000000000000000a40549570e67b84039c87c40cdf13ddb1236b34e9e9bc8d9560f06288d97c5244fb57\",
  \"from\":\"0x43bc1e118476f90aed1d366f06e46fb7f00d89e3\"}],\"method\":\"eth_estimateGas\"}",
  "method": "POST",
  "mode": "cors",
  "credentials": "omit"
});


{
	"id": 7,
	"jsonrpc": "2.0",
	"method": "eth_call",
	"params": [
		{
			"data": "0x70a082310000000000000000000000009ffe5245a0fc42bcb2e5a321399aaf9c1314c5ac",
			"from": "0x9ffe5245a0fc42bcb2e5a321399aaf9c1314c5ac",
			"to": "0xc99a6a985ed2cac1ef41640596c5a5f9f4e19ef5"
		},
		"latest"
	]
}


{
    "id": "1993383",
    "image": "https://storage.googleapis.com/axie-cdn/avatars/egg/reptile-reptile-egg-full-transparent.png",
    "class": null,
    "name": "Axie #1993383",
    "genes": "0x0",
    "owner": "0x64ef4beb737e908e1301eee6100154339ccf36c1",
    "stage": 1,
    "title": null,
    "breedCount": 0,
    "level": 1,
    "parts": [],
    "stats": {
      "hp": 0,
      "speed": 0,
      "skill": 0,
      "morale": 0,
      "__typename": "AxieStats"
    },
    "auction": {
      "startingPrice": "167000000000000000",
      "endingPrice": "167000000000000000",
      "startingTimestamp": "1626074166",
      "endingTimestamp": "1626160566",
      "duration": "86400",
      "timeLeft": "86369",
      "currentPrice": "167000000000000000",
      "currentPriceUSD": "360.54",
      "suggestedPrice": "167000000000000000",
      "seller": "0x64ef4beb737e908e1301eee6100154339ccf36c1",
      "listingIndex": 829442,
      "state": "63363582151620692856392484063041527716289080997139851173965281990456731161862",
      "__typename": "Auction"
    },
    "__typename": "Axie"
  }



  await fetch("https://api.roninchain.com/rpc", {
    "credentials": "omit",
    "headers": {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; rv:78.0) Gecko/20100101 Firefox/78.0",
        "Accept": "application/json",
        "Accept-Language": "en-US,en;q=0.5",
        "content-type": "application/json",
        "Pragma": "no-cache",
        "Cache-Control": "no-cache"
    },
    "referrer": "https://marketplace.axieinfinity.com/",
    "body": "{\"id\":7,\"jsonrpc\":\"2.0\",\"params\":[{\"to\":\"0xc99a6a985ed2cac1ef41640596c5a5f9f4e19ef5\",\"data\":\"0x70a082310000000000000000000000009ffe5245a0fc42bcb2e5a321399aaf9c1314c5ac\",\"from\":\"0x9ffe5245a0fc42bcb2e5a321399aaf9c1314c5ac\"},\"latest\"],\"method\":\"eth_call\"}",
    "method": "POST",
    "mode": "cors"
});