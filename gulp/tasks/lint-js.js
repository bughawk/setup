var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    argv = require('yargs').argv,
    config = require('../../config');

var lintrules = {
  "env": {
    "node": true,
    "builtin": true,
    "es6": true
  },
  "globals": {
    "$": true,
    "APP": true
  },
  "rules": {
    "block-scoped-var": 0,
    "camelcase": 0,
    "comma-spacing": [1, { "before": false, "after": true }],
    "consistent-return": 0,
    "curly": [2, "all"],
    "dot-notation": [0, { "allowKeywords": true }],
    "eqeqeq": [0, "allow-null"],
    "global-strict": [0, "never"],
    "guard-for-in": 0,
    "indent": [1, 2, { "SwitchCase": 1, "VariableDeclarator": 1 }],
    "lines-around-comment": 0,
    "key-spacing": 0,
    "keyword-spacing": 1,
    "new-cap": 0,
    "no-alert": 0,
    "no-bitwise": 2,
    "no-caller": 2,
    "no-cond-assign": [2, "except-parens"],
    "no-debugger": 2,
    "no-dupe-args": 2,
    "no-dupe-keys": 2,
    "no-empty": 2,
    "no-eval": 0,
    "no-extend-native": 2,
    "no-extra-bind": 2,
    "no-extra-parens": 0,
    "no-extra-semi": 2,
    "no-func-assign": 2,
    "no-implied-eval": 2,
    "no-invalid-regexp": 2,
    "no-irregular-whitespace": 1,
    "no-iterator": 2,
    "no-loop-func": 2,
    "no-mixed-requires": 0,
    "no-multi-str": 2,
    "no-multi-spaces": 1,
    "no-native-reassign": 2,
    "no-new": 2,
    "no-param-reassign": 0,
    "no-proto": 2,
    "no-redeclare": 0,
    "no-script-url": 2,
    "no-self-assign": 2,
    "no-self-compare": 2,
    "no-sequences": 2,
    "no-shadow": 0,
    "no-undef": 0,
    "no-underscore-dangle": 0,
    "no-unreachable": 1,
    "no-unused-vars": 0,
    "no-use-before-define": 0,
    "no-useless-call": 2,
    "no-useless-concat": 0,
    "no-with": 2,
    "quotes": [0, "single"],
    "radix": 2,
    "semi": [0, "never"],
    "strict": 0,
    "space-before-blocks": 1,
    "space-before-function-paren": [1, {
      "anonymous": "always",
      "named": "never"
    }],
    "space-in-parens": [1, "never"],
    "space-infix-ops": 1,
    "valid-typeof": 2,
    "vars-on-top": 0,
    "wrap-iife": [2, "inside"]
  }
}

gulp.task('lint:application', function () {
    return gulp.src(config.build.js.application)
        .pipe(plugins.plumber())
        .pipe(plugins.eslint())
        .pipe(plugins.if(argv.verbose, plugins.eslint.format()))
        .pipe(plugins.eslint.failAfterError())
        .pipe(plugins.plumber.stop())
});

gulp.task('lint:build', ["lint:application"]);
