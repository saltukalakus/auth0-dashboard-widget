/*
 *
 * This is used to build the bundle with browserify.
 *
 * The bundle is used by people who doesn't use browserify.require
 * Those who use browserify will install with npm and require the module,
 * the package.json file points to index.js.
 */


//temporary disable define from AMD.
var old_define = global.define;
global.define = undefined;

var Auth0DasboardWidget = require('./');

//restore define
global.define = old_define;

// use amd or just throught to window object.
if (typeof global.define == 'function' && global.define.amd) {
  global.define('auth0-dashboard-widget', function () { return Auth0DasboardWidget; });
} else if (global) {
  global.Auth0DasboardWidget = Auth0DasboardWidget;
}
