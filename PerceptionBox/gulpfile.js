var gulp      = require('gulp'),
  sass        = require('gulp-sass'),
  cssnano     = require('gulp-cssnano'),
  rename      = require('gulp-rename'),
  concat      = require('gulp-concat'),
  uglifyjs    = require('gulp-uglifyjs');
  autoprefixer  = require('gulp-autoprefixer');


/* Компилируем style.scss в css с сжатием */
gulp.task('sass', function(){
  return gulp.src('src/style.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer(['last 15 versions', '>1%', 'ie 8']))
  .pipe(cssnano())
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('dist/css/'))
});


gulp.task('watch', function(){
  gulp.watch(['src/blocks/*/*.scss', 'src/style.scss'], ['sass']);
  gulp.watch(['src/js/*.js', 'blocks/*/*.js' ], ['scripts']);
});
