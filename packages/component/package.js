Package.describe({
  name: 'jagi:components',
  version: '0.0.1'
});

Npm.depends({
  'react': '15.5.4'
});

Package.onUse(function(api) {
  api.versionsFrom('1.5');
  api.use('ecmascript');
  api.use('less');
  api.use('fourseven:scss');

  api.mainModule('main.js', 'client');
});