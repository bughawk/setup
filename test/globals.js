// Karma needs these globals defined to run tests
var APP = APP || {};

// Jasmin jquery allows us to set a base path for fixtures
// var path = '';
// if (typeof window.karma !== 'undefined') {
//   path += 'base/'
// }
jasmine.getFixtures().fixturesPath = 'base/test/fixtures';