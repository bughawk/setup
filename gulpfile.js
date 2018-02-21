var gulp = require('gulp'),
    path = require('path'),
    runSequence = require('run-sequence'),
    plugins = require('gulp-load-plugins')(),
    requireDir = require('require-dir');

global.baseDir = path.resolve(__dirname);

requireDir('./gulp/tasks', {
    recurse: true
});

// Application dev only
gulp.task('dev:application', function () {
    runSequence('build:application', 'lint:application', 'watch:application', 'tdd')
});

/*
// Public dev only
gulp.task('dev:public', function () {
    runSequence('build:public', 'lint:public', 'watch:public', 'tdd')
});

// Secure dev only
gulp.task('dev:secure', function () {
    runSequence('build:secure', 'lint:secure', 'watch:secure', 'tdd')
});
*/

// Build all files without tdd
gulp.task('build:all', function () {
    runSequence('build:application')
    // runSequence('build:plugins', 'build:application', 'build:secure', 'build:public', 'build:ticker')
});

// Full codebase dev
gulp.task('dev', function () {
    runSequence('build:application', 'watch:js', 'tdd')
//    runSequence('build:application', 'build:public', 'build:secure', 'watch:js', 'tdd')
});

// Full release build
gulp.task('prod:build', function () {
    console.log("running prod:build")
    runSequence('lint:build', 'build:application')
//    runSequence('lint:build', 'build:plugins', 'build:application', 'build:secure', 'build:public', 'build:ticker')
});