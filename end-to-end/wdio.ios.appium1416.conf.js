var path = require('path');
var uuid = require('node-uuid');
var chai = require('chai');
var argv = Object.assign(require('minimist')(process.argv));

module.exports.config = {
     specs: [
        './test.js'
    ],

    capabilities: [{  
        app: '',
        browserName: 'iOS',
        deviceName: ' iOS',
        platformName: 'iOS',
        platformVersion: '9.3.2',
        udid: argv.udid,
        bundleId: 'org.reactjs.native.example.PerfectoExampleSoluto',
        newCommandTimeout: 300,
        autoLaunch: false,
        processArguments: `${uuid.v4()}`,
        noReset: true
    }],

    port: 4723,

    maxInstances: 1,

    sync: true,

    logLevel: 'silent',

    coloredLogs: true,

    screenshotPath: 'screenshots/',

    baseUrl: 'http://localhost',

    waitforTimeout: 30000,

    connectionRetryTimeout: 900000,

    connectionRetryCount: 0,

    framework: 'mocha',

    mochaOpts: {
        ui: 'bdd',
        timeout: 3000000
    },

    reporters: ['dot'],

    before: function (capabilities, specs) {
        global.expect = chai.expect;
        console.log("running test on iOS")
        const deviceId = capabilities.processArguments;
        console.log("using device id from processArguments capability - " + deviceId);
        browser.testDeviceId = deviceId;        
    }
};
