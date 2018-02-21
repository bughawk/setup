var gulp = require('gulp'),
    jv = require('junit-viewer'),
    runSequence = require('run-sequence'),
    config = require('../../config'),
    plugins = require('gulp-load-plugins')(),
    karma = require('karma'),
    Server = require('karma').Server;

gulp.task('tdd:karma', function (done) {
    var server = new karma.Server({
        configFile: baseDir + '/test/karma.conf.js',
        autoWatch: true,
        singleRun: false,
        detached: true,
        preprocessors: {
            'www/js/*.js': ['coverage']
        },
        reporters: ['spec', 'junit', 'coverage'],
        coverageReporter: {
            type: 'html',
            dir: 'test/reports/coverage/',
            subdir: '.'
        }
    }).start();

    var stopServer = function (options, err) {
        if (options.cleanup || options.exit) {
            karma.stopper.stop({
                port: 9876
            }, function (exitCode) {
                if (exitCode === 0) {
                    console.log('Server stop as initiated');
                }
                process.exit(exitCode);
            });
        } else if (err) {
            console.log(err.stack);
        }
    };

    // stop karma server when exit gulp
    process.on('exit', stopServer.bind(null, {
        cleanup: true
    }));

    //catches ctrl+c event
    process.on('SIGINT', stopServer.bind(null, {
        exit: true
    }));

    //catches uncaught exceptions
    process.on('uncaughtException', stopServer.bind(null, {
        exit: true
    }));

    // call done() so the task is marked as finished
    done();
});

gulp.task('tdd:report', function () {
    return plugins.run('junit-viewer --results=test/reports/unit/JS_Unit_Test_Results.xml --save=test/reports/unit/index.html').exec()
});

gulp.task('tdd:watch', function () {
    gulp.watch('test/reports/coverage/index.html', ['tdd:report'])
});
