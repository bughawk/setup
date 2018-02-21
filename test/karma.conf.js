// Karma configuration
module.exports = function (config) {
    'use strict';

    config.set({
        basePath: '../',
        frameworks: ['jasmine-jquery', 'jasmine'],
        reporters: ['spec', 'junit'],
        junitReporter: {
            outputDir: 'test/reports/',
            outputFile: 'unit/JS_Unit_Test_Results.xml',
            suite: '',
            useBrowserName: false,
            nameFormatter: undefined,
            classNameFormatter: undefined,
            properties: {}
        },
        files: [
            // dependencies
            'test/globals.js',
            './node_modules/karma-jasmine-jquery-2/lib/jasmine-jquery.js',
            './node_modules/phantomjs-polyfill/bind-polyfill.js',

            // code you want to test
            'www/js/*.js',

            // test code
            'test/specs/**/*.spec.js',

            // serve html fixtures
            {
                pattern: "test/fixtures/**/*.html",
                watched: true,
                served: true,
                included: true
            },

            //  sourcemaps code
            //'www/js/maps/*.map',
        ],

        // list of files / patterns to exclude
        exclude: [],
        port: 9876,
        // list of browsers to run tests on
        // for DEV: use only PHANTOMJS for speed
        browsers: [
            'Chrome'
        ],
        // for UAT, STAGE AND PROD: use only chrome, firefox and IE for speed
        // browsers: [
        //   'Chrome',
        //   'Firefox',
        //   'IE'
        // ],
        captureTimeout: 20000,
        plugins: [
            'karma-phantomjs-launcher',
            'karma-jasmine',
            'karma-chrome-launcher',
            'karma-spec-reporter',
            'karma-jasmine-jquery-2',
            'karma-ie-launcher',
            'karma-firefox-launcher',
            'karma-jquery',
            'karma-junit-reporter',
            'karma-coverage'
        ],

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        //singleRun: true,
        colors: true,
        logLevel: config.LOG_INFO,
    });
};