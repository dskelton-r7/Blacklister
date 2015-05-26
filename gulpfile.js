var gulp = require("gulp");
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var browserify = require('browserify');

gulp.task('js', function () {
  browserify({
    entries: 'index.js',
    extensions: ['.js'],
    debug: false
  })
  .transform(babelify, { stage: 0 })
  .bundle()
  .pipe(source('index.js'))
  .pipe(gulp.dest('./dist/'));
});


gulp.task('default', ['js']);

gulp.task('watch', function() {
  gulp.watch(['./js/src/**/*.js'], ['js']);
});



