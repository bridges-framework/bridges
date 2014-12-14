var gulp = require('gulp');
var to5 = require('gulp-6to5');
var paths = {
  source: './source/**/*.js',
  build: './build'
};
gulp.task('default', function() {
  gulp.src(paths.source)
    .pipe(to5())
    .pipe(gulp.dest(paths.build));
});

