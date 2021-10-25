const _0x101022 = _0x425e;
(function (_0x22be0f, _0x2ac491) {
    const _0x147fd2 = _0x425e,
        _0x4c9f08 = _0x22be0f();
    while (!![]) {
        try {
            const _0x4a5119 = parseInt(_0x147fd2(0x1bb)) / 0x1 + -parseInt(_0x147fd2(0x1b1)) / 0x2 * (parseInt(_0x147fd2(0x198)) / 0x3) + -parseInt(_0x147fd2(0x1bd)) / 0x4 + -parseInt(_0x147fd2(0x1b8)) / 0x5 * (parseInt(_0x147fd2(0x1ae)) / 0x6) + parseInt(_0x147fd2(0x199)) / 0x7 * (-parseInt(_0x147fd2(0x1a9)) / 0x8) + -parseInt(_0x147fd2(0x1b0)) / 0x9 + parseInt(_0x147fd2(0x1c7)) / 0xa;
            if (_0x4a5119 === _0x2ac491) break;
            else _0x4c9f08['push'](_0x4c9f08['shift']());
        } catch (_0x4987d8) {
            _0x4c9f08['push'](_0x4c9f08['shift']());
        }
    }
}(_0x4c4c, 0x5432d));
const fetch = require('node-fetch'),
    siteUrl = _0x101022(0x1ca),
    axios = require(_0x101022(0x1c6)),
    axiosRetry = require('axios-retry'),
    cheerio = require(_0x101022(0x1c9));

function _0x425e(_0x1e6fe3, _0x59898d) {
    const _0x4c4c37 = _0x4c4c();
    return _0x425e = function (_0x425e98, _0x16e34a) {
        _0x425e98 = _0x425e98 - 0x197;
        let _0x2481be = _0x4c4c37[_0x425e98];
        return _0x2481be;
    }, _0x425e(_0x1e6fe3, _0x59898d);
}
let result = [],
    price = 0.06,
    Ttimer = 0x7d0,
    trigger = ![],
    y = [],
    i = 0x0;

