const fetch = require("node-fetch");
const worth = require('./status');

const kar = async () => {
    const test = await worth.status(7849234);
    console.log(test);
    if (test) {
        console.log('yey');
    }

}
kar()