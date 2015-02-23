var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var notify = require('gulp-notify');
var htmlreplace = require('gulp-html-replace');
var uglifycss = require('gulp-uglifycss');

var project = "boxer";

gulp.task('js', function () {
   gulp.src('src/js/*.js') //select all javascript files under js/ and any subdirectory
        .pipe(concat(project+'.min.js')) //the name of the resulting file
        .pipe(uglify())
        .pipe(gulp.dest('build/js/'+project+'/'))
        .pipe(notify({ message: 'Finished minifying JavaScript'}));
});

gulp.task('css', function () {
   gulp.src(['src/js/*.css']) //select all javascript files under js/ and any subdirectory
        .pipe(concat(project+'.min.css')) //the name of the resulting file
        .pipe(uglifycss())
        .pipe(gulp.dest('build/js/'+project+'/'))
        .pipe(notify({ message: 'Finished minifying CSS'}));
});

gulp.task('copy', function() {
    gulp.src('src/assets/**/*')
        .pipe(gulp.dest('build/assets/'));
    gulp.src('src/js/*')
        .pipe(gulp.dest('build/js/'+project+'/'));
    gulp.src('src/css/**/*')
        .pipe(gulp.dest('build/css/'));
    gulp.src('src/page.html')
        .pipe(gulp.dest('build/'));
    gulp.src('src/index.html')
        .pipe(htmlreplace({
            'css':'js/'+project+'/'+project+'.min.css',
            'js': 'js/'+project+'/'+project+'.min.js'
        }))
        .pipe(gulp.dest('build/'))
        .pipe(notify({ message: 'Finished copying files'}));
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
