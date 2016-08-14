var gulp = require('gulp');
var uglify = require('gulp-uglify');
var useref = require('gulp-useref');
var gulpIf = require('gulp-if');
var pump = require('pump');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var runSequence = require('run-sequence');

gulp.task('compressPortfolioJS', function(){
  return gulp.src('app/*.html')
    .pipe(useref())
    // Minifies only if it's a JavaScript file
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulp.dest('dist'))
});

gulp.task('compressPizzaSiteJS', function (cb) {
  pump([
        gulp.src('app/views/js/*.js'),
        uglify(),
        gulp.dest('dist/views/js')
    ],
    cb
  );
});

gulp.task('compressPortfolioCSS', function() {
  return gulp.src('app/css/*.css')
    .pipe(cssnano())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('compressPizzaSiteCSS', function(){
  return gulp.src('app/views/*.html')
    .pipe(useref())
    // Minifies only if it's a CSS file
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist/views'))
});

gulp.task('compressPortfolioImages', function(){
  return gulp.src('app/img/*.+(png|jpg|gif|svg)')
    .pipe(cache(imagemin()))
    .pipe(gulp.dest('dist/img'))
});

gulp.task('compressPizzaSiteImages', function(){
  return gulp.src('app/views/images/*.+(png|jpg|gif|svg)')
    .pipe(cache(imagemin()))
    .pipe(gulp.dest('dist/views/images'))
});

gulp.task('buildEntireProject', function(callback) {
  runSequence('compressPortfolioJS', 'compressPizzaSiteJS', 'compressPortfolioCSS', 'compressPizzaSiteCSS', 'compressPortfolioImages', 'compressPizzaSiteImages', callback);
});