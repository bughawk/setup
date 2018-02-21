var gulp = require('gulp'),
  config = require('../../config'),
  watch = require('gulp-watch');

gulp.task('watch:application', function () {
  gulp.watch(config.build.js.application, ['build:application'])
});

gulp.task('watch:js', function () {
  gulp.watch(config.paths.js.script, ['build:application'])
});