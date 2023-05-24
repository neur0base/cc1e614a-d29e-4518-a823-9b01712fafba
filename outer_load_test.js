require('ts-node').register();

const routing = require('./src/routing/index').default;

console.log(routing);

// $ node outer_load_test.js