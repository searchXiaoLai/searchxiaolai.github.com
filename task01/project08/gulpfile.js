var gulp = require('gulp'),
notify = require('gulp-notify'),
plumber = require('gulp-plumber'),
cssmin = require('gulp-minify-css'),
autoprefixer = require('gulp-autoprefixer'),
htmlmin = require('gulp-htmlmin'),
connect = require('gulp-connect');



gulp.task('html', function() {
    var options = {
        removeComments: true,
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        removeEmptyAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        minifyJS: true,
        minifyCSS: true
    };
    gulp.src('src/*.html')
    .pipe(htmlmin(options))
    .pipe(gulp.dest('dist'));
});

gulp.task('css', function() {
    gulp.src('src/css/*.css')
    .pipe(cssmin({
        advanced: false,
        keepBreaks: true
    }))
    .pipe(autoprefixer({
       browsers: ['last 2 versions', 'Android >= 4.0']
   }))
    .pipe(gulp.dest('dist/css'));
});


gulp.task('connect', function() {
    connect.server({
        root: './',
        livereload: true
    });
});


gulp.task('watch', function() {
    gulp.watch('src/css/*.css', ['css']);
    gulp.watch('src/*.html', ['html']);
})


gulp.task('default',['connect','watch']);
