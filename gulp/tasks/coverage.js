var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    config = require('../../config');

gulp.task('unit:coverage', function () {
    return gulp.src('./test/reports/coverage/index.html')
        .pipe(plugins.open());
});