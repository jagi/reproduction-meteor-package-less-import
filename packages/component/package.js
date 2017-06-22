Package.describe({
  name: 'jagi:component',
  version: '0.0.1'
});

Npm.depends({
  'react': '15.5.4'
});

Package.onUse(function(api) {
  api.versionsFrom('1.5');
  api.use('ecmascript');
  api.use('less');

  // api.addFiles('component.less', 'client');
  api.addFiles('component.less', 'client', {
    isImport: true
  });

  api.mainModule('component.js', 'client');
});