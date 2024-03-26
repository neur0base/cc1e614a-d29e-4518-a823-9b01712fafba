const merge = require('merge');
const ts_preset = require('react-native/jest-preset');
const puppeteer_preset = require('jest-puppeteer/jest-preset');

module.exports = merge.recursive(ts_preset, puppeteer_preset);

