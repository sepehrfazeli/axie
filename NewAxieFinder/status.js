let list, parts, astat;
// const id = '2668858';
const fetch = require("node-fetch");
const axies = [ //back-mouth-horn-tail
    [ //axie1 speed = 61
        ['back-pigeon-post'],
        ['mouth-doubletalk', 'mouth-little-owl'],
        ['horn-eggshell', 'horn-kestrel'],
        ['tail-swallow', 'tail-post-fight']
    ],
    [ //axie2
        ['back-anemone'],
        ['mouth-lam', 'mouth-risky-fish', 'mouth-piranha'],
        ['horn-anemone'],
        ['tail-nimo']
    ],
    [ //axie3 //speed < 32
        ['back-pumpkin', 'back-watering-can'],
        ['mouth-serious'],
        ['horn-leaf-bug'],
        ['tail-yam', 'tail-carrot', 'tail-cattail']
    ],
    [ //axie4
        ['back-blue-moon'],
        ['mouth-piranha'],
        ['horn-oranda'],
        ['tail-koi']
    ],
    [ //axie5 //speed = 59
        ['back-pigeon-post'],
        ['mouth-doubletalk'],
        ['horn-eggshell', 'horn-kestrel'],
        ['tail-hare']
    ],
    [ //axie6
        ['back-bone-sail'],
        ['mouth-cute-bunny'],
        ['horn-parasite'],
        ['tail-nimo']
    ],
    [ //axie7
        ['back-sandal', 'back-garish-worm'],
        ['mouth-pincer'],
        ['horn-parasite'],
        ['tail-thorny-caterpillar', 'tail-wall-gecko', 'tail-gila', 'tail-fish-snack']
    ],
    [ //axie8 //speed>40
        ['back-snail-shell'],
        ['mouth-tiny-turtle'],
        ['horn-lagging'],
        ['tail-thorny-caterpillar']
    ],
    [ //axie9 //helth>55
        ['back-tri-spikes'],
        ['mouth-kotaro'],
        ['horn-incisor'],
        ['tail-thorny-caterpillar']
    ],
    [ //axie10 //speed>44
        ['back-croc'],
        ['mouth-tiny-turtle'],
        ['horn-cuckoo'],
        ['tail-thorny-caterpillar']
    ],
    [ //axie11 //helth>52
        ['back-bone-sail'],
        ['mouth-razor-bite'],
        ['horn-scaly-spear'],
        ['tail-rice']
    ],

];




const fetching = async (id) => {
    let res = await fetch("https://axieinfinity.com/graphql-server-v2/graphql", {
        "credentials": "omit",
        "headers": {
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:93.0) Gecko/20100101 Firefox/93.0",
            "Accept": "*/*",
            "Accept-Language": "en-US,en;q=0.5",
            "Content-Type": "application/json",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Site": "cross-site"
        },
        "referrer": "https://axie.zone/",
        "body": `{\"operationName\":\"GetAxieDetail\",\"query\":\"query GetAxieDetail($axieId: ID!) {\\naxie(axieId: $axieId) {\\n...AxieDetail\\n__typename\\n}\\n}\\nfragment AxieDetail on Axie {\\nid\\nimage\\nclass\\nname\\ngenes\\nbirthDate\\nbodyShape\\nsireId\\nsireClass\\nmatronId\\nmatronClass\\nstage\\ntitle\\nbreedCount\\nparts {\\n...AxiePart\\n__typename\\n}\\nauction {\\n  currentPrice\\n  currentPriceUSD\\n  __typename\\n}\\nstats {\\n...AxieStats\\n__typename\\n}\\nchildren {\\nid\\nname\\nclass\\nimage\\ntitle\\nstage\\n__typename\\n}\\n__typename\\n}\\n\\nfragment AxiePart on AxiePart {\\nid\\nname\\nclass\\ntype\\nspecialGenes\\nstage\\n__typename\\n}\\nfragment AxieStats on AxieStats {\\nhp\\nspeed\\nskill\\nmorale\\n__typename\\n}\",\"variables\":{\"axieId\":\"${id}\"}}`,
        "method": "POST",
        "mode": "cors"
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
            list = jsonResponse.data;

            parts = list.axie.parts; //back-mouth-horn-tail
            astat = list.axie.stats;
            // console.log(list.axie.stage)
        } catch (e) {
            console.log('error\n')
        }
    });

}






const goodAxie = async (parts, stats) => {
    parts = parts.slice(2);

    const axieCarts = []; //back-mouth-horn-tail

    if (parts) {
        parts.forEach(x => {
            axieCarts.push(x.id);
        });
    }

    const myFunction = (x, i) => {
        let point = 0;
        if (x[0].some(x => x === axieCarts[0])) point++
        if (x[1].some(x => x === axieCarts[1])) point++
        if (x[2].some(x => x === axieCarts[2])) point++
        if (x[3].some(x => x === axieCarts[3])) point++




        // console.log(`\n\taxie${i+1}\n`);
        if (point === 3) {
            // console.log(`\n\taxie${i+1}\n`);
            switch (i + 1) {
                case 1:
                    return stats.speed === 61;
                    break;
                case 3:
                    return stats.speed < 32;
                    break;
                case 5:
                    return stats.speed === 59;
                    break;
                case 8:
                    return stats.speed > 40;
                    break;
                case 9:
                    return stats.hp > 55;
                    break;
                case 10:
                    return stats.speed > 42;
                    break;
                case 11:
                    return stats.hp > 50;
                    break;

                default:
                    return true;
                    break;
            }
        }


    }

    return axies.some(myFunction);

};





const status = async (id) => {
    return await fetching(id).then(async x => {
        return await goodAxie(parts, astat);
        // console.log(ans);
    })
    // console.log(ans)
};
// status(7849234).then(r =>{
//     console.log(r)
// })

module.exports = { status }

