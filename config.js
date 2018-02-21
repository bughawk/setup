// location vars to be helpful
var buildBase = __dirname + "/www/js/app",
    common = buildBase + "/";

module.exports = {
  "serverport": 3000,
    "paths": {
      "js": {
        "app": "www/js/app/*.js"
      }
    },
    "build": {
      "js": {
        "application": [
          common + "appCore.js"
        ]    
      }
    }
};