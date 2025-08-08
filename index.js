// reporter.js
import reporter from 'cucumber-html-reporter'

const options = {
  theme: 'bootstrap', // You can choose other themes like 'hierarchy', 'foundation', 'simple'
  jsonFile: 'reports/cucumber_report.json',
  output: 'reports/cucumber_html_report.html',
  reportSuiteAsScenario: true,
  scenarioTimestamp: true,
  launchReport: true, 
  metadata: {
    "App Version": "1.0.0",
    "Test Environment": "STAGING",
    "Browser": "Chrome",
    "Platform": "Windows 10"
  }
};

reporter.generate(options);