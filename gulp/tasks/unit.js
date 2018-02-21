var gulp = require('gulp'),
  jv = require('junit-viewer'),
  runSequence = require('run-sequence'),
  plugins = require('gulp-load-plugins')(),
  Server = require('karma').Server;

var report = function () {
  runSequence('unit:report', 'unit:coverage', 'unit:open')
};

gulp.task('unit:karma', function (done) {
  new Server({
    configFile: baseDir + '/test/karma.conf.js',
    autoWatch: false,
    singleRun: true,
    port: 3000,
    preprocessors: {
      'www/js/*.js': ['coverage']
    },
    reporters: ['spec', 'junit', 'coverage'],
    coverageReporter: {
      type: 'html',
      dir: 'test/reports/coverage/',
      subdir: '.'
    }
  }, function (err) {
    if (err === 0) {
      report()
      done();
    } else {
      report()
      done(new plugins.util.PluginError('karma', {
        message: 'Karma Tests failed'
      }));
    }
  }).start();
});

gulp.task('unit:report', function () {
  return plugins.run('junit-viewer --results=test/reports/unit/JS_Unit_Test_Results.xml --save=test/reports/unit/index.html').exec()
});

gulp.task('unit:open', function () {
  return gulp.src('test/reports/unit/index.html').pipe(plugins.open())
});

gulp.task('unit', function () {
  runSequence('unit:report', 'unit:coverage', 'unit:open')
});