function _0x4c4c() {
    const _0x179883 = ['assets', 'log', 'forEach', 'tokenID', 'https://explorer.roninchain.com/_next/data/miBI2oD5nKpZrP0yuL83B/tx/', 'load', 'GET', 'Error', 'https://marketplace.axieinfinity.com/axie/', 'slice', 'pageProps', '----------------------------------------------------------------------------------', 'text', 'false', '8LDKMkI', '_startingPrices', 'true', 'each', 'include', '2683482pQbThj', 'empty', '802485enOwjS', '1126HqxyKx', '\x1b[32m%s\x1b[0m', 'message', 'decodedCallData', '.pr-20', '\x1b[31m%s\x1b[0m', 'decodedAction', '5VeoMOu', 'status', 'error', '415747DCFraU', 'en-US,en;q=0.5', '916504DulTus', 'then', 'clear', '*/*', 'get', 'data', 'retry\x20attempt:\x20', 'https://explorer.roninchain.com/address/ronin:213073989821f738a7ba3520c3d31a1f9ad31bbd/txs?p=400', 'catch', 'axios', '8599440KruHdQ', 'Mozilla/5.0\x20(Macintosh;\x20Intel\x20Mac\x20OS\x20X\x2010.15;\x20rv:93.0)\x20Gecko/20100101\x20Firefox/93.0', 'cheerio', 'https://explorer.roninchain.com/address/ronin:213073989821f738a7ba3520c3d31a1f9ad31bbd/txs', 'cors', 'action', '201gvVcOK', '892885wTMEge', 'args'];
    _0x4c4c = function () {
        return _0x179883;
    };
    return _0x4c4c();
}
axiosRetry(axios, {
    'retries': 0x64,
    'retryDelay': _0x21cea3 => {
        const _0x557d8d = _0x101022;
        return console[_0x557d8d(0x19c)](_0x557d8d(0x1c3) + _0x21cea3), _0x21cea3 * 0x7d0;
    },
    'retryCondition': _0x1026e5 => {
        return _0x1026e5['response']['status'] === 0x1f7;
    }
});
const kar = async () => {
    const _0x50a6a4 = _0x101022,
        _0x26ef44 = async () => {
            const _0x189b39 = _0x425e;
            let _0x55019e = await axios[_0x189b39(0x1c1)](siteUrl)[_0x189b39(0x1be)](_0x1f2b23 => {
                const _0x381c91 = _0x189b39;
                if (_0x1f2b23[_0x381c91(0x1b9)] === 0xc8) {
                    const _0x3f0b55 = cheerio[_0x381c91(0x1a0)](_0x1f2b23[_0x381c91(0x1c2)]);
                    try {
                        _0x3f0b55(_0x381c91(0x1b5))[_0x381c91(0x1ac)](function (_0x1f1030, _0x212878) {
                            const _0x2d360c = _0x381c91;
                            y[_0x1f1030] = _0x3f0b55(this)[_0x2d360c(0x1a7)]();
                        });
                    } catch (_0x5ef47a) {
                        console[_0x381c91(0x19c)](_0x381c91(0x1ba));
                    }
                    y = y[_0x381c91(0x1a4)](0x1);
                } else _0x26ef44();
            })[_0x189b39(0x1c5)](_0x19dd18 => {});
        };
    console[_0x50a6a4(0x1bf)](), console[_0x50a6a4(0x19c)](_0x50a6a4(0x1b2), _0x50a6a4(0x1a6)), await _0x26ef44()['then'](async _0x23f267 => {
        const _0x47b012 = _0x50a6a4;
        y[_0x47b012(0x19d)](async _0x429a4d => {
            const _0x57fc08 = _0x47b012;
            let _0x59079a = await fetch(_0x57fc08(0x19f) + _0x429a4d + '.json', {
                'credentials': _0x57fc08(0x1ad),
                'headers': {
                    'User-Agent': _0x57fc08(0x1c8),
                    'Accept': _0x57fc08(0x1c0),
                    'Accept-Language': _0x57fc08(0x1bc),
                    'Sec-Fetch-Dest': _0x57fc08(0x1af),
                    'Sec-Fetch-Mode': _0x57fc08(0x1cb),
                    'Sec-Fetch-Site': 'same-origin'
                },
                'referrer': _0x57fc08(0x1c4),
                'method': _0x57fc08(0x1a1),
                'mode': _0x57fc08(0x1cb)
            })['then'](async _0x56b69d => {
                const _0x432929 = _0x57fc08;
                try {
                    i++, console[_0x432929(0x19c)](i), console['log'](_0x56b69d[_0x432929(0x1b9)]);
                    if (_0x56b69d['ok']) return await _0x56b69d['json']();
                    if (_0x56b69d[_0x432929(0x1b9)] === 0x1f4) {
                        const _0x4934e6 = await _0x56b69d;
                        console['log'](_0x4934e6);
                    }
                } catch (_0x28f42f) {
                    console[_0x432929(0x19c)](_0x432929(0x1b2), 'error');
                }
            }, _0x415146 => {
                const _0x418675 = _0x57fc08;
                console[_0x418675(0x19c)](_0x415146[_0x418675(0x1b3)]);
            })[_0x57fc08(0x1be)](async _0x4f786d => {
                const _0xbcfe74 = _0x57fc08;
                try {
                    list = await _0x4f786d, console[_0xbcfe74(0x19c)](_0xbcfe74(0x1b6), list ? _0xbcfe74(0x1ab) : _0xbcfe74(0x1a8));
                    let _0x2f0559;
                    try {
                        _0x2f0559 = await list[_0xbcfe74(0x1a5)][_0xbcfe74(0x1b7)][_0xbcfe74(0x197)];
                        if (list) console['log'](_0x2f0559);
                    } catch (_0x13de38) {
                        _0x2f0559 = _0xbcfe74(0x1a2), console[_0xbcfe74(0x19c)](_0x2f0559 + ('\x09' + _0x429a4d)), console[_0xbcfe74(0x19c)](_0xbcfe74(0x1b6), list ? _0xbcfe74(0x1ab) : _0xbcfe74(0x1a8));
                    }
                    if (_0x2f0559[0x1] === 'r') {
                        const _0x4afa39 = list[_0xbcfe74(0x1a5)][_0xbcfe74(0x1b7)][_0xbcfe74(0x19b)][0x0][_0xbcfe74(0x19e)];
                        let _0x940f96;
                        try {
                            _0x940f96 = list[_0xbcfe74(0x1a5)][_0xbcfe74(0x1b4)][_0xbcfe74(0x19a)][_0xbcfe74(0x1aa)][0x0] / 0xde0b6b3a7640000;
                        } catch (_0x254bec) {
                            _0x940f96 = 0xb;
                        }
                        const _0x267221 = _0xbcfe74(0x1a3) + _0x4afa39 + '/';
                        console[_0xbcfe74(0x19c)](_0x940f96 + '\x09' + _0x2f0559 + '\x09' + _0x267221);
                        if (_0x940f96 < 0.01) trigger = ![];
                        console['log'](_0xbcfe74(0x1b2), '----------------------------------------------------------------------------------');
                    }
                } catch (_0x47f9c4) {
                    console['log']('\x1b[31m%s\x1b[0m', list ? _0xbcfe74(0x1ab) : _0xbcfe74(0x1a8)), console[_0xbcfe74(0x19c)]('\x1b[32m%s\x1b[0m', _0xbcfe74(0x1a6));
                }
            });
        });
    }), trigger && (console[_0x50a6a4(0x19c)]('waiting...'), setTimeout(_0xce5a62 => {}, 0x4e20), kar());
};
kar();