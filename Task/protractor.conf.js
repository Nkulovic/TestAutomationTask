exports.config = {
    getPageTimeout: 60000,
    restartBrowserBetweenTests: true,
    allScriptsTimeout: 5000000,
    framework: 'custom',
    directConnect: true,
    specs: 'features/declinedPaymentFeature.feature',
    capabilities: {
      'browserName': 'chrome',
      'chromeOptions' : {
        'args': ['incognito']
      },
      shardTestFiles: false,
      maxInstances: 2
    },
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    baseUrl: 'http://localhost:8000',
    onPrepare: function (config, capabilities) {
      var Actions = require('./actions/actions.js');
      var Pages = require('./pages/pages.js');
      global.actions = new Actions();
      global.pages = new Pages();
      global.numberOfAdults = 0;
      global.numberOfTeens = 0;
      global.numberOfChildren = 0;
      global.numberOfInfants = 0;
      var path = require('path');
      var fs = require('fs');  

      const testResultsJsonLocation = path.join(__dirname, '/results/json/tests_result.json');
      if (fs.existsSync(testResultsJsonLocation)) {
        fs.unlinkSync(testResultsJsonLocation)
      };
      
      const testResultsHtmlLocation = path.join(__dirname, '/results/html/tests_result.html');
      if (fs.existsSync(testResultsHtmlLocation)) {
        fs.unlinkSync(testResultsHtmlLocation)
      };
    },
    
    cucumberOpts: {
      require: ['step_definitions/*', './reports.js'],
      tags: false,
      format: 'pretty',
      strict: true,
      showColors: true,
      profile: false,
      'no-source': true,
    },
  };