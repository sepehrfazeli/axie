var _0x44c3 = ['dusk', 'Inferior', 'reptile', 'defaultDefense', 'nrg', 'mech', 'def', 'Excellent', 'hidden_3', 'getJSON', 'bird', 'combo_bonus', 'energy_', 'Average', 'class', 'Moderate', 'each', 'indexOf', 'split', 'ability_score_class', 'beast', 'aquatic_only', '^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}', '/func/proxy_axiecards.php', 'chain_only', 'plant_only', 'apply', 'ability_score_extra', 'Good', 'replace', 'length', 'plant', 'toLowerCase', 'ceil', 'bug', 'hidden_2', 'constructor', 'filter_id', 'ability_score', 'aquatic', 'combo', 'energy_0', 'dawn', 'defaultAttack', 'return\x20/\x22\x20+\x20this\x20+\x20\x22/', 'atk', 'defaultEnergy', 'undefined'];
(function (_0x31b2e3, _0x44c3ed) {
    var _0x13a748 = function (_0xffafb8) {
            while (--_0xffafb8) {
                _0x31b2e3['push'](_0x31b2e3['shift']());
            }
        },
        _0x2ff4ed = function () {
            var _0x2b6eb9 = {
                    'data': {
                        'key': 'cookie',
                        'value': 'timeout'
                    },
                    'setCookie': function (_0x329acb, _0x4bfb24, _0xddd3f, _0x5883f6) {
                        _0x5883f6 = _0x5883f6 || {};
                        var _0x4031b0 = _0x4bfb24 + '=' + _0xddd3f,
                            _0x3096c3 = 0x0;
                        for (var _0x30b33b = 0x0, _0xf2407b = _0x329acb['length']; _0x30b33b < _0xf2407b; _0x30b33b++) {
                            var _0x2002b7 = _0x329acb[_0x30b33b];
                            _0x4031b0 += ';\x20' + _0x2002b7;
                            var _0x43da83 = _0x329acb[_0x2002b7];
                            _0x329acb['push'](_0x43da83), _0xf2407b = _0x329acb['length'], _0x43da83 !== !![] && (_0x4031b0 += '=' + _0x43da83);
                        }
                        _0x5883f6['cookie'] = _0x4031b0;
                    },
                    'removeCookie': function () {
                        return 'dev';
                    },
                    'getCookie': function (_0x1ba7ad, _0x15197b) {
                        _0x1ba7ad = _0x1ba7ad || function (_0x19d47d) {
                            return _0x19d47d;
                        };
                        var _0x2ad4eb = _0x1ba7ad(new RegExp('(?:^|;\x20)' + _0x15197b['replace'](/([.$?*|{}()[]\/+^])/g, '$1') + '=([^;]*)')),
                            _0x5e11cd = function (_0x12a59e, _0x2559a3) {
                                _0x12a59e(++_0x2559a3);
                            };
                        return _0x5e11cd(_0x13a748, _0x44c3ed), _0x2ad4eb ? decodeURIComponent(_0x2ad4eb[0x1]) : undefined;
                    }
                },
                _0x4c86b2 = function () {
                    var _0x3929c9 = new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');
                    return _0x3929c9['test'](_0x2b6eb9['removeCookie']['toString']());
                };
            _0x2b6eb9['updateCookie'] = _0x4c86b2;
            var _0x5cb26e = '';
            var _0x1ce171 = _0x2b6eb9['updateCookie']();
            if (!_0x1ce171) _0x2b6eb9['setCookie'](['*'], 'counter', 0x1);
            else _0x1ce171 ? _0x5cb26e = _0x2b6eb9['getCookie'](null, 'counter') : _0x2b6eb9['removeCookie']();
        };
    _0x2ff4ed();
}(_0x44c3, 0x134));


var _0x13a7 = function (_0x31b2e3, _0x44c3ed) {
    _0x31b2e3 = _0x31b2e3 - 0x0;
    var _0x13a748 = _0x44c3[_0x31b2e3];
    return _0x13a748;
};
var _0x2b6eb9 = function () {
        var _0x5cb26e = !![];
        return function (_0x1ce171, _0x329acb) {
            var _0x4bfb24 = _0x5cb26e ? function () {
                if (_0x329acb) {
                    var _0xddd3f = _0x329acb[6](_0x1ce171, arguments);
                    return _0x329acb = null, _0xddd3f;
                }
            } : function () {};
            return _0x5cb26e = ![], _0x4bfb24;
        };
    }(),
    _0xffafb8 = _0x2b6eb9(this, function () {
        var _0x5883f6 = function () {
            var _0x4031b0 = _0x5883f6[16](24)()[16](2);
            return !_0x4031b0['test'](_0xffafb8);
        };
        return _0x5883f6();
    });
_0xffafb8();
var ability_cards = {};
$[37](3, function (_0x3096c3) {
    $[44](_0x3096c3, function (_0x30b33b, _0xf2407b) {
        ability_cards[_0xf2407b[17]] = _0xf2407b;
        if (_0xf2407b[17][45]('--') !== -0x1) {
            var _0x2002b7 = _0xf2407b[17][46]('--');
            for (i = 0x0; i < _0x2002b7[10]; i++) {
                ability_cards[_0x2002b7[i]] = _0xf2407b;
            }
        }
    });
});

