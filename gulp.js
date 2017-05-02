// Gulp.js configuration
var
  // modules
  gulp = require('gulp'),
var emailBuilder = require('gulp-email-builder');
  // development mode?
  devBuild = (process.env.NODE_ENV !== 'production'),

  // folders
  folder = {
    src: 'src/',
    build: 'build/'
  }
;
  gulp.task('emailBuilder', function() {
    return gulp.src(['./example/html/*.html'])
      .pipe(emailBuilder(options).build())
      .pipe(gulp.dest('./example/dist/'));
  });