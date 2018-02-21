var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    argv = require('yargs').argv,
    config = require('../../config');

gulp.task('build:application', function () {
    return gulp.src(config.build.js.application)
        .pipe(plugins.if(argv.verbose, plugins.filelog()))
        .pipe(plugins.plumber())
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.if(argv.verbose, plugins.jscpd({
            'min-lines': 10,
            verbose: true
        })))
        .pipe(plugins.concat('application.js'))
        .pipe(plugins.sourcemaps.write('./maps'))
        .pipe(plugins.plumber.stop())
        .pipe(gulp.dest('./www/js'));
});