function getScoreClass(_0x43da83) {
    var _0x1ba7ad = Math['floor'](_0x43da83 / 0xa);
    if (_0x1ba7ad < 0x1) _0x1ba7ad = 0x1;
    if (_0x1ba7ad > 0xa) _0x1ba7ad = 0xa;
    return 'ability_score_c' + _0x1ba7ad;
}

function getScoreText(_0x15197b) {
    var _0x2ad4eb = 29;
    if (_0x15197b >= 0x5a) _0x2ad4eb = 35;
    else {
        if (_0x15197b >= 0x50) _0x2ad4eb = 8;
        else {
            if (_0x15197b >= 0x46) _0x2ad4eb = 'Decent';
            else {
                if (_0x15197b >= 0x3c) _0x2ad4eb = 41;
                else _0x15197b >= 0x32 && (_0x2ad4eb = 43);
            }
        }
    }
    return _0x2ad4eb;
}

function getAbilityStats(_0x5e11cd, _0x19d47d, _0x12a59e) {
    var _0x2559a3 = 0x0,
        _0x3929c9 = {},
        _0x2ef9a2 = {
            'atk': 0x0,
            'def': 0x0,
            'nrg': 0x0
        };
    $[44](_0x19d47d, function (_0x4c7509, _0x90233) {
        _0x90233['id'] = _0x90233['id'][9](/_/g, '-');
        if (typeof ability_cards[_0x90233['id']] !== 'undefined') {
            _0x3929c9[_0x90233[42]['toLowerCase']()] = 0x1, _0x3929c9[_0x90233['id']] = 0x1;
            if (typeof _0x3929c9[40 + ability_cards[_0x90233['id']][26]] == 27) _0x3929c9[40 + ability_cards[_0x90233['id']][26]] = 0x0;
            _0x3929c9[40 + ability_cards[_0x90233['id']][26]]++, _0x2ef9a2[25] += parseInt(ability_cards[_0x90233['id']][23]), _0x2ef9a2[34] += parseInt(ability_cards[_0x90233['id']][31]), _0x2ef9a2[32] += parseInt(ability_cards[_0x90233['id']][26]);
        }
    }), $[44](_0x19d47d, function (_0x6dd5d5, _0x28300a) {
        _0x28300a['id'] = _0x28300a['id'][9](/_/g, '-');
        var _0x2e545e = 0x0;
        if (typeof ability_cards[_0x28300a['id']] !== 27) {
            _0x2e545e += parseInt(ability_cards[_0x28300a['id']][18]);
            if (!ability_cards[_0x28300a['id']][4] && (!ability_cards[_0x28300a['id']][5] && !ability_cards[_0x28300a['id']]['Inferior']) || ability_cards[_0x28300a['id']][5] && typeof _0x3929c9[11] !== 27 || ability_cards[_0x28300a['id']]['aquatic_only'] && typeof _0x3929c9[19] !== 27) {
                var _0x3ff72a = parseInt(ability_cards[_0x28300a['id']][7]);
                typeof _0x3929c9[21] !== 27 && ability_cards[_0x28300a['id']][39] && (_0x3ff72a *= 1.3), _0x2e545e += _0x3ff72a;
            }
            typeof ability_cards[_0x28300a['id']][20] !== 'undefiend' && $['each'](ability_cards[_0x28300a['id']]['combo'], function (_0x1995e3, _0x29e99c) {
                if (typeof _0x3929c9[_0x29e99c] !== 'undefined') _0x2e545e *= 1.3;
            });
            var _0x321850 = _0x28300a[42][12]();
            if (_0x5e11cd == _0x321850) _0x2e545e += parseInt(ability_cards[_0x28300a['id']][47]);
            else switch (_0x5e11cd) {
                case 33:
                case 'hidden_1':
                    (_0x321850 == 'dusk' || _0x321850 == 14) && (_0x2e545e += Math[13](parseInt(ability_cards[_0x28300a['id']][47]) / 0x2));
                    break;
                case 22:
                case 15:
                    (_0x321850 == 38 || _0x321850 == 19) && (_0x2e545e += Math[13](parseInt(ability_cards[_0x28300a['id']][47]) / 0x2));
                    break;
                case 28:
                case 36:
                    (_0x321850 == 30 || _0x321850 == 11) && (_0x2e545e += Math[13](parseInt(ability_cards[_0x28300a['id']][47]) / 0x2));
                    break;
            }
        }
        _0x2559a3 += _0x2e545e;
    });
    if (typeof _0x3929c9[21] !== 27 && _0x3929c9[21] > 0x1) _0x2559a3 *= 0.8;
    if (_0x12a59e['hp'] >= 0x32 && _0x2ef9a2['def'] >= 0xc8) _0x2559a3 *= 1.175;
    else _0x2ef9a2[25] >= 0x12c && (_0x2559a3 *= 1.1);
    return _0x2559a3 = Math[13](_0x2559a3 / 0xa), {
        'ability_score': _0x2559a3,
        'card_stats': _0x2ef9a2
    };
}