var reporter = require('cucumber-html-reporter');

var path = require("path")
var Cucumber = require('cucumber')
var JsonFormatter = Cucumber.Listener.JsonFormatter()
var fs = require('fs')


module.exports = function createReports () {

  JsonFormatter.log = function (resultString) {

    const jsonFileLocation = path.join(__dirname, './results/json/tests_result.json')

    if (fs.existsSync(jsonFileLocation)) {
      const allResults = JSON.parse(fs.readFileSync(jsonFileLocation).toString())
      allResults.push(JSON.parse(resultString)[0])
      fs.writeFileSync(jsonFileLocation, JSON.stringify(allResults))
    } else {
      fs.writeFileSync(jsonFileLocation, resultString)

    }
  }
  
  this.registerListener(JsonFormatter)

  this.AfterFeatures(function(features, callback) {
    var options = {
        theme: 'bootstrap',
        jsonFile: 'results/json/tests_result.json',
        output: 'results/html/tests_result.html',
        reportSuiteAsScenarios: true
    };

    reporter.generate(options);
    callback();
    });

}


