export default {
  import: ['features/step_definitions/*.js','features/hooks.js','features/world.js'],
  format: ['json:reports/cucumber_report.json','html:reports/cucumber_report.js']
};
