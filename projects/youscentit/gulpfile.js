var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var notify = require('gulp-notify');
var htmlreplace = require('gulp-html-replace');
var uglifycss = require('gulp-uglifycss');

gulp.task('js', function () {
   gulp.src('src/js/*.js') //select all javascript files under js/ and any subdirectory
        .pipe(concat('app.min.js')) //the name of the resulting file
        .pipe(uglify())
        .pipe(gulp.dest('build/js/'))
        .pipe(notify({ message: 'Finished minifying JavaScript'}));
});

gulp.task('css', function () {
   gulp.src(['src/css/app.css','src/css/postcard.css',]) //select all javascript files under js/ and any subdirectory
        .pipe(concat('app.min.css')) //the name of the resulting file
        .pipe(gulp.dest('build/css/'))
        .pipe(notify({ message: 'Finished minifying CSS'}));
});

gulp.task('copy', function() {
    gulp.src('src/assets/**/*')
        .pipe(gulp.dest('build/assets/'));
    gulp.src('src/css/vendor/**/*')
        .pipe(gulp.dest('build/css/vendor/'));
    gulp.src('src/js/vendor/**/*')
        .pipe(gulp.dest('build/js/vendor/'));
    gulp.src(['src/postcard.tpl'])
        .pipe(gulp.dest('build/'));
    gulp.src('src/index.html')
        .pipe(htmlreplace({
            'css': 'css/app.min.css',
            'js': 'js/app.min.js'
        }))
        .pipe(gulp.dest('build/'));

});

gulp.task('default', function () {
  gulp.run('copy');
  gulp.run('js');
  gulp.run('css');

  gulp.watch('src/js/*.js', function () {
        gulp.run('js');
    });
  gulp.watch('src/css/*.css', function () {
        gulp.run('css');
    });
  gulp.watch('src/*', function () {
        gulp.run('copy');
  });
